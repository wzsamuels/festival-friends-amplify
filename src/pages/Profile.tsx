import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar
} from "@ionic/react"
import { RouteComponentProps } from "react-router"
import React, {useEffect, useState} from "react";
import {Photo, UserProfile} from "../models";
import {DataStore, Storage} from "aws-amplify";
import AccountButton from "../components/AccountButton";
import PhotoImage from "../components/PhotoImage";

type ProfilePageProps = RouteComponentProps<{
    id: string;
  }>

const ProfilePage: React.FC<ProfilePageProps> = ({match}) => {
  const [profile, setProfile] = useState<UserProfile>();
  const [profileImage, setProfileImage] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const id = match.params.id;

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await DataStore.query(UserProfile, c => c.userID.eq(id))
      setProfile(profileData[0]);
      const imageData = await Storage.get(profileData[0].profileImage as string);
      setProfileImage(imageData)
      const photoData = await DataStore.query(Photo, c => c.userProfileID.eq(profileData[0].id))
      console.log(photoData)
      setPhotos(photoData)
    }
    fetchProfile();
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton/>
          </IonButtons>
          <IonButtons slot="end">
            <AccountButton id='profile'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={'p-4 flex flex-col items-center justify-center'}>
          <img width={350} height={350} src={profileImage} alt={profile?.id} className='rounded-full'/>
          <div className={'p-4 w-full max-w-lg'}>
            <h1 className={'text-xl my-4'}>{profile?.firstName} {profile?.lastName}</h1>
            <div className={'text-lg my-2 flex flex-wrap'}>
              <span className='basis-[120px]'>City:</span>
              <span>{profile?.city}</span>
            </div>
            <div className={'text-lg my-2 flex flex-wrap'}>
              <span className='basis-[120px]'>School:</span>
              <span>{profile?.school}</span>
            </div>
            <div className={'text-lg my-2 flex flex-wrap'}>
              <span className='basis-[120px]'>State:</span><span>{profile?.state}</span></div>
          </div>
          <section className='flex flex-wrap  gap-4' >
            {
              photos?.map(photo =>
                <div className='max-w-[200px] max-h-[200px]' key={photo.id}>
                  <PhotoImage photo={photo} key={photo.id}/>
                </div>
              )
            }
          </section>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProfilePage