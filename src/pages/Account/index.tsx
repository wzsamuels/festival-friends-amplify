import { DataStore } from '@aws-amplify/datastore';
import { UserProfile } from '../../models';
import { useEffect, useState} from 'react';
import {Authenticator, useAuthenticator, withAuthenticator} from '@aws-amplify/ui-react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from "react";
import ProfileUnverified from "./ProfileUnverified";
import AccountButton from "../../components/AccountButton";
import ProfileVerified from "./ProfileVerified";

const AccountPage = () => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { user } = useAuthenticator((context) => [context.user]);
  const [profile, setProfile] = useState<UserProfile>()
  const [loading, setLoading] = useState(true)
  const username = user?.username as string;

  console.log(profile)
  const refresh = () => {
    DataStore.clear();
    location.reload()
  }

  const renderPage = () => {
    if(authStatus === 'authenticated') {
      if(loading) {
        return null
      }
      if (profile?.verified) {
        console.log("Profile verified")
        return <ProfileVerified profile={profile} username={user.username ? user.username : ""}/>
      } else if(!profile?.verified && profile?.verifySubmitted) {
        console.log("Profile unverified and submitted")
        return (
          <div className='w-full max-w-lg p-4'>
            <div>Your profile has been submitted for verification. You&apos;ll receive an email at the address you used to sign up for this account once the process has been completed.</div>
            <div className='my-4'>
              If you&apos;ve received confirmation that your profile has been verified but are still seeing this message, press the button below to refresh the status of your profile.
            </div>
            <IonButton onClick={refresh}>Refresh Profile</IonButton>
          </div>
        )
      } else {
        return <ProfileUnverified username={username} email={user.attributes?.email as string} profile={profile}/>;
      }
    } else {
      return <Authenticator/>
    }
  }

  useEffect(() => {
    const profileSub = DataStore.observeQuery(UserProfile, c => c.userID.eq(user?.username || ""))
      .subscribe(( {items, isSynced}) => {
        console.log(`Is synced: ${isSynced}`)
        setProfile(items[0])
      })

    return () => {
      profileSub.unsubscribe();
    };
  }, [user])

  useEffect(() => {
    if(profile) {
      setLoading(false);
    }
  }, [profile])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account {user?.attributes?.email}</IonTitle>
          <IonButtons slot='end'>
            <AccountButton id='account'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    
      <IonContent fullscreen>
      {
        renderPage()
      }
      
      </IonContent>
    </IonPage>
  )
}

export default AccountPage;