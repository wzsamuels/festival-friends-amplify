import { DataStore } from '@aws-amplify/datastore';
import { UserProfile } from '../models';
import {FormEvent, useEffect, useState} from 'react';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import {IonAlert, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import { Storage } from 'aws-amplify';
import React from "react";
import FestivalForm from "../components/FestivalForm";
//import '@aws-amplify/ui-react/styles.css';
import ProfileUnverified from "../components/ProfileUnverified";


const AccountPage = () => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [profile, setProfile] = useState<UserProfile[] | null>(null)

  const renderPage = () => {
    if(authStatus === 'authenticated') {
      console.log(user)
      if (profile && user.attributes?.email_verified) {
        if (profile.length && profile[0].verified) {
          console.log("Profile verified")
          return <Profile username={user.username ? user.username : ""}/>
        } else {
          console.log("Profile unverified")
          return <ProfileUnverified username={user.username ? user.username : ""}/>;
        }
      }
    } else {
      return (
        <div className='my-8'>
          <Authenticator/>
        </div>
      )
    }
  }

  useEffect(() => {
    async function fetchProfile(userName: string) {
      const profile = await DataStore.query(UserProfile, c => c.userID.eq(userName))
      console.log("Profiles: ", profile)
      setProfile(profile)
    }

    if(user?.username) {
      fetchProfile(user.username)
    }
  }, [user])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className='w-full flex justify-between'>
              <span>Account</span>
              <span> {user ? user?.username : ""}</span>
              <button onClick={() => signOut()}>Sign Out</button>
              </div></IonTitle>
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



const Profile = ({username} : {username: string}) => {
  const [profileImage, setProfileImage] = useState("")
  const [profile, setProfile] = useState<UserProfile>()
  const [selectedFile, setSelectedFile] = useState<File>()

  const handleFileSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(selectedFile) {
      console.log(selectedFile)
      try {
        await Storage.put(`${username}/${selectedFile.name}`, selectedFile, {contentType: selectedFile.type});
        // Delete old image if it exists
        if(profile?.profileImage) {
          await Storage.remove(profile?.profileImage)
        }
        // Profile should always exist, but let's make Typescript happy
        if(profile) {
          await DataStore.save(UserProfile.copyOf(profile, updated => {
            updated.profileImage = `${username}/${selectedFile.name}`
          }))
        }
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }
    else {
      alert("No file selected!")
    }
  }

  useEffect(() => {

    const profileSub = DataStore.observeQuery(UserProfile, c => c.userID.eq(username))
      .subscribe(( {items}) => {
        console.log(items[0])
        setProfile(items[0])
      })

    return () => {
      profileSub.unsubscribe();
    };
  }, [])

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (profile) {
        const image = await Storage.get(`${profile.profileImage}`, {
          level: "public"
        });

        setProfileImage(image);
      }
    }
    fetchProfileImage()
  }, [profile])
  
  return (
    <div className='flex flex-col items-center p-4 mt-8'>
      <section className={'my-8 flex justify-center flex-col'}>
        <img id='change-alert' className='max-w-[350px] rounded-full cursor-pointer' src={profileImage} alt="Profile Image"/>
        <IonAlert
          header='Change Profile Picture'
          trigger='change-alert'
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Upload Photo',
              role: 'confirm'
            }
          ]}
        >

        </IonAlert>
        <form onSubmit={handleFileSubmit}>
          <input type='file' accept="image/png, image/jpeg" onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])} />
          <IonButton type="submit">Update Profile Image</IonButton>
        </form>
      </section>
      <FestivalForm/>
    </div>
  )
}

export default AccountPage