import {IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption} from "@ionic/react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import React, {useState} from "react";
import styled from "styled-components";
import {UserProfile} from "../../models";
import {ProfileInputs} from "../../types";

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

  console.log(profile)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={'w-full'}>
        <IonItem lines='inset'>
          <IonLabel position='fixed' slot='start'>First Name</IonLabel>
          <IonInputStyled {...register("firstName", {required: true})} />
        </IonItem>
        <IonItem lines='inset'>
          <IonLabel position='fixed' slot='start'>Last Name</IonLabel>
          <IonInput {...register("lastName", {required: true})}/>
        </IonItem>
        <IonItem lines='inset'>
          <IonLabel position='fixed' slot='start'>Phone</IonLabel>
          <IonInput {...register("phone", {required: true})} type='tel'/>
        </IonItem>
        <IonItem lines='inset'>
          <IonLabel position='fixed' slot='start'>School</IonLabel>
          <IonInput {...register("school")} helperText='(optional)'/>
        </IonItem>
        <IonItem lines='inset'>
          <IonLabel position='fixed' slot='start'>Address</IonLabel>
          <IonInput legacy={true} {...register("address")} helperText='Street address'/>
          <div slot='helper'>Street address</div>
        </IonItem>
        <IonItem lines='inset'>
          <IonLabel className='ion-text-wrap' position='fixed' slot='start'>Address Line 2</IonLabel>
          <IonInput legacy={true}  {...register("address2")} />
          <div slot='helper'>Apartment, suite, unit etc</div>
        </IonItem>
        <IonItem lines='inset'>
          <IonLabel position='fixed' slot='start'>City</IonLabel>
          <IonInput {...register("city", {required: true})}/>
        </IonItem>
        <IonItem lines='inset'>
          <IonLabel position='fixed' slot='start'>State</IonLabel>
          <Controller
            render={({ field }) => (
            <IonSelect
              placeholder="Select One"
          value={field.value}
          onIonChange={e => setValue('state', e.detail.value)}
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
        <IonItem lines='inset'>

          <IonLabel position='fixed' slot='start'>Zip Code</IonLabel>
          <IonInput {...register("zipcode")} />
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