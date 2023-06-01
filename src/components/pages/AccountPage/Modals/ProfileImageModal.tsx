import React, { useEffect, useState } from "react";
import { Photo } from "../../../../models";
import { ProfileModalProps } from "../../../../@types/profile";
import PhotoImage from "../../../ui/PhotoImage";
import getErrorMessage from "../../../../lib/getErrorMessage";
import Modal from "../../../common/Modal/Modal";
import Button from "../../../common/Button/Button";
import {createNewPhoto} from "../../../../services/photoServices";
import useProfileStore from "../../../../stores/profileStore";
import {updateProfilePhoto} from "../../../../services/profileServices";

export interface ProfileImageModalProps extends ProfileModalProps {
  photos: Photo[];
}

const ProfileImageModal = ({
  profile,
  sub,
  isOpen,
  setIsOpen,
  photos,
}: ProfileImageModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [updating, setUpdating] = useState(false);

  const setProfile = useProfileStore(state => state.setProfile)
  // Upload new profile image to S3 bucket, create new Photo, and update user profile image
  const handleProfileImageUpdate = async () => {
    if (selectedFile) {
      try {
        setUploading(true);
        const newPhoto = await createNewPhoto(sub, selectedFile, profile);
        setUploading(false);

        if(!newPhoto) throw new Error("Error creating new photo");

        setUpdating(true);
        const updatedProfile = await updateProfilePhoto(profile, newPhoto.id);
        setProfile(updatedProfile);
        setUpdating(false);
      } catch (error) {
        alert(`Error uploading file: ${getErrorMessage(error)}`);
      } finally {
        dismissModal();
      }
    } else {
      alert("No file selected!");
    }
  };

  const handleProfileImageSelect = async (photo: Photo) => {
    try {
      const updatedProfile = await updateProfilePhoto(profile, photo.id);
      setProfile(updatedProfile);
    } catch (error) {
      alert(`Error uploading file: ${getErrorMessage(error)}`);
    } finally {
      dismissModal();
    }
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }
    setUploading(true);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    setUploading(false);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const dismissModal = () => {
    setIsOpen(false);
    setSelectedFile(null);
    setUpdating(false);
    setUploading(false);
    setPreview("");
  };

  const renderModalContent = () => {
    if(updating) return <div className='p-4'>Updating profile photo...</div>
    if(uploading) return <div className='p-4'>Uploading photo...</div>
    if(preview) {
      return (
        <div className="flex flex-col items-center justify-center w-full p-4">
          <div className='max-w-xl'>
            <img className=" rounded-full" src={preview} alt="Preview" />
          </div>
          <div className="mt-6 flex justify-center w-full">
            <Button onClick={() => setSelectedFile(null)}>Cancel</Button>
            <Button className="ml-2" onClick={() => handleProfileImageUpdate()}>
              Update Profile Image
            </Button>
          </div>
        </div>
      )
    }
    return (
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
          {photos.length > 0 ? photos.map((photo) => (
              <PhotoImage
                className="cursor-pointer"
                onClick={() => handleProfileImageSelect(photo)}
                photo={photo}
                key={photo.id}
                level="protected"
              />))
            :
            <div className="text-lg my-2">No Photos Upload</div>
          }
        </div>
      </div>
    )
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Profile Image" className='max-w-2xl'>
      {renderModalContent()}
    </Modal>
  );
};

export default ProfileImageModal;
