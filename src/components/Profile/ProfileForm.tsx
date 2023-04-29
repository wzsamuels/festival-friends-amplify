import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import React, {useState} from "react";
import styled from "styled-components";
import {UserProfile} from "../../models";
import {ProfileInputs} from "../../types";
import states from "../../data/states";

interface ProfileFormProps {
  onSubmit: SubmitHandler<ProfileInputs>,
  profile: UserProfile | null | undefined
}

const ProfileForm = ({onSubmit, profile}: ProfileFormProps) => {
  const [message, setMessage] = useState("")
  const { register, handleSubmit, control, setValue, formState: { errors }} = useForm<ProfileInputs>({
    defaultValues: {
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      username: profile?.username || "",
      phone: profile?.phone || "",
      school: profile?.school || "",
      city: profile?.city || "",
      state: profile?.state || "",
      zipcode: profile?.zipcode || "",
      address: profile?.address || "",
      address2: profile?.address2 || "",
    }
  })
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={'w-full'}>
        <div>
          <label>First Name</label>
          <input {...register("firstName", {required: true})} />
        </div>
        <div>
          <label>Last Name</label>
          <input {...register("lastName", {required: true})}/>
        </div>
        <div>
          <label>Phone</label>
          <input {...register("phone", {required: true})} type='tel'/>
        </div>
        <div>
          <label>School</label>
          <input {...register("school")}/>
        </div>
        <div>
          <label>Address</label>
          <input {...register("address")}/>
          <div slot='helper'>Street address</div>
        </div>
        <div>
          <label className='ion-text-wrap'>Address Line 2</label>
          <input  {...register("address2")} />
          <div slot='helper'>Apartment, suite, unit etc</div>
        </div>
        <div>
          <label>City</label>
          <input {...register("city", {required: true})}/>
        </div>
        <div>
          <label>State</label>
          <Controller
            render={({ field }) => (
            <select
              placeholder="Select One"
          value={field.value}
          onChange={e => setValue('state', e.target.value)}
            >
            {states.map((state) => (
                <option key={state} value={state}>{state}</option>
        ))}
          </select>
        )}
          control={control}
          name="state"
          rules={{ required: 'This is a required field' }}
          />
          <ErrorMessage
          errors={errors}
          name="state"
          as={<div className='text-danger-default' />}
          />
        </div>
        <div>

          <label>Zip Code</label>
          <input {...register("zipcode")} />
        </div>

        <div className='my-6 flex justify-center'>
          <button type='submit' className='my-4'>Update Profile</button>
        </div>
        { message }
      </form>
    </div>
  )
}

export default ProfileForm