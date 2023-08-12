import React from "react";
import { Photo } from "../../../models";
import { ProfileModalProps } from "../../../@types/profile";
import PhotoImage from "../../../components/ui/PhotoImage";
import getErrorMessage from "../../../lib/getErrorMessage";
import Modal from "../../../components/common/Modal/Modal";
import Button from "../../../components/common/Button/Button";
import {createNewPhoto} from "../../../services/photoServices";
import useProfileStore from "../../../stores/profileStore";
import {updateProfilePhoto} from "../../../services/profileServices";
import ImageUpload from "../../../components/common/ImageUpload";
import useFilePreview from "../../../hooks/useFilePreview";

export interface ProfileImageModalProps extends ProfileModalProps {
  photos: Photo[];
}

const ProfileImageModal = ({profile, isOpen, setIsOpen, photos }: ProfileImageModalProps) => {
  const { selectedFile, setSelectedFile, preview} = useFilePreview();
  const setProfile = useProfileStore(state => state.setProfile)

  // Upload new profile image to S3 bucket, create new Photo, and update user profile image
  const handleProfileImageUpdate = async () => {
    if (selectedFile) {
      try {
        const newPhoto = await createNewPhoto(selectedFile, profile.id);
        if(!newPhoto) throw new Error("Error creating new photo");
        const updatedProfile = await updateProfilePhoto(profile, newPhoto.id);
        setProfile(updatedProfile);
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

  const dismissModal = () => {
    setIsOpen(false);
    setSelectedFile(null);
  };

  const renderModalContent = () => {
    if(preview) {
      return (
        <div className="flex flex-col items-center justify-center w-full p-4">
          <div className='max-w-xl'>
            <img className=" rounded-full aspect-square" src={preview} alt="Preview" />
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
        <ImageUpload setSelectedFile={setSelectedFile}/>
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
