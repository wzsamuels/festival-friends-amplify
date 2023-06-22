import React, { useState } from "react";
import Modal from "../../../components/common/Modal/Modal";
import { Photo } from "../../../models";
import getErrorMessage from "../../../lib/getErrorMessage";
import PhotoImage from "../../../components/ui/PhotoImage";
import { ProfileModalProps } from "../../../@types/profile";
import Button from "../../../components/common/Button/Button";
import useProfileStore from "../../../stores/profileStore";
import {updateBannerPhoto} from "../../../services/profileServices";
import {createNewPhoto} from "../../../services/photoServices";
import ImageUpload from "../../../components/common/ImageUpload";
import useFilePreview from "../../../hooks/useFilePreview";
import {ToastData} from "../../../types";
import Toast from "../../../components/common/Toast/Toast";
import {useAuthenticator} from "@aws-amplify/ui-react";

export interface ProfileImageModalProps extends ProfileModalProps {
  photos: Photo[];
}

const BannerPhotoModal = ({
  profile,
  isOpen,
  setIsOpen,
  photos,
}: ProfileImageModalProps) => {
  const { selectedFile, setSelectedFile, preview } = useFilePreview();
  const setProfile = useProfileStore(state => state.setProfile)
  const [toastData, setToastData] = useState<ToastData>();
  const { user } = useAuthenticator((context) => [context.user]);
  const sub = user?.username as string;

  const handleProfileBannerUpdate = async () => {
    if (!selectedFile || !profile) return;
    try {
      const newPhoto = await createNewPhoto(sub, selectedFile, profile.id)
      if(!newPhoto) throw new Error("Error creating new photo");

      updateBannerPhoto(profile, newPhoto?.id)
        .then(profile => setProfile(profile))
    } catch (error) {
      console.log(`Error uploading file: ${getErrorMessage(error)}`);
      setToastData({
        message: getErrorMessage(error),
        type: "error",
      })
    } finally {
      dismissModal();
    }
  };

  const handleProfileImageSelect = async (photo: Photo) => {
    if(!profile) return;
    try {
      updateBannerPhoto(profile, photo?.id)
        .then(profile => setProfile(profile))
    } catch (error) {
      console.log(error);
      setToastData({
        message: getErrorMessage(error),
        type: "error",
      })
    } finally {
      dismissModal();
    }
  };

  const dismissModal = () => {
    setIsOpen(false);
    setSelectedFile(null);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={dismissModal} title="Banner Image">
      {preview ? (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <img className="w-full " src={preview} alt="Preview" />
          </div>
          <div className="m-4 flex justify-center gap-4">
            <Button onClick={() => setSelectedFile(null)}>
              Cancel
            </Button>
            <Button onClick={() => handleProfileBannerUpdate()}>
              Update Banner Image
            </Button>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col justify-center p-4">
          <ImageUpload setSelectedFile={setSelectedFile} />
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
      {toastData && <Toast toastData={toastData}/>}
    </Modal>
  );
};

export default BannerPhotoModal;
