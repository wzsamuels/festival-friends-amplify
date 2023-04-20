import React, {useEffect, useState} from "react";
import {FestivalCreateForm } from "../ui-components";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem, IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import AccountButton from "../components/AccountButton";
import {UserProfile} from "../models";
import {DataStore} from "aws-amplify";

const Admin = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin - Testing Only</IonTitle>
          <IonButtons slot='end'>
            <AccountButton id='admin'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='flex flex-col items-center justify-center w-full p-4'>
          <section className='w-full max-w-xl flex flex-col'>
            <h1 className='text-xl md:text-2xl'>Verify Profiles</h1>
            <VerifyAccounts/>
          </section>
          <section className='w-full max-w-xl my-8'>
            <h1 className='text-xl md:text-2xl'>Create Festival</h1>
            <FestivalCreateForm/>
          </section>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Admin

const VerifyAccounts = () => {
  const [unverifiedProfiles, setUnverifiedProfiles] = useState<UserProfile[]>([])
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await DataStore.query(UserProfile, c => c.verified.eq(false))
      console.log(response)
      setUnverifiedProfiles(response)
    }
    fetchProfiles()
  }, [])

  const verifyProfile = async (profile: UserProfile) => {
    const latestProfile = await DataStore.query(UserProfile, c => c.id.eq(profile.id))
    await DataStore.save(UserProfile.copyOf(latestProfile[0], updated => {updated.verified = true}))
    setUnverifiedProfiles(unverifiedProfiles.filter(p => p.id !== profile.id))
    setMessage('Profile verified');
  }

  return (
    <div>
      {
        unverifiedProfiles.map(profile =>
          <IonList key={profile.id}>
            <IonItem lines='inset'>
              <IonLabel slot='start' class='ion-text-wrap'>Email</IonLabel>
              <IonLabel class='ion-text-wrap'>{profile.email}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot='start' class='ion-text-wrap'>Phone Number</IonLabel>
              <IonLabel class='ion-text-wrap'>{profile.phone}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot='start' class='ion-text-wrap'>City</IonLabel>
              <IonLabel class='ion-text-wrap'>{profile.city}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot='start' class='ion-text-wrap'>State</IonLabel>
              <IonLabel class='ion-text-wrap'>{profile.state}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot='start' class='ion-text-wrap'>Zip Code</IonLabel>
              <IonLabel class='ion-text-wrap'>{profile.zipcode}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot='start' class='ion-text-wrap'>Address</IonLabel>
              <IonLabel class='ion-text-wrap'>{profile.address}</IonLabel></IonItem>
            <IonItem>
              <IonLabel  slot='start' class='ion-text-wrap'>School</IonLabel><IonLabel class='ion-text-wrap'>
              {profile.school}
              </IonLabel></IonItem>
            <div className='w-full flex justify-end my-4'>
              <IonButton onClick={() => verifyProfile(profile)}>Verify Profile</IonButton>
            </div>
          </IonList>
        )
      }
      <h2 className='text-lg text-center my-4'>{unverifiedProfiles.length} profiles to verify</h2>
      <h3 className='text-center my-4'>{message}</h3>
    </div>
  )
}