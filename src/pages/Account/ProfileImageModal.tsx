import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Storage} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import {Photo, UserProfile} from "../../models";
import {IonButton, IonButtons, IonContent, IonHeader, IonModal, IonToolbar} from "@ionic/react";
import {ProfileModalProps} from "../../@types/profile";
import PhotoImage from "../../components/PhotoImage";
import getErrorMessage from "../../lib/getErrorMessage";

export interface ProfileImageModalProps extends ProfileModalProps {
  photos: Photo[];
}

const ProfileImageModal = ({profile, username, isOpen, setIsOpen, photos} : ProfileImageModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState('')

  // Upload new profile image to S3 bucket, create new Photo, and update user profile image
  const handleProfileImageUpdate = async () => {
    if(selectedFile) {
      try {
        const id = uuidv4();
        await Storage.put(`${username}/${id}`, selectedFile, {contentType: selectedFile.type});
        await DataStore.save(new Photo({userProfile: profile, s3Key: `${username}/${id}`, isPrivate: false, userProfileID: profile.id}))
        await DataStore.save(UserProfile.copyOf(profile, updated => {updated.profileImage = `${username}/${id}`}))
      } catch (error) {
        alert(`Error uploading file: ${getErrorMessage(error)}`);
      } finally {
        setIsOpen(false)
      }
    }
    else {
      alert("No file selected!")
    }
  }

  const handleProfileImageSelect = async (photo: Photo) => {
    try {
      await DataStore.save(UserProfile.copyOf(profile, updated => {updated.profileImage = photo.s3Key}))
    } catch (error) {
      alert(`Error uploading file: ${getErrorMessage(error)}`);
    } finally {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const dismissModal = () => {
    setIsOpen(false)
    setSelectedFile(null)
    setPreview('')
  }

  return (
    <>
      <IonModal isOpen={isOpen} onDidDismiss={dismissModal}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='end'>
              <IonButton onClick={dismissModal}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          { preview ?
            <div className='flex flex-col items-center justify-center w-full p-4'>
              <img className='w-full rounded-full ' src={preview} alt="Preview"/>
              <div className='mt-6 flex justify-center w-full'>
                <IonButton onClick={() => setSelectedFile(null)}>Cancel</IonButton>
                <IonButton onClick={() => handleProfileImageUpdate()}>Update Profile Image</IonButton>
              </div>
            </div>
            :

            <div className=' flex flex-col justify-center p-4' >
              <label
                htmlFor='upload-profile-image-photo'
                className='my-4 cursor-pointer flex justify-center p-4 border bg-primary-default text-light-default border-primary-default'>
                Upload New Photo
              </label>
              <input
                type='file'
                id='upload-profile-image-photo'
                accept="image/png, image/jpeg"
                onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])}
                className='my-4 hidden'
              />
              <h1 className='text-2xl my-4'>Select a Photo</h1>
              <div className='grid grid-cols-2 gap-4'>
              {
                photos.map(photo =>
                  <PhotoImage className='cursor-pointer' onClick={() => handleProfileImageSelect(photo)} photo={photo} key={photo.id}/>
                )
              }
              </div>
            </div>
          }
        </IonContent>
      </IonModal>
    </>
  )
}

export default ProfileImageModal