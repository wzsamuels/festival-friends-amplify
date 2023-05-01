import { DataStore } from '@aws-amplify/datastore';
import {useContext} from 'react';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import React from "react";
import ProfileUnverified from "../Profile/ProfileUnverified";
import AccountButton from "../../ui/AccountButton";
import ProfileVerified from "../Profile/ProfileVerified";
import UserProfileContext from "../../../context/UserProfileContext";

const AccountPage = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const { route } = useAuthenticator(context => [context.route]);
  const { userProfile, loadingUserProfile} = useContext(UserProfileContext)

  const refresh = () => {
    DataStore.clear();
    location.reload()
  }

  const renderPage = () => {
    if(route === 'authenticated') {
      {/* Return nothing when profile is loading to prevent the page from rendering before the profile is loaded*/}
      if(loadingUserProfile) {
        return (
          <div className='w-full max-w-lg p-4 flex justify-center items-center text-primary-default'>
            {/* TODO: Add spinner */}
          </div>
        )
      }
      if (userProfile?.verified) {
        console.log("Profile verified")
        return <ProfileVerified userProfile={userProfile} user={user}/>
      } else if(!userProfile?.verified && userProfile?.verifySubmitted) {
        console.log("Profile unverified and submitted")
        return (
          <div className='w-full max-w-lg p-4'>
            <div>Your profile has been submitted for verification. You&apos;ll receive an email at the address you used to sign up for this account once the process has been completed.</div>
            <div className='my-4'>
              If you&apos;ve received confirmation that your profile has been verified but are still seeing this message, press the button below to refresh the status of your profile.
            </div>
            <button onClick={refresh}>Refresh Profile</button>
          </div>
        )
      } else {
        return <ProfileUnverified/>;
      }
    } else {
      return (
        <div className='w-screen h-screen translate-y-[-15%] flex justify-center items-center'>
          <Authenticator/>
        </div>
      )
    }
  }

  return (
      <div >
      {
        renderPage()
      }
      </div>
  )
}

export default AccountPage;