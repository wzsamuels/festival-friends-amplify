import {Profile, SocialMedia} from "../../models";
import Label from "../../components/common/Label/Label";
import Button from "../../components/common/Button/Button";
import React, {useEffect, useState} from "react";
import {getPhotoURL} from "../../services/photoServices";
import useDataClearedStore from "../../stores/dataClearedStore";

interface AccountInfoProps {
  profile: Profile
  onVerify: (profile: Profile) => void
}

const AccountInfo = ({profile, onVerify} : AccountInfoProps) => {
  const [profileImage, setProfileImage] = useState("")
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([])
  const dataCleared = useDataClearedStore(state => state.dataCleared)

  useEffect(() => {
    if(!profile || !dataCleared) return;

    getPhotoURL(profile.verifyPhotoID).then(photoURL => setProfileImage(photoURL))
    profile.socialMedia.toArray()
      .then(socialMedia => setSocialMedia(socialMedia))
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
      <h2 className='text-xl'>Social Media</h2>
      <ul className="p-2">
        {socialMedia.map(sm =>
          <li key={sm.id} className="my-2">
            <p>{sm.socialMediaType}</p>
            <p>{sm.accountURL}</p>
          </li>
        )}
      </ul>
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