import { UserProfile} from "../models";
import React,{ useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {IonButton, IonItem} from "@ionic/react";

interface FriendCardProps {
  profile: UserProfile,
  link: boolean,
  onClick?: () => void
  onCancel?: () => void
  onConfirm?: () => void
}

const FriendCard = ({profile, link, onClick, onConfirm, onCancel} : FriendCardProps) => {
  const [profileImage, setProfileImage] = useState("")
  const profileUrl = {routerLink: `/friends/profile/${profile.userID}`}

  useEffect(() => {
    const fetchProfileImage = async () => {
      const imageData = await Storage.get(profile.profileImage as string)
      setProfileImage(imageData)
    }
    fetchProfileImage();
  }, [])

  return (
    <div className={'m-4 p-2 rounded-xl hover:border-gray-500 shadow-xl w-full max-w-[300px]  flex flex-col items-center'}>
      <IonItem button={true} {...(link ? profileUrl : {})} lines='none'>
        <div className='flex flex-col items-center'>
          <img onClick={onClick} className={'rounded-full'} width={200} height={200} src={profileImage} alt={`${profile.firstName} ${profile.lastName}'s Profile Image`}/>
        <div className='my-4'>{profile.firstName} {profile.lastName}</div>
        </div>
      </IonItem>
      <div className='w-full'>
        { onConfirm && <IonButton onClick={onConfirm}  className='w-full'>Confirm</IonButton> }
        { onCancel && <IonButton onClick={onCancel} className='w-full' >Cancel</IonButton> }
      </div>
    </div>
  )
}

export default FriendCard