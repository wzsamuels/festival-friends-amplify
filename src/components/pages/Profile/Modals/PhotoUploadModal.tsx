import React, { useEffect, useState } from "react";
import {createNewPhoto} from '../../../../services/PhotoServices'
import { ProfileModalProps } from "../../../../@types/profile";
import Modal from "../../../common/Modal/Modal";
import Button from "../../../common/Button/Button";

export interface PhotoUploadModalProps extends ProfileModalProps {
  photoFile: File | null;
  setPhotoFile: (file: File | null) => void;
}

// TODO: Give UI feedback on upload progress

const PhotoUploadModal = ({
  profile,
  sub,
  isOpen,
  setIsOpen,
  photoFile,
  setPhotoFile,
}: PhotoUploadModalProps) => {
  const [preview, setPreview] = useState("");
  const handlePhotoUpload = async () => {
    console.log(photoFile);

    if (photoFile && profile) {
      try {
        const newPhoto = createNewPhoto(sub, photoFile, profile);
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
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Upload Photo">
      {preview && <img className="w-full" src={preview} alt="Preview" />}
      <div className="flex justify-center gap-2 mt-4">
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={handlePhotoUpload}>Upload</Button>
      </div>
    </Modal>
  );
};

export default PhotoUploadModal;
