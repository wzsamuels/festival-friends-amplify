import {Profile} from "../../models";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import {BsPerson} from "react-icons/all";
import ConditionalWrapper from "../ConditionalWrapper";
import {getPhotoURL} from "../../services/photoServices";

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

const FriendCard = ({profile, link, onClick, className, buttons,}: FriendCardProps) => {
  const [profilePhotoURL, setProfilePhotoURL] = useState("");
  const profileUrl = `/friends/profile/${profile.id}`;

  useEffect(() => {
    getPhotoURL(profile.profilePhotoID)
      .then(photoURL => setProfilePhotoURL(photoURL))
      .catch(err => console.log(err))
  }, [profile]);

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
            profilePhotoURL ?
              <img
                className={"rounded-full aspect-square"}
                width={200}
                height={200}
                src={profilePhotoURL}
                alt={`${profile.firstName} ${profile.lastName}'s Profile Image`}
              />
              :
              <div
                className={"flex justify-center items-center rounded-full bg-gray-300 h-[200px] w-[200px]"}>
                { !profile.profilePhotoID && <BsPerson className="w-1/2 h-1/2 text-medium-default text-center" />}
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
