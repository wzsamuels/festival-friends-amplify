import {IonButton, IonInput, IonItem, IonSelect, IonSelectOption} from "@ionic/react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import React, {useState} from "react";
import styled from "styled-components";
import {UserProfile} from "../models";
import {ProfileInputs} from "../types";

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const IonInputStyled = styled(IonInput)`
  && > label .label-text-wrapper .label-text {
    min-width: 120px;
  }
`

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
        <IonItem>
          <IonInputStyled labelPlacement='fixed' label='First Name' {...register("firstName", {required: true})} />
        </IonItem>
        <IonItem>
          <IonInputStyled labelPlacement='fixed' label='Last Name' {...register("lastName", {required: true})}/>
        </IonItem>
        <IonItem>
          <IonInputStyled labelPlacement='fixed' label='Phone' {...register("phone", {required: true})} type='tel'/>
        </IonItem>
        <IonItem lines='none'>
          <IonInputStyled labelPlacement='fixed' label='School' {...register("school")} helperText='(optional)'/>
        </IonItem>
        <IonItem lines='none'>
          <IonInputStyled labelPlacement='fixed' label='Address' {...register("address")} helperText='Street address'/>
        </IonItem>
        <IonItem lines='none'>
          <IonInputStyled labelPlacement='fixed' label='Address Line 2' helperText='Apartment, suite, etc. (optional)' {...register("address2")} />
        </IonItem>
        <IonItem>
          <IonInputStyled labelPlacement='fixed' label='City' {...register("city", {required: true})}/>
        </IonItem>
        <IonItem>
          <Controller
            render={({ field }) => (
            <IonSelect
              placeholder="Select One"
          value={field.value}
          onIonChange={e => setValue('state', e.detail.value)}
          labelPlacement='fixed'
          label='State'
            >
            {states.map((state) => (
                <IonSelectOption key={state} value={state}>{state}</IonSelectOption>
        ))}
          </IonSelect>
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
        </IonItem>
        <IonItem lines='none'>
          <IonInputStyled labelPlacement='fixed' label='Zip Code' helperText='5 digit zip code' {...register("zipcode")} />
        </IonItem>

        <div className='my-6 flex justify-center'>
          <IonButton type='submit' className='my-4'>Update Profile</IonButton>
        </div>
        { message }
      </form>
    </div>
  )
}

export default ProfileForm