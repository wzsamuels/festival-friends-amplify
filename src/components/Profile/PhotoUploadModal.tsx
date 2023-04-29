import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Storage} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import {Photo} from "../../models";
import {ProfileModalProps} from "../../@types/profile";
import {Dialog} from "@headlessui/react";

export interface PhotoUploadModalProps extends ProfileModalProps {
  photoFile: File | null
  setPhotoFile: (file: File | null) => void
}

const PhotoUploadModal = ({profile, username, isOpen, setIsOpen, photoFile, setPhotoFile}: PhotoUploadModalProps) => {
  const [preview, setPreview] = useState('')
  const handlePhotoUpload = async () => {
    console.log(photoFile)
    if(photoFile) {
      const id = uuidv4()
      try {
        await Storage.put(`${username}/${id}`, photoFile, {contentType: photoFile.type});
        // Profile should always exist, but let's make Typescript happy
        if(profile) {
          await DataStore.save(new Photo({userProfile: profile, s3Key: `${username}/${id}`, isPrivate: false, userProfileID: profile.id}))
        }
      } catch (error) {
        console.log("Error uploading file: ", error);
      } finally {
        dismissModal()
      }
    }
    else {
      alert("No file selected!")
    }
  }

  const dismissModal = () => {
    setPhotoFile(null)
    setIsOpen(false)
  }

  useEffect(() => {
    if (!photoFile) {
      setPreview('')
      return
    }
    const objectUrl = URL.createObjectURL(photoFile)
    setPreview(objectUrl)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [photoFile])

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>
            Upload Photo
            <button onClick={dismissModal}>Close</button>
        </Dialog.Title>
        {preview && <img className='w-full' src={preview} alt="Preview"/> }
        <button onClick={() => setIsOpen(false)}>Close</button>
        <button onClick={handlePhotoUpload}>Upload</button>
      </Dialog.Panel>
    </Dialog>
  )
}

export default PhotoUploadModal