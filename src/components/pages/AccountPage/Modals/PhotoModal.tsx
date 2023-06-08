import { Photo } from "../../../../models";
import Modal from "../../../common/Modal/Modal";
import PhotoImage from "../../../ui/PhotoImage";
import Button from "../../../common/Button/Button";
import React from "react";
import { ModalProps } from "../../../../@types/modal";
import { deletePhoto as deletePhotoFunction } from "../../../../services/photoServices";

interface PhotoModalProps extends ModalProps {
  photo: Photo | null;
  deletePhoto: boolean;
}

const PhotoModal = ({
  isOpen,
  setIsOpen,
  photo,
  deletePhoto,
}: PhotoModalProps) => {
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
      <div className="l">
        <PhotoImage photo={photo} />
      </div>
      }
      <div className="flex justify-center my-4">
        {deletePhoto && <Button onClick={handleDeletePhoto}>Delete</Button>}
      </div>
    </Modal>
  );
};

export default PhotoModal;
