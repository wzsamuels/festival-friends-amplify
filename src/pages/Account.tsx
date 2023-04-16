import { DataStore } from '@aws-amplify/datastore';
import { UserProfile } from '../models';
import {FormEvent, useEffect, useState} from 'react';
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonInput, IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { Storage } from 'aws-amplify';
import React from "react";
import ProfileUnverified from "../components/ProfileUnverified";
import {SubmitHandler, useForm} from "react-hook-form";
import getErrorMessage from "../lib/getErrorMessage";
import { search} from "ionicons/icons";
import AccountButton from "../components/AccountButton";


const AccountPage = () => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { user } = useAuthenticator((context) => [context.user]);
  const [profile, setProfile] = useState<UserProfile>()

  const renderPage = () => {
    if(authStatus === 'authenticated') {
      if (profile?.verified) {
        console.log("Profile verified")
        return <Profile profile={profile} username={user.username ? user.username : ""}/>
      } else {
        console.log("Profile unverified")
        return <ProfileUnverified username={user.username ? user.username : ""}/>;
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
    const profileSub = DataStore.observeQuery(UserProfile, c => c.userID.eq(user?.username || ""))
      .subscribe(( {items}) => {
        setProfile(items[0])
      })

    return () => {
      profileSub.unsubscribe();
    };
  }, [user])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account {user?.attributes?.email}</IonTitle>
          <IonButtons slot='end'>
            <IonButton>
              <IonIcon size='large' icon={search}/>
            </IonButton>
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


type ProfileInputs = {
  firstName: string,
  lastName: string,
  school: string,
  city: string,
  state: string
}

const Profile = ({username, profile} : {username: string, profile: UserProfile}) => {
  const [profileImage, setProfileImage] = useState("")
  const [selectedFile, setSelectedFile] = useState<File>()
  const [message, setMessage] = useState("")
  const { register, handleSubmit} = useForm<ProfileInputs>({
    defaultValues: {
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      school: profile?.school || "",
      city: profile?.city || "",
      state: profile?.state || ""
    }
  })

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

  const handleProfileUpdate: SubmitHandler<ProfileInputs> = async (data) => {
    console.log(data)
    try {
     const results = await DataStore.save(UserProfile.copyOf(profile, updated => {
        updated.firstName = data.firstName
        updated.lastName = data.lastName
        updated.city = data.city
        updated.state = data.state
        updated.school = data.school
      }))
      console.log(results)
      setMessage("Profile successfully updated!")
    } catch (error) {
      setMessage(`Error updating profile: ${getErrorMessage(error)}`)
    }
  }

  return (
    <div className='flex flex-col items-center p-4 mt-8 w-full'>
      <h2 className='text-2xl md:text-3xl'>Update Profile</h2>
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
        <form className='flex flex-col justify-center w-full' onSubmit={handleFileSubmit}>
          <input
            type='file'
            accept="image/png, image/jpeg"
            onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])}
            className='my-4'
          />
          <IonButton type="submit">Update Profile Image</IonButton>
        </form>
      </section>
      <section >
        <form onSubmit={handleSubmit(handleProfileUpdate)} className={'my-8 flex justify-center flex-col'}>
          <IonInput labelPlacement='fixed' label='First Name' {...register("firstName")} />
          <IonInput labelPlacement='fixed' label='Last Name' {...register("lastName")} />
          <IonInput labelPlacement='fixed' label='School' {...register("school")} />
          <IonInput labelPlacement='fixed' label='City' {...register("city")} />
          <IonInput labelPlacement='fixed' label='State' {...register("state")} />
          <IonButton type='submit' className='my-4'>Update Profile</IonButton>
          { message }
        </form>
      </section>
    </div>
  )
}

export default AccountPage