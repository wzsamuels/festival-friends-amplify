import React, { useEffect, useState } from "react";
import Modal from "../../../common/Modal/Modal";
import { v4 as uuidv4 } from "uuid";
import {Auth, Storage} from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Photo, UserProfile } from "../../../../models";
import getErrorMessage from "../../../../lib/getErrorMessage";
import PhotoImage from "../../../ui/PhotoImage";
import { ProfileModalProps } from "../../../../@types/profile";
import Button from "../../../common/Button/Button";
import useProfileStore from "../../../../stores/profileStore";
import {updateBannerPhoto, updateProfilePhoto} from "../../../../services/ProfileServices";
import {createNewPhoto} from "../../../../services/PhotoServices";

export interface ProfileImageModalProps extends ProfileModalProps {
  photos: Photo[];
}

const BannerPhotoModal = ({
  profile,
  sub,
  isOpen,
  setIsOpen,
  photos,
}: ProfileImageModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [preview, setPreview] = useState("");
  const setProfile = useProfileStore(state => state.setProfile)

  const handleProfileBannerUpdate = async () => {
    if (!selectedFile || !profile) return;
    try {
      const newPhoto = await createNewPhoto(sub, selectedFile, profile)
      if(!newPhoto) throw new Error("Error creating new photo");

      updateBannerPhoto(profile, newPhoto?.id)
        .then(profile => setProfile(profile))
        .catch(err => alert(err.message))
    } catch (error) {
      alert(`Error uploading file: ${getErrorMessage(error)}`);
    } finally {
      dismissModal();
    }
  };

  const handleProfileImageSelect = async (photo: Photo) => {
    if(!profile) return;
    try {
      updateBannerPhoto(profile, photo?.id)
        .then(profile => setProfile(profile))
        .catch(err => alert(err.message))
    } catch (error) {
      alert(`Error uploading file: ${getErrorMessage(error)}`);
    } finally {
      dismissModal();
    }
  };

  const dismissModal = () => {
    setIsOpen(false);
    setSelectedFile(null);
    setPreview("");
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Banner Image">
      {preview ? (
        <div className="flex flex-col items-center justify-center w-full p-4">
          <img className="w-full " src={preview} alt="Preview" />
          <div className="mt-6 flex justify-center w-full">
            <Button className="mr-4" onClick={() => setSelectedFile(null)}>
              Cancel
            </Button>
            <Button onClick={() => handleProfileBannerUpdate()}>
              Update Banner Image
            </Button>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col justify-center p-4">
          <label
            htmlFor="upload-profile-image-photo"
            className="my-4 cursor-pointer flex justify-center p-4 border bg-green-950 text-white border-primary-default"
          >
            Upload New Photo
          </label>
          <input
            type="file"
            id="upload-profile-image-photo"
            accept="image/png, image/jpeg"
            onChange={(e) =>
              e?.target?.files && setSelectedFile(e.target.files[0])
            }
            className="my-4 hidden"
          />
          <h1 className="text-2xl my-4">Select a Photo</h1>
          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo) => (
              <PhotoImage
                className="cursor-pointer"
                onClick={() => handleProfileImageSelect(photo)}
                photo={photo}
                key={photo.id}
                level="protected"
              />
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default BannerPhotoModal;
