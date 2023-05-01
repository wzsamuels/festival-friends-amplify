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
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className='p-4'>
                  <div className='flex justify-between'>
                    <h1 className='text-xl'>Profile Image</h1>
                    <Button onClick={callback}>Edit</Button>
                  </div>
                  <div className='flex justify-center'>
                    <img className='max-w-[350px] rounded-full' src={profileImage} alt="Profile Image"/>
                  </div>
                  <ProfileForm onSubmit={handleProfileUpdate} profile={profile}/>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ProfileEditModal