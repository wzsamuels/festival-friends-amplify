import {UserProfile} from "../../../models";
import Label from "../../common/Label/Label";
import Button from "../../common/Button/Button";
import React, {useContext, useEffect, useState} from "react";
import ImageContext from "../../../context/ImageContext";
import {getVerifyPhoto} from "../../../services/profileServices";

interface AccountInfoProps {
  profile: UserProfile
  onVerify: (profile: UserProfile) => void
}

const AccountInfo = ({profile, onVerify} : AccountInfoProps) => {
  const [profileImage, setProfileImage] = useState("")
  const { getSignedURL } = useContext(ImageContext)

  useEffect(() => {
    getVerifyPhoto(profile, getSignedURL).then(res => setProfileImage(res))
  }, [profile])

  return (
    <div className="shadow-xl round-xl p-4">
      <div className="flex flex-wrap my-4">
        <Label>Email</Label>
        <div className="text-wrap">{profile.email}</div>
      </div>
      <div className="flex flex-wrap my-4">
        <Label>Phone Number</Label>
        <div className="text-wrap">{profile.phone}</div>
      </div>
      <div className="flex flex-wrap my-4">
        <Label>City</Label>
        <div className="text-wrap">{profile.city}</div>
      </div>
      <div className="flex flex-wrap my-4">
        <Label>State</Label>
        <div className="text-wrap">{profile.state}</div>
      </div>
      <div className="flex flex-wrap my-4">
        <Label>Zip Code</Label>
        <div className="text-wrap">{profile.zipcode}</div>
      </div>
      <div className="flex flex-wrap my-4">
        <Label>Address</Label>
        <div className="text-wrap">{profile.address}</div>
      </div>
      <div className="flex flex-wrap my-4">
        <div slot="start" className="text-wrap">
          School
        </div>
        <div className="text-wrap">{profile.school}</div>
      </div>
      <div className="flex justify-center my-4">
      <img
        className="aspect-square max-w-[350px] w-full"
        src={profileImage}
        alt="Profile Image"
      />
      </div>
      <div className="flex justify-center my-4">
        <Button onClick={() => onVerify(profile)}>
          Verify Profile
        </Button>
      </div>
    </div>
  )
}

export default AccountInfo