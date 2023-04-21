import { UserProfile} from "../models";
import React,{ useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {IonItem} from "@ionic/react";

interface FriendCardProps {
  profile: UserProfile,
  link: boolean,
  onClick?: () => void
}

const FriendCard = ({profile, link, onClick} : FriendCardProps) => {
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
    <IonItem onClick={onClick} button={true} lines='none' {...(link ? profileUrl : {})} className={'max-w-[400px] min-w-[300px] m-4 p-2 rounded-xl hover:border-gray-500 shadow-xl'}>
      <div className={'mx-2'}>
        <img className={'rounded-full'} width={100} height={100} src={profileImage} alt={`${profile.firstName} ${profile.lastName}'s Profile Image`}/>
      </div>
      <div>{profile.firstName} {profile.lastName}</div>
    </IonItem>
  )
}

export default FriendCard