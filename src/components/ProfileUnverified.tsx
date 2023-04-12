import {SubmitHandler, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {UserProfile} from "../models";
import {DataStore} from "@aws-amplify/datastore";
import {IonButton, IonItem} from "@ionic/react";
import {useAuthenticator} from "@aws-amplify/ui-react";
type ProfileInputs = {
  firstName: string,
  lastName: string,
};
const ProfileUnverified = ({username} : {username: string}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileInputs>();
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const { user } = useAuthenticator((context) => [context.user])

  async function fetchProfile() {
    console.log(user)
    const profile = await DataStore.query(UserProfile, c => c.userID.eq(username))
    console.log("Profile: ", profile)
    if(profile.length) {
      setProfile(profile[0])
    }
  }

  console.log(username)

  const refreshProfile = () => {
    DataStore.clear()
      .then(() => DataStore.start()
        .then(() => fetchProfile()
          .then(() => setMessage('Refreshing...'))))
  }

  useEffect(() => {
    DataStore.start().then(() => fetchProfile().then(() => setLoading(false)))
  }, [])

  const createNewProfile: SubmitHandler<ProfileInputs> = async data => {
    try {
      console.log("Creating profile from data:", data)
      const newProfile = await DataStore.save(
        new UserProfile({
          "firstName": data.firstName,
          "lastName": data.lastName,
          "verified": false,
          "verifySubmitted": true,
          "userID": username
        })
      );
      fetchProfile()
      console.log(newProfile);
    } catch(err) {
      console.error("Error saving profile:", err)
    }
  }

  if(loading) {
    return (
      <div>
        Loading user profile...
      </div>
    )
  }

  return (
    <div className='flex flex-col justify-center items-center w-full my-4 p-4'>
      { profile && profile.verifySubmitted ?
        <div className='w-full max-w-lg'>
          <div>Your profile has been submitted for verification. You&apos;ll receive an email at the address you used to sign up for this account once the process has been completed.</div>
          <div className='my-4'>
            If you&apos;ve received confirmation that your profile has been verified but are still seeing this message, press the button below to refresh the status of your profile.
          </div>
          <div>
            <IonButton onClick={refreshProfile}>Refresh</IonButton>
            <IonItem routerLink='/account'>Test</IonItem>
          </div>
          { message }
        </div>
        :
          <form className='w-full max-w-lg' onSubmit={handleSubmit(createNewProfile)}>
            <h1 className='my-4 text-2xl lg:text-3xl'>Profile Unverified</h1>
            <h2>Please fill out the following information </h2>
            <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
              <label className='basis-[200px] shrink-0'>First Name</label>
              <input
                className='px-4 py-2 border border-black flex-1' {...register("firstName", { required: true })}
              />
            </div>
            <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
              <label className='basis-[200px] shrink-0'>Last Name</label>
              <input
                className='px-4 py-2 border border-black flex-1' {...register("lastName", { required: true })}
              />
            </div>
            <div className='flex justify-center w-full my-6'>
              <input type='submit' className='px-4 py-2 border border-black rounded-xl  hover:bg-gray-500 hover:text-white'/>
            </div>
          </form>
      }

    </div>
  )
}

export default ProfileUnverified