import { SubmitHandler} from "react-hook-form";
import React, {useEffect, useState} from "react";
import { UserProfile} from "../../models";
import {DataStore} from "@aws-amplify/datastore";
import ProfileForm from "../../components/ProfileForm";
import {ProfileInputs} from "../../types";
import {IonButton} from "@ionic/react";


interface ProfileUnverifiedProps {
  username: string,
  email: string,
  profile: UserProfile | undefined,
}

const ProfileUnverified = ({username, email, profile} : ProfileUnverifiedProps) => {
  const createNewProfile: SubmitHandler<ProfileInputs> = async data => {
    try {
      console.log("Creating profile from data:", data)
      const newProfile = await DataStore.save(
        new UserProfile({
          "verified": false,
          "verifySubmitted": true,
          "userID": username,
          "email": email,
          ...data
        })
      );
      console.log(newProfile);
    } catch(err) {
      console.error("Error saving profile:", err)
    }
  }



  return (
    <div className='flex flex-col justify-center items-center w-full my-4 p-4'>
        <div>
          <h1 className='text-xl md:text-2xl'>Create Profile</h1>
          <p className='my-6'>This personal information will be used to verify your identity for the safety of our community. Once your profile is verified, all your information will be set to private until you specify otherwise.</p>
          <ProfileForm profile={profile} onSubmit={createNewProfile}/>

        </div>
    </div>
  )
}

export default ProfileUnverified