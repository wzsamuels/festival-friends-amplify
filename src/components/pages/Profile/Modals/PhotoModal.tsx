import {Photo, UserProfile} from "../../../../models";
import {DataStore} from "@aws-amplify/datastore";
import {Storage} from "aws-amplify";
import Modal from "../../../common/Modal";
import PhotoImage from "../../../ui/PhotoImage";
import Button from "../../../common/Button";
import React from "react";
import {ModalProps} from "../../../../@types/modal";

interface PhotoModalProps extends ModalProps {
  photo: Photo | null,
  deletePhoto: boolean
}

const PhotoModal = ({isOpen, setIsOpen, photo, deletePhoto} : PhotoModalProps) => {
  const handleDeletePhoto = async () => {
    if(photo) {
      await DataStore.delete(photo)
      await Storage.remove(`${photo.s3Key}`)
    }
    setIsOpen(false)
  }

  // TODO - Add confirmation before deleting
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Photo'>
      {photo &&<PhotoImage className='w-full' photo={photo}/>}
      <div className='flex justify-center my-4'>
        { deletePhoto &&
        <Button onClick={handleDeletePhoto}>
          Delete
        </Button>
        }
      </div>
    </Modal>
  )
}

export default PhotoModal