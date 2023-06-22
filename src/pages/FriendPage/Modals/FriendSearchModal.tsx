import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Friendship, Profile } from "../../../models";
import { DataStore } from "@aws-amplify/datastore";
import FriendCard from "../../../components/ui/FriendCard";
import Modal from "../../../components/common/Modal/Modal";
import Label from "../../../components/common/Label/Label";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import CustomAlert from "../../../components/common/Alert/Alert";
import Toast from "../../../components/common/Toast/Toast";
import { ToastData } from "../../../types";
import { criteria, getFilteredData } from "../../../lib/searchHelpers";
import { createFriendRequest } from "../../../services/friendsService";
import InputWrapper from "../../../components/common/InputWrapper/InputWrapper";
import states from "../../../data/states";
import useProfileStore from "../../../stores/profileStore";
import Select from "../../../components/common/Select";

interface SearchInput {
  firstName?: string;
  lastName?: string;
  city?: string;
  school?: string;
  state?: string;
}

type FriendSearchModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const FriendSearchModal = ({ isOpen, setIsOpen }: FriendSearchModalProps) => {
  const { register, handleSubmit, reset } = useForm<SearchInput>();
  const [results, setResults] = useState<Profile[]>([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentResult, setCurrentResult] = useState<Profile | null>(null);
  const userProfile = useProfileStore((state) => state.userProfile);
  const [toastData, setToastData] = useState<ToastData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const searchFriends: SubmitHandler<SearchInput> = async (data) => {
    setIsSearching(true);
    // Remove empty fields from search
    const filteredData = getFilteredData(data);
    console.log(filteredData)
    const allProfiles = await DataStore.query(Profile, (c) =>
      c.and(() => criteria(c, filteredData))
    );
    // Filter out profiles with the same userProfile.id
    const otherProfiles = allProfiles.filter(
      (profile) => profile.id !== userProfile?.id
    );
    const allFriends = await DataStore.query(Friendship);

    // Filter out profiles that are already friends or have a pending request
    const filteredResults = otherProfiles.filter((profile) => {
      const friendShip = allFriends.find(
        (friend) =>
          (friend.profileID === userProfile?.id &&
            friend.friendProfileID === profile.id) ||
          (friend.friendProfileID === userProfile?.id &&
            friend.profileID === profile.id)
      );

      return !friendShip;
    });
    console.log(filteredResults)
    setResults(filteredResults);
    setHasSearched(true);
    setIsSearching(false);
  };

  const renderResults = () => {
    if (isSearching) {
      return <p className="text-center">Searching for friends...</p>
    }
    if(results.length > 0) {
      return (
        <>
          {results.map((result) => (
            <FriendCard
              key={result.id}
              onClick={() => {
                setCurrentResult(result);
                setIsConfirmModalOpen(true);
              }}
              className="m-4 cursor-pointer"
              profile={result}
              link={false}
            />
          ))}
        </>
      )
    }
    if(hasSearched) {
      return (
        <p className="text-center">No results found</p>
      )
    }

  }

  console.log(isConfirmModalOpen)

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => {
          reset();
          setResults([]);
        }}
        title="Search for New Friends"
        className='max-w-6xl'
      >
        <form
          onSubmit={handleSubmit(searchFriends)}
          className="max-w-4xl p-4 mx-auto"
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <InputWrapper className="my-4 md:mx-4 flex-1">
              <Label>First Name</Label>
              <Input
                {...register("firstName")}
                type="text"
                className='max-w-xl'
              />
            </InputWrapper>
            <InputWrapper className="my-4 md:mx-4 flex-1">
              <Label>Last Name</Label>
              <Input
                {...register("lastName")}
                type="text"
                className='max-w-xl'
              />
            </InputWrapper>
            <InputWrapper className="my-4 md:mx-4 flex-1">
              <Label>City</Label>
              <Input
                {...register("city")}
                type="text"
              />
            </InputWrapper>
            <InputWrapper className="my-4 md:mx-4 flex-1">
              <Label>State</Label>
              <Select
                placeholder=""
                {...register("state")}
                name="state"
                defaultValue=""
              >
                <option value="" disabled>
                  Select state
                </option>
                {states.map((state) => (
                  <option key={state.code} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </Select>
            </InputWrapper>
            <InputWrapper className="my-4 md:mx-4 flex-1">
              <Label>School</Label>
              <Input
                {...register("school")}
                type="text"
                className='max-w-xl'
              />
            </InputWrapper>
          </div>
          <div className='flex justify-center my-8'>
            <Button type="submit">Search</Button>
          </div>
        </form>
        <div className="flex flex-wrap p-4 justify-center">
          {renderResults()}
        </div>
      </Modal>
      <CustomAlert
        title="Alert Title"
        message="Send Friend Request?"
        isOpen={isConfirmModalOpen}
        setIsOpen={setIsConfirmModalOpen}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "OK",
            role: "confirm",
            handler: () => {
              createFriendRequest(
                userProfile,
                currentResult as Profile,
                setToastData
              );
            },
          },
        ]}
      />
      { toastData && (
        <Toast
          toastData={toastData}
          onClose={() => {
            setToastData(null);
          }}
        />
      )}
    </>
  );
};

export default FriendSearchModal;
