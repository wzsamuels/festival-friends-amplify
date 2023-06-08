import {SubmitHandler, useForm, Controller, useFieldArray} from "react-hook-form";
import React, {useState} from "react";
import {PrivacySetting, SocialMedia, Profile} from "../../../models";
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
import {BsPlus} from "react-icons/all";
import socialMediaTypes from "../../../data/socialMediaTypes.json";
import {createNewPhoto} from "../../../services/photoServices";
import ImageUpload from "../../common/ImageUpload";
import useFilePreview from "../../../hooks/useFilePreview";
import {getGroupByEmail} from "../../../services/groupServices";

const AccountUnverified = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const userProfile = useProfileStore((state) => state.userProfile);
  const setProfile = useProfileStore((state) => state.setProfile);
  const { phone, inputRef, handlePhoneChange } = useFormattedPhoneInput();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {selectedFile, setSelectedFile, preview} = useFilePreview()
  const { register, handleSubmit, control } = useForm<ProfileInputs>();
  const { fields, append, remove } = useFieldArray({name: "socialMedia", control})

  const createNewProfile: SubmitHandler<ProfileInputs> = async (data) => {
    if(!selectedFile) return;

    setIsSubmitting(true);
    try {
      const sub = user?.attributes?.sub as string;
      const email = user?.attributes?.email as string;
      const newPrivacySetting =  await DataStore.save(new PrivacySetting({}));
      const collegeGroup = await getGroupByEmail(email);
      const { socialMedia, ...filteredData} = data;

      const socialMediaPromises = socialMedia.map(async (account) =>
        await DataStore.save(new SocialMedia({
          socialMediaType: account.type,
          accountURL: account.url,
        })));
      const socialMediaResults = await Promise.all(socialMediaPromises);

      const newUserProfile = await DataStore.save(new Profile({
        ...filteredData,
        email: email,
        phone: phone,
        ...(collegeGroup && {collegeGroupId: collegeGroup?.id}),
        submitted: true,
        privacySetting: newPrivacySetting,
        sub: sub,
        socialMedia: socialMediaResults,
      }));


      const verifyPhoto = await createNewPhoto(sub, selectedFile, newUserProfile.id);
      verifyPhoto && await DataStore.save(Profile.copyOf(newUserProfile, (updated) => {
        updated.verifyPhotoID = verifyPhoto.id;
      }));
      setProfile(newUserProfile);
      console.log(`New profile: `, newUserProfile, "\nNew Privacy Setting: ", newPrivacySetting);
    } catch (err) {
      console.error("Error saving profile:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted || userProfile?.submitted) {
    return (
      <div className="flex flex-col w-full justify-center items-center mt-4 p-4">
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

  if(isSubmitting) {
    return (
      <div className="flex flex-col justify-center items-center my-4 p-4">
        <h1 className="text-xl md:text-2xl my-4">Submitting Profile...</h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center mt-4 p-4">
      <h1 className="text-xl md:text-2xl">Create Profile</h1>
      <p className="my-6">
        This personal information will be used to verify your identity for the
        safety of our community. Please use a <span className="font-bold">new</span> photograph of yourself that Once your profile is verified, all your
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
          <section>
            <div className='flex justify-between items-center'>
              <h2 className='font-bold'>Social Media Accounts</h2>
              <Button
                type="button"
                className="my-4"
                onClick={() => append({
                  id: "0",
                  type: "",
                  url: "",
                  saved: false
                })}
              >
                <BsPlus/>
              </Button>
            </div>
            <div className="my-4">
              { fields.map((socialMedia, index) =>
                <div className='my-4 flex justify-between' key={index} >
                  <div className='flex-auto'>
                    <div className="flex flex-wrap my-4">
                      <Label>Social Media</Label>
                      <Select
                        {...register(`socialMedia.${index}.type` as const, { required: true })}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select social media
                        </option>
                        {socialMediaTypes.map((media) => (
                          <option key={media.id} value={media.name}>
                            {media.name}
                          </option>
                        ))}
                      </Select>
                    </div>
                    <div className="flex flex-wrap my-4">
                      <Label>Account URL</Label>
                      <Input {...register(`socialMedia.${index}.url` as const)} />
                    </div>
                    <div className='flex justify-center gap-4'>
                      <Button type="button" className='mx-4' onClick={() => remove(index)} variation='outline'>Cancel</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
          <section>
            <div className="flex justify-center">
              {preview &&
                <div className='max-w-xl'>
                  <img className=" rounded-full" src={preview} alt="Preview" />
                </div>
              }
            </div>
            <ImageUpload setSelectedFile={setSelectedFile}/>
          </section>
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

export default AccountUnverified;