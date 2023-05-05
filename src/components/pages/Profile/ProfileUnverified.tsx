import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import {CollegeGroup, UserProfile} from "../../../models";
import {DataStore} from "@aws-amplify/datastore";
import {ProfileInputs} from "../../../types";
import {useAuthenticator} from "@aws-amplify/ui-react";
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Input from "../../Input/Input";
import Label from "../../Label/Label";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";

const ProfileUnverified = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const userProfile = useUserProfileStore(state => state.userProfile)
  const { register, handleSubmit} = useForm<ProfileInputs>({
    defaultValues: {
      firstName: userProfile?.firstName,
      lastName: userProfile?.lastName,
      username: userProfile?.username || "",
      phone: userProfile?.phone || "",
      school: userProfile?.school || "",
      city: userProfile?.city || "",
      state: userProfile?.state || "",
      zipcode: userProfile?.zipcode || "",
      address: userProfile?.address || "",
      address2: userProfile?.address2 || "",
    }
  })
  const username = user.username as string;
  const email = user?.attributes?.email as string;

  const createNewProfile: SubmitHandler<ProfileInputs> = async data => {
    alert(`Email: ${email}\nUsername: ${username}\nData: ${JSON.stringify(data)}`)

    let collegeGroup: CollegeGroup | null = null;
    if(email?.endsWith('.edu')) {
      const emailDomain = email.split('@')[1]
      alert(emailDomain)
      const collegeGroups = await DataStore.query(CollegeGroup, c => c.domain.eq(emailDomain))
      collegeGroup = collegeGroups[0];
    }
    try {
      console.log("Creating profile from data:", data)
      const newProfile = await DataStore.save(
        new UserProfile({
          "verified": false,
          "verifySubmitted": true,
          "userID": username,
          "email": email,
          ...data,
          ...(collegeGroup && {collegeGroup: collegeGroup}),
        })
      );
      console.log(newProfile);
    } catch(err) {
      console.error("Error saving profile:", err)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <h1 className='text-xl md:text-2xl'>Create Profile</h1>
      <p className='my-6'>This personal information will be used to verify your identity for the safety of our community. Once your profile is verified, all your information will be set to private until you specify otherwise.</p>
      <form className='flex flex-col w-full' onSubmit={handleSubmit(createNewProfile)}>
        <div className='flex flex-wrap'>
          <label className='basis-[150px]'>First Name</label>
          <input className='border-b  border-b-medium-tint focus:border-b-primary-default focus:outline-0' {...register("firstName")}/>
        </div>
        <div className='flex flex-wrap'>
          <label className='basis-[150px]'>Last Name</label>
          <input className='border-b border-b-medium-tint focus:border-b-primary-default focus:outline-0' {...register("lastName")}/>
        </div>
        <div className='flex flex-wrap'>
          <label className='basis-[150px]'>Phone</label>
          <input className='border-b border-b-medium-tint focus:border-b-primary-default focus:outline-0' {...register("phone")}/>
        </div>
        <InputWrapper>
          <Label>City</Label>
          <Input {...register('city')} name="city"/>
        </InputWrapper>
        <InputWrapper>
          <Label>State</Label>
          <Input {...register('state')} name="state"/>
        </InputWrapper>
        <div className='flex flex-wrap'>
          <label className='basis-[150px]'>Address</label>
          <input className='border-b border-b-medium-tint focus:border-b-primary-default focus:outline-0' {...register("address")}/>
        </div>
        <div className='flex flex-wrap'>
          <label className='basis-[150px]'>Address 2</label>
          <input className='border-b border-b-medium-tint focus:border-b-primary-default focus:outline-0' {...register("address2")}/>
        </div>
        <div className='flex justify-center items-center my-6'>
          <button className='bg-primary-default text-light-default rounded-md px-8 py-2' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileUnverified