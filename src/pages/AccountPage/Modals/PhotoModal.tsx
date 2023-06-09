import { Photo } from "../../../models";
import Modal from "../../../components/common/Modal/Modal";
import PhotoImage from "../../../components/ui/PhotoImage";
import Button from "../../../components/common/Button/Button";
import React from "react";
import { ModalProps } from "../../../@types/modal";
import { deletePhoto as deletePhotoFunction } from "../../../services/photoServices";

interface PhotoModalProps extends ModalProps {
  photo: Photo | null;
  deletePhoto: boolean;
}

const PhotoModal = ({isOpen, setIsOpen, photo, deletePhoto}: PhotoModalProps) => {
  const handleDeletePhoto = async () => {
    if (photo) {
      await deletePhotoFunction(photo)
    }
    setIsOpen(false);
  };

  // TODO - Add confirmation before deleting
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Photo" >
      {photo &&
        <PhotoImage level="protected" className="w-full h-full" photo={photo} />
      }
      <div className="flex justify-center my-4">
        {deletePhoto && <Button onClick={handleDeletePhoto}>Delete</Button>}
      </div>
    </Modal>
  );
};

export default PhotoModal;
