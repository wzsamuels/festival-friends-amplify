import { UserProfile} from "../../models";
import React, {ReactElement, ReactNode, useContext, useEffect, useState} from "react";
import ImageContext from "../../context/ImageContext";
import {Link} from "react-router-dom";

interface FriendCardProps {
  profile: UserProfile,
  link: boolean,
  onClick?: () => void
  onCancel?: () => void
  onConfirm?: () => void
  className?: string
}

const FriendCard = ({profile, link, onClick, onConfirm, onCancel, className} : FriendCardProps) => {

  if(!profile) {
    return null;
  }

  const [profileImage, setProfileImage] = useState("")
  const profileUrl = `/friends/profile/${profile.userID}`
  const { getSignedURL } = useContext(ImageContext);

  useEffect(() => {
    const fetchSignedURL = async () => {
      const url = await getSignedURL(profile.profileImage as string);
      setProfileImage(url);
    };

    fetchSignedURL();
  }, [profile.profileImage, getSignedURL]);


  return (
    <div className={`${className} bg-white border-2 border-gray-300  m-2m-4 p-2 rounded-xl hover:border-gray-500 shadow-xl flex flex-col items-center`}>
      <ConditionalWrapper condition={link} wrapper={children => <Link to={profileUrl}>{children}</Link>}>
        <div className='flex flex-col items-center'>
          <img onClick={onClick} className={'rounded-full'} width={200} height={200} src={profileImage} alt={`${profile.firstName} ${profile.lastName}'s Profile Image`}/>
          <div className='my-4'>{profile.firstName} {profile.lastName}</div>
        </div>
      </ConditionalWrapper>
      <div className='w-full'>
        { onConfirm && <button onClick={onConfirm} className='w-full bg-primary-default text-light-default py-2 mb-1'>Confirm</button> }
        { onCancel && <button onClick={onCancel} className='w-full bg-primary-default text-light-default py-2' >Cancel</button> }
      </div>
    </div>
  )
}

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: ReactNode) => ReactElement | null;
  children: ReactNode;
}

const ConditionalWrapper = ({ condition, wrapper, children }:  ConditionalWrapperProps) =>
  condition ? wrapper(children) : (children as ReactElement);
export default FriendCard