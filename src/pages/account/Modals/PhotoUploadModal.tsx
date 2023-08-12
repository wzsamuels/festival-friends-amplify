import React, { useEffect, useState } from "react";
import {createNewPhoto} from '../../../services/photoServices'
import { ProfileModalProps } from "../../../@types/profile";
import Modal from "../../../components/common/Modal/Modal";
import Button from "../../../components/common/Button/Button";

export interface PhotoUploadModalProps extends ProfileModalProps {
  photoFile: File | null;
  setPhotoFile: (file: File | null) => void;
}

// TODO: Give UI feedback on upload progress

const PhotoUploadModal = ({profile, isOpen, setIsOpen, photoFile, setPhotoFile}: PhotoUploadModalProps) => {
  const [preview, setPreview] = useState("");

  const handlePhotoUpload = async () => {
    if (photoFile && profile) {
      try {
        const newPhoto = createNewPhoto(photoFile, profile.id);
        console.log(newPhoto)
      } catch (error) {
        console.log("Error uploading file: ", error);
      } finally {
        dismissModal();
      }
    } else {
      alert("No file selected!");
    }
  };

  const dismissModal = () => {
    setPhotoFile(null);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!photoFile) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(photoFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [photoFile]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={dismissModal} title="Upload Photo" className="max-w-2xl">
      <div className="flex flex-col items-center justify-center w-full p-4">
        {preview &&
          <div className='max-w-xl'>
            <img src={preview} alt="Preview" />
          </div>
        }
        <div className="flex justify-center gap-2 my-4">
          <Button onClick={dismissModal}>Cancel</Button>
          <Button onClick={handlePhotoUpload}>Upload</Button>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoUploadModal;
