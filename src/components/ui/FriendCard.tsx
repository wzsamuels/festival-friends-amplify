import {Photo, Profile} from "../../models";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import ImageContext from "../../context/ImageContext";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import {BsPerson} from "react-icons/all";
import {DataStore} from "aws-amplify";
import ConditionalWrapper from "../ConditionalWrapper";

export interface FriendCardButton {
  label: string;
  onClick: (friendProfile: Profile) => void;
  className?: string;
}

export interface FriendCardProps {
  profile: Profile;
  link: boolean;
  onClick?: () => void;
  buttons?: FriendCardButton[];
  className?: string;
}

const FriendCard = ({
  profile,
  link,
  onClick,
  className,
  buttons,
}: FriendCardProps) => {
  const [profileImage, setProfileImage] = useState("");
  const profileUrl = `/friends/profile/${profile.id}`;
  const { getSignedURL } = useContext(ImageContext);

  useEffect(() => {
    const fetchSignedURL = async () => {
      let url = ''
      if (profile.profilePhotoID) {
        const photo = await DataStore.query(Photo, profile.profilePhotoID)
        url = await getSignedURL(photo?.s3Key as string, "protected", photo?.identityId as string);
      }
      setProfileImage(url);
    };

    fetchSignedURL();
  }, [profile.profilePhotoID, getSignedURL]);

  if (!profile) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      className={`${className} bg-white border-2 border-gray-300 p-2 rounded-xl hover:border-gray-500 shadow-xl`}
    >
      <ConditionalWrapper
        condition={link}
        wrapper={(children) => <Link to={profileUrl}>{children}</Link>}
      >
        <div className="flex flex-col items-center">
          {
            profileImage ?
              <img
                className={"rounded-full aspect-square"}
                width={200}
                height={200}
                src={profileImage}
                alt={`${profile.firstName} ${profile.lastName}'s Profile Image`}
              />
              :
              <div
                className={"flex justify-center items-center rounded-full bg-gray-300 h-[200px] w-[200px]"}>
                <BsPerson className="w-1/2 h-1/2 text-medium-default text-center" />
              </div>
          }

          <div className="my-4">
            {profile.firstName} {profile.lastName}
          </div>
        </div>
      </ConditionalWrapper>
      <div className="w-full">
        {buttons &&
          buttons.map((button, index) => (
            <Button
              key={index}
              onClick={() => button.onClick(profile)}
              className={`${button.className} w-full ${
                index !== buttons.length - 1 ? "mb-1" : ""
              }`}
            >
              {button.label}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default FriendCard;
