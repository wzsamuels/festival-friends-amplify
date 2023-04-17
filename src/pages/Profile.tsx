import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react"
import { RouteComponentProps } from "react-router"
import React, {useEffect, useState} from "react";
import {UserProfile} from "../models";
import {DataStore, Storage} from "aws-amplify";

type ProfilePageProps = RouteComponentProps<{
    id: string;
  }>

const ProfilePage: React.FC<ProfilePageProps> = ({match}) => {
  const [profile, setProfile] = useState<UserProfile>();
  const [profileImage, setProfileImage] = useState("");
  const id = match.params.id;

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await DataStore.query(UserProfile, c => c.userID.eq(id))
      setProfile(profileData[0]);
      const imageData = await Storage.get(profileData[0].profileImage as string);
      setProfileImage(imageData)
    }
    fetchProfile();
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>{profile?.firstName} {profile?.lastName}&apos;s Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={'p-4 flex flex-col items-center justify-center'}>
          <img width={350} height={350} src={profileImage} alt={profile?.id} className='rounded-full'/>
          <IonList className={'p-4'}>
            <IonListHeader>
              <IonLabel className={'text-xl my-4'}>{profile?.firstName} {profile?.lastName}</IonLabel>
            </IonListHeader>
            <IonItem className={'text-lg my-2 flex flex-col'}>City: {profile?.city}</IonItem>
            <IonItem className={'text-lg my-2'}>School: {profile?.school}</IonItem>
            <IonItem className={'text-lg my-2'}>State: {profile?.state}</IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProfilePage