import React, { Fragment } from "react";
import { SubmitHandler } from "react-hook-form";
import { ProfileInputs } from "../../../../types";
import { DataStore } from "@aws-amplify/datastore";
import { UserProfile } from "../../../../models";
import getErrorMessage from "../../../../lib/getErrorMessage";
import ProfileEditForm from "../ProfileEditForm";
import { ProfileModalProps } from "../../../../@types/profile";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../../common/Button/Button";
import { BsPerson } from "react-icons/all";
import Modal from "../../../common/Modal/Modal";
import useProfileStore from "../../../../stores/profileStore";

const ProfileEditModal = ({
  profile,
  profileImage,
  isOpen,
  setIsOpen,
  callback,
}: ProfileModalProps) => {
  const setProfile = useProfileStore((state) => state.setProfile);
  const handleProfileUpdate: SubmitHandler<ProfileInputs> = async (data) => {
    try {
      const originalProfile = await DataStore.query(UserProfile, profile.id);
      if(!originalProfile) {
        console.error('No profile found');
        return;
      }

      const updatedProfile = await DataStore.save(
        UserProfile.copyOf(originalProfile, (updated) => {
          updated.firstName = data.firstName;
          updated.lastName = data.lastName;
          updated.phone = data.phone;
          updated.city = data.city;
          updated.state = data.state;
          updated.zipcode = data.zipcode;
          updated.address = data.address;
          updated.address2 = data.address2;
          updated.school = data.school;
        })
      );
      setProfile(updatedProfile);
      console.log(updatedProfile);
    } catch (error) {
      alert(`Error updating profile: ${getErrorMessage(error)}`);
      throw error;
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Edit Profile">
      <div className="p-4">
        <div className="flex justify-between my-2">
          <h1 className="text-xl">Profile Image</h1>
          <Button onClick={callback}>Edit</Button>
        </div>
        <div className="flex justify-center">
          {profileImage ? (
            <img
              className="max-w-[350px] rounded-full aspect-square"
              src={profileImage}
              alt="Profile Image"
            />
          ) : (
            <div className="flex justify-center items-center  w-full h-full max-w-[350px] max-h-[350px] border border-medium-default">
              <BsPerson className="w-3/4 h-3/4 text-medium-default text-center" />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <ProfileEditForm onSubmit={handleProfileUpdate} profile={profile} />
        </div>
      </div>
    </Modal>
  );
};

export default ProfileEditModal;
