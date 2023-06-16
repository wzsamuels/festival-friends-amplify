import {SubmitHandler, useFieldArray, useForm} from "react-hook-form";

import React, { useEffect, useState} from "react";
import {SocialMedia, Profile} from "../../../models";
import { ProfileInputs } from "../../../types";
import states from "../../../data/states";
import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Select from "../../common/Select";
import useDataClearedStore from "../../../stores/dataClearedStore";
import {BsPlus} from "react-icons/all";
import {DataStore} from "@aws-amplify/datastore";
import socialMediaTypes from "../../../data/socialMediaTypes.json";

interface ProfileFormProps {
  onSubmit: SubmitHandler<ProfileInputs>;
  profile: Profile | null | undefined;
}

const AccountEditForm = ({ onSubmit, profile }: ProfileFormProps) => {
  const [message, setMessage] = useState("");
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm<ProfileInputs>({
    defaultValues: {
      firstName: profile?.firstName || "",
      lastName: profile?.lastName || "",
      phone: profile?.phone || "",
      school: profile?.school || "",
      city: profile?.city || "",
      state: profile?.state || "",
      zipcode: profile?.zipcode || "",
      address: profile?.address || "",
      address2: profile?.address2 || "",
      //socialMedia: [],
    },
  });

  const { fields, append, remove } = useFieldArray({name: "socialMedia", control})

  useEffect(() => {
    if(!profile || !dataCleared) return;
    const fetchSocialMedia = async () => {
      const socialMedia = await profile.socialMedia.toArray();
      return socialMedia.map(sm => {
        return {
          id: sm.id,
          type: sm.socialMediaType,
          url: sm.accountURL,
          saved: true
        }
      })
    }
    fetchSocialMedia().then(socialMedia => setValue("socialMedia",  socialMedia))
  }, [profile])

  const handleSocialMediaDelete = async (index: number) => {
    const socialMedia = getValues("socialMedia")
    await DataStore.delete(SocialMedia, socialMedia[index].id as string)
    remove(index)
  }

  const handleSocialMediaSave = async (index: number) => {
    const socialMedia = getValues("socialMedia")

    const newSM = await DataStore.save(new SocialMedia({
      socialMediaType: socialMedia[index].type,
      accountURL: socialMedia[index].url,
      profileSocialMediaId: profile?.id
    }))

    const latestProfile = await DataStore.query(Profile, profile?.id as string)
    await DataStore.save(Profile.copyOf(latestProfile as Profile, updated => {
      if(updated.socialMedia) {
        updated.socialMedia.push(newSM)
      } else {
        updated.socialMedia = [newSM]
      }
    }))

    socialMedia[index].id = newSM.id
    socialMedia[index].saved = true
    setValue("socialMedia", socialMedia)

    console.log(newSM)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"[&>*]:my-4 w-full max-w-[400px]"}
    >
      <div className="flex flex-wrap">
        <Label>First Name</Label>
        <Input {...register("firstName", { required: true })} />
      </div>
      {errors.firstName && <div className="text-red-700">This is a required field</div>}
      <div className="flex flex-wrap">
        <Label>Last Name</Label>
        <Input {...register("lastName", { required: true })} />
      </div>
      {errors.lastName && <div className="text-red-700">This is a required field</div>}
      <div className="flex flex-wrap">
        <Label>Phone</Label>
        <Input {...register("phone", { required: true })} type="tel" />
      </div>
      {errors.phone && <div className="text-red-700">This is a required field</div>}
      <div className="flex flex-wrap">
        <Label>School</Label>
        <Input {...register("school")} />
      </div>
      <div className="flex flex-wrap">
        <Label>Address</Label>
        <Input {...register("address")} />
      </div>
      <div className="flex flex-wrap">
        <Label className="ion-text-wrap">Address Line 2</Label>
        <Input {...register("address2")} />
      </div>
      <div className="flex flex-wrap">
        <Label>City</Label>
        <Input {...register("city", { required: true })} />
      </div>
      {errors.city && <div className="text-red-700">This is a required field</div>}
      <div className="flex flex-wrap">
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
      </div>
      <div className="flex flex-wrap">
        <Label>Zip Code</Label>
        <Input {...register("zipcode")} />
      </div>
      <section className=''>
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
              {
                socialMedia.saved ?
                  <>
                    <Button type="button" className='mx-4' onClick={() => handleSocialMediaDelete(index)}>Delete</Button>
                  </>
                    :
                  <>
                    <Button type="button" className='mx-4' onClick={() => remove(index)} variation='outline'>Cancel</Button>
                    <Button type="button" className='mx-4' onClick={() => handleSocialMediaSave(index)}>Save</Button>
                  </>
              }
              </div>
            </div>
          </div>
        )}
        </div>
      </section>

      <div className="my-6 flex justify-center">
        <Button type="submit" className="my-4">
          Update Profile
        </Button>
      </div>
      {message}
    </form>
  );
};

export default AccountEditForm;
