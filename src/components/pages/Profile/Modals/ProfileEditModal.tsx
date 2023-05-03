import React, {Fragment} from "react";
import {SubmitHandler} from "react-hook-form";
import {ProfileInputs} from "../../../../types";
import {DataStore} from "@aws-amplify/datastore";
import {UserProfile} from "../../../../models";
import getErrorMessage from "../../../../lib/getErrorMessage";
import ProfileForm from "../ProfileForm";
import {ProfileModalProps} from "../../../../@types/profile";
import {Dialog, Transition} from "@headlessui/react";
import Button from "../../../common/Button";
import {BsPerson} from "react-icons/all";
import Modal from "../../../common/Modal";

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
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Edit Profile'>
      <div className='p-4'>
        <div className='flex justify-between my-2'>
          <h1 className='text-xl'>Profile Image</h1>
          <Button onClick={callback}>Edit</Button>
        </div>
        <div className='flex justify-center'>
          {
            profileImage ?
              <img className='max-w-[350px] rounded-full aspect-square' src={profileImage} alt="Profile Image"/>
              :
              <div className='flex justify-center items-center  w-full h-full max-w-[350px] max-h-[350px] border border-medium-default'>
                <BsPerson className='w-3/4 h-3/4 text-medium-default text-center'/>
              </div>
          }

        </div>
        <div className='flex justify-center'>
          <ProfileForm onSubmit={handleProfileUpdate} profile={profile}/>
        </div>

      </div>
    </Modal>
  )
}

export default ProfileEditModal