import { SubmitHandler, useForm, Controller } from "react-hook-form";
import React, { useRef, useState } from "react";
import { CollegeGroup, UserProfile } from "../../../models";
import { DataStore } from "@aws-amplify/datastore";
import { ProfileInputs } from "../../../types";
import { useAuthenticator } from "@aws-amplify/ui-react";
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Input from "../../common/Input/Input";
import Label from "../../common/Label/Label";
import { useUserProfileStore } from "../../../stores/friendProfilesStore";
import Button from "../../common/Button/Button";
import states from "../../../data/states";
import { useFormattedPhoneInput } from "../../../hooks/useFormattedPhoneInput";

const ProfileUnverified = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const { phone, inputRef, handlePhoneChange } = useFormattedPhoneInput();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, control } = useForm<ProfileInputs>({
    defaultValues: {
      firstName: userProfile?.firstName || "",
      lastName: userProfile?.lastName || "",
      username: userProfile?.username || "",
      school: userProfile?.school || "",
      city: userProfile?.city || "",
      state: userProfile?.state || "",
      zipcode: userProfile?.zipcode || "",
      address: userProfile?.address || "",
      address2: userProfile?.address2 || "",
    },
  });
  const username = user.username as string;
  const email = user?.attributes?.email as string;

  const createNewProfile: SubmitHandler<ProfileInputs> = async (data) => {
    if(!userProfile) return;
    //alert(`Email: ${email}\nUsername: ${username}\nData: ${JSON.stringify(data)}`)
    setIsSubmitting(true);
    let collegeGroup: CollegeGroup | null = null;
    if (email?.endsWith(".edu")) {
      const emailDomain = email.split("@")[1];
      const collegeGroups = await DataStore.query(CollegeGroup, (c) =>
        c.domain.eq(emailDomain)
      );
      collegeGroup = collegeGroups[0];
      alert("Detected college group: " + emailDomain + " " + collegeGroup?.name);
    }
    try {
      console.log("Creating profile from data:", data);
      const newProfile = await DataStore.save(UserProfile.copyOf(userProfile, (updated) => {
        updated.verifySubmitted = true;
        updated.phone = phone;
        updated.firstName = data.firstName;
        updated.lastName = data.lastName;
        updated.username = data.username;
        updated.school = data.school;
        updated.city = data.city;
        updated.state = data.state;
        updated.zipcode = data.zipcode;
        updated.address = data.address;
        updated.address2 = data.address2;
        updated.collegeGroup = collegeGroup;
        })
      );
      console.log(newProfile);
    } catch (err) {
      console.error("Error saving profile:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted || userProfile?.verifySubmitted) {
    return (
      <div className="flex flex-col justify-center items-center mt-4 p-4">
        <h1 className="text-xl md:text-2xl">Profile Created!</h1>
        <p className="my-6">
          Your profile has been submitted for verification. You&apos;ll receive
          an email at the address you used to sign up for this account once the
          process has been completed.
        </p>
        <p>
          If you&apos;ve received confirmation that your profile has been
          verified but are still seeing this message, please try refreshing this
          page.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-4 p-4">
      <h1 className="text-xl md:text-2xl">Create Profile</h1>
      <p className="my-6">
        This personal information will be used to verify your identity for the
        safety of our community. Once your profile is verified, all your
        information will be set to private until you specify otherwise.
      </p>
      <div className="flex justify-center w-full">
        <form
          className="w-full max-w-4xl shadow-xl p-4 my-4 rounded"
          onSubmit={handleSubmit(createNewProfile)}
        >
          <div className="flex flex-col md:flex-row">
            <InputWrapper className="my-4 flex-1">
              <Label className="">First Name</Label>
              <Input
                className="mr-2"
                {...register("firstName", { required: true })}
              />
            </InputWrapper>
            <InputWrapper className="my-4 flex-1">
              <Label>Last Name</Label>
              <Input {...register("lastName", { required: true })} />
            </InputWrapper>
          </div>
          <div className="flex flex-col md:flex-row">
            <InputWrapper className="my-4 flex-1">
              <Label>City</Label>
              <Input {...register("city", { required: true })} name="city" />
            </InputWrapper>
            <InputWrapper className="my-4 flex-1">
              <Label>State</Label>
              <select
                placeholder=""
                {...register("state", { required: true })}
                name="state"
              >
                <option value="" disabled selected>
                  Select state
                </option>
                {states.map((state) => (
                  <option key={state.code} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>
          <InputWrapper className="my-4">
            <label className="basis-[150px]">Address</label>
            <Input {...register("address", { required: true })} />
          </InputWrapper>
          <InputWrapper className="my-4">
            <label className="basis-[150px]">Address 2</label>
            <Input {...register("address2")} />
          </InputWrapper>
          <InputWrapper className="my-4">
            <label className="basis-[150px]">Phone</label>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="tel"
                  {...field}
                  value={phone}
                  required
                  onChange={handlePhoneChange}
                  ref={inputRef}
                />
              )}
            />
          </InputWrapper>
          <div className="flex justify-center items-center my-6">
            <Button
              className="bg-primary-default text-light-default rounded-md px-8 py-2"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUnverified;
