import { SubmitHandler, useForm, Controller } from "react-hook-form";
import React, { useRef, useState } from "react";
import {CollegeGroup, PrivacySetting, UserProfile} from "../../../models";
import { DataStore } from "@aws-amplify/datastore";
import { ProfileInputs } from "../../../types";
import { useAuthenticator } from "@aws-amplify/ui-react";
import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Input from "../../common/Input/Input";
import Label from "../../common/Label/Label";
import Button from "../../common/Button/Button";
import states from "../../../data/states";
import { useFormattedPhoneInput } from "../../../hooks/useFormattedPhoneInput";
import useProfileStore from "../../../stores/profileStore";
import Select from "../../common/Select";
import {getCollegeGroupByEmail} from "../../../services/collegeGroupServices";
import {CreateUserProfileInput, CreateUserProfileMutation} from "../../../API";
import {API, graphqlOperation} from "aws-amplify";
import {GraphQLQuery} from "@aws-amplify/api";
import * as mutations from "../../../graphql/mutations";

const ProfileUnverified = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const userProfile = useProfileStore((state) => state.userProfile);
  const { phone, inputRef, handlePhoneChange } = useFormattedPhoneInput();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, control } = useForm<ProfileInputs>({
    defaultValues: {
      firstName: userProfile?.firstName || "",
      lastName: userProfile?.lastName || "",
      school: userProfile?.school || "",
      city: userProfile?.city || "",
      state: userProfile?.state || "",
      zipcode: userProfile?.zipcode || "",
      address: userProfile?.address || "",
      address2: userProfile?.address2 || "",
    },
  });
  const email = user?.attributes?.email as string;

  const createNewProfile: SubmitHandler<ProfileInputs> = async (data) => {
    //alert(`Email: ${email}\nUsername: ${username}\nData: ${JSON.stringify(data)}`)
    setIsSubmitting(true);
    try {
      const newPrivacySetting =  await DataStore.save(new PrivacySetting({}));
      const collegeGroup = await getCollegeGroupByEmail(email);

      const userProfileInput: CreateUserProfileInput = {
        ...data,
        ...(collegeGroup && {collegeGroupId: collegeGroup?.id}),
        privacySettingID: newPrivacySetting.id
      }

      const newUserProfile = await API.graphql<GraphQLQuery<CreateUserProfileMutation>>(
        graphqlOperation(mutations.createUserProfile, {
          input: userProfileInput}));

      console.log(`New profile: `, newUserProfile);
      /*
      if (userProfile) {
        const newProfile = await DataStore.save(UserProfile.copyOf(userProfile, (updated) => {
            updated.verifySubmitted = true;
            updated.phone = phone;
            updated.firstName = data.firstName;
            updated.lastName = data.lastName;
            updated.school = data.school;
            updated.city = data.city;
            updated.state = data.state;
            updated.zipcode = data.zipcode;
            updated.address = data.address;
            updated.address2 = data.address2;
            updated.collegeGroup = collegeGroup;
          }));
        console.log("Updated existing profile: ", JSON.stringify(newProfile));
      }
       */

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
              <Select
                {...register("state", { required: true })}
                name="state"
                defaultValue=""
              >
                <option value="" disabled>
                  Select state
                </option>
                {states.map((state) => (
                  <option key={state.code} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </Select>
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
