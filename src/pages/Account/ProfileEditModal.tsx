import React from "react";
import {SubmitHandler} from "react-hook-form";
import {ProfileInputs} from "../../types";
import {DataStore} from "@aws-amplify/datastore";
import {UserProfile} from "../../models";
import getErrorMessage from "../../lib/getErrorMessage";
import {IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar} from "@ionic/react";
import ProfileForm from "../../components/ProfileForm";
import {ProfileModalProps} from "../../@types/profile";

const ProfileEditModal = ({profile, profileImage, isOpen, setIsOpen, callback} : ProfileModalProps) => {

  const handleProfileUpdate: SubmitHandler<ProfileInputs> = async (data) => {
    try {
      await DataStore.save(UserProfile.copyOf(profile, updated => {
        updated.firstName = data.firstName
        updated.lastName = data.lastName
        updated.phone = data.phone
        updated.city = data.city
        updated.state = data.state
        updated.zipcode = data.zipcode
        updated.address = data.address
        updated.address2 = data.address2
        updated.school = data.school
      }))
    } catch (error) {
      alert(`Error updating profile: ${getErrorMessage(error)}`)
    } finally {
      setIsOpen(false)
    }
  }

  return (
    <>
      <IonModal isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='end'>
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
            <IonTitle>Edit Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className=''>
          <div className='p-4'>
            <div className='flex justify-between'>
              <h1 className='text-xl'>Profile Image</h1>
              <IonButton onClick={callback}>Edit</IonButton>
            </div>
            <div className='flex justify-center'>
              <img className='max-w-[350px] rounded-full' src={profileImage} alt="Profile Image"/>
            </div>
            <ProfileForm onSubmit={handleProfileUpdate} profile={profile}/>
          </div>

        </IonContent>
      </IonModal>
    </>
  )
}

export default ProfileEditModal