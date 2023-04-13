import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
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
        <div className={'p-4 flex flex-col sm:flex-row'}>
          <img width={200} height={200} src={profileImage} alt={profile?.id}/>
          <div className={'p-4'}>
            <div className={'text-xl my-4'}>{profile?.firstName} {profile?.lastName}</div>
            <div className={'text-lg my-2'}>City: {profile?.city}</div>
            <div className={'text-lg my-2'}>School: {profile?.school}</div>
            <div className={'text-lg my-2'}>State: {profile?.state}</div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProfilePage