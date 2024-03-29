import {SubmitHandler, useForm, Controller, useFieldArray} from "react-hook-form";
import React, {useState} from "react";
import {PrivacySetting, SocialMedia, Profile} from "../../models";
import { DataStore } from "@aws-amplify/datastore";
import { ProfileInputs } from "../../types";
import InputWrapper from "../../components/common/InputWrapper/InputWrapper";
import Input from "../../components/common/Input/Input";
import Label from "../../components/common/Label/Label";
import Button from "../../components/common/Button/Button";
import states from "../../data/states";
import { useFormattedPhoneInput } from "../../hooks/useFormattedPhoneInput";
import useProfileStore from "../../stores/profileStore";
import Select from "../../components/common/Select";
import socialMediaTypes from "../../data/socialMediaTypes.json";
import {createNewPhoto} from "../../services/photoServices";
import ImageUpload from "../../components/common/ImageUpload";
import useFilePreview from "../../hooks/useFilePreview";
import {getGroupByEmail} from "../../services/groupServices";
import {API} from "@aws-amplify/api";
import {PlusIcon} from "@heroicons/react/24/outline";
import {useAuth0} from "@auth0/auth0-react";

const AccountUnverified = () => {
  const userProfile = useProfileStore((state) => state.userProfile);
  const setProfile = useProfileStore((state) => state.setProfile);
  const { phone, inputRef, handlePhoneChange } = useFormattedPhoneInput();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {selectedFile, setSelectedFile, preview} = useFilePreview()
  const { register, handleSubmit, control, formState: { errors } } = useForm<ProfileInputs>();
  const { fields, append, remove } = useFieldArray({name: "socialMedia", control})
  const [errorMessage, setErrorMessage] = useState("");
  const {user} = useAuth0();

  const createNewProfile: SubmitHandler<ProfileInputs> = async (data) => {
    if(!selectedFile) {
      setErrorMessage("A photo is required.")
      return;
    }

    setIsSubmitting(true);
    try {
      const email = user?.email as string;
      const group = await getGroupByEmail(email);
      console.log("College Group: ", group)

      const newPrivacySetting =  await DataStore.save(new PrivacySetting({}));
      const { socialMedia, ...filteredData} = data;

      const newUserProfile = await DataStore.save(new Profile({
        ...filteredData,
        email: email,
        ...(phone && {phone: phone}),
        ...(group && {groupID: group?.id}),
        submitted: true,
        privacySetting: newPrivacySetting,
      }));

      socialMedia.map(async (account) =>
        await DataStore.save(new SocialMedia({
          socialMediaType: account.type,
          accountURL: account.url,
          profileSocialMediaId: newUserProfile.id
        })));

      const verifyPhoto = await createNewPhoto(selectedFile, newUserProfile.id);
      verifyPhoto && await DataStore.save(Profile.copyOf(newUserProfile, (updated) => {
        updated.verifyPhotoID = verifyPhoto.id;
      }));
      setProfile(newUserProfile);

      const emailResponse = await API.post('email', '/', {
        body: {
          subject: "New Account Needs Verification",
          emailBody: `
            <html lang="en">
              <body>                
                <div>Verify new accounts at <a href='https://www.eventfriends.app/admin/accounts'>https://www.eventfriends.app/admin/accounts</a></div>
              </body>
            </html>`,
          toAddress: ["gabrielle@eventfriends.app", "contact@twinsilverdesign.com"],
        }
      })
      console.log(emailResponse)
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
    <div className="flex flex-col justify-center items-center mt-4 p-4 ">
      <div className="w-full max-w-4xl shadow-xl p-4 my-4 rounded">
        <h1 className="text-xl md:text-2xl text-center">Create Profile</h1>
        <p className="mt-6">
          This personal information will be used to verify your identity for the
          safety of our community. Please use a <span className="italic">new</span> photograph of yourself that is not anywhere else online. Once your profile is verified, you can control the privacy of your information.
        </p>
        <p className="my-4">
          Adding social media accounts will speed up the verification process.
        </p>
        <form
          onSubmit={handleSubmit(createNewProfile)}
        >
          <div className="flex flex-col gap-4 md:flex-row">
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
          <div className="flex flex-col gap-4 md:flex-row">
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
          <InputWrapper className="my-4 flex-1">
            <Label>Zip Code</Label>
            <Input className="max-w-[150px]" {...register("zipcode", { required: true })} />
          </InputWrapper>
          <InputWrapper className="mt-8">
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
                  onChange={handlePhoneChange}
                  ref={inputRef}
                  className="max-w-[150px]"
                />
              )}
            />
          </InputWrapper>
          <div className="text-sm">(optional)</div>

          <section className="mt-8">
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
                <PlusIcon className='h-4'/>
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
                  <img src={preview} alt="Preview" />
                </div>
              }
            </div>
            <ImageUpload setSelectedFile={setSelectedFile}/>
          </section>
          {errors.firstName && <div className="mt-2 text-red-500">First name is required</div>}
          {errors.lastName && <div className="mt-2 text-red-500">Last name is required</div>}
          {errors.city && <div className="mt-2 text-red-500">City is required</div>}
          {errors.state && <div className="mt-2 text-red-500">State is required</div>}
          {errors.address && <div className="mt-2 text-red-500">Address is required</div>}
          {errors.zipcode && <div className="mt-2 text-red-500">Zipcode is required</div>}
          {errorMessage && <div className="mt-2 text-red-500">{errorMessage}</div>}
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