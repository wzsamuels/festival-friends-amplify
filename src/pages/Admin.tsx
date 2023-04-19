import ConversationCreateForm from "../ui-components/ConversationCreateForm";
import React, {useEffect, useState} from "react";
import {FestivalCreateForm} from "../ui-components";
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
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
        <div className='flex flex-col items-center justify-center w-full'>
          <section>
            <h1>Verify Accounts</h1>
          </section>
          <section className='w-full max-w-xl'>
            <h2>Create Conversation</h2>
            <ConversationCreateForm/>
          </section>
          <section className='w-full max-w-xl'>
            <h2>Create Festival</h2>
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

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await DataStore.query(UserProfile, c => c.verified.eq(false))
      setUnverifiedProfiles(response)
    }
    fetchProfiles()
  }, [])

  return (
    <div>
      {
        unverifiedProfiles.map(profile =>
          <div key={profile.id}>
            <p>{profile.username}</p>
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.city}</p>
            <p>{profile.state}</p>
            <p>{profile.zipcode}</p>
            <p>{profile.address}</p>
            <p>{profile.school}</p>
          </div>
        )
      }
    </div>
  )
}