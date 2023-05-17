import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Friendship, UserProfile } from "../../../../models";
import { DataStore } from "aws-amplify";
import FriendCard from "../../../ui/FriendCard";
import Modal from "../../../common/Modal/Modal";
import Label from "../../../common/Label/Label";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import CustomAlert from "../../../common/Alert/Alert";
import { useUserProfileStore } from "../../../../stores/friendProfilesStore";
import Toast from "../../../common/Toast/Toast";
import { ToastData } from "../../../../types";
import { criteria, getFilteredData } from "../../../../lib/searchHelpers";
import { createFriendRequest } from "../../../../services/FriendsService";
import InputWrapper from "../../../common/InputWrapper/InputWrapper";
import states from "../../../../data/states";

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
  const [results, setResults] = useState<UserProfile[]>([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentResult, setCurrentResult] = useState<UserProfile | null>(null);
  const { userProfile } = useUserProfileStore();
  const [toastData, setToastData] = useState<ToastData | null>(null);

  const searchFriends: SubmitHandler<SearchInput> = async (data) => {
    // Remove empty fields from search
    const filteredData = getFilteredData(data);
    console.log(filteredData)
    const allProfiles = await DataStore.query(UserProfile, (c) =>
      c.or(() => criteria(c, filteredData))
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
          (friend.userProfileID === userProfile?.id &&
            friend.friendProfileID === profile.id) ||
          (friend.friendProfileID === userProfile?.id &&
            friend.userProfileID === profile.id)
      );

      return !friendShip;
    });
    console.log(filteredResults)
    setResults(filteredResults);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => {
          reset();
          setResults([]);
        }}
        title="Friend Search"
      >
        <form
          onSubmit={handleSubmit(searchFriends)}
          className="[&>*]:m-4 max-w-4xl"
        >
          <div className="flex flex-col md:flex-row justify-between">
            <InputWrapper className="my-4 flex-1">
              <Label>First Name</Label>
              <Input
                {...register("firstName")}
                type="text"
              />
            </InputWrapper>
            <InputWrapper className="my-4 flex-1">
            <Label>Last Name</Label>
            <Input
              {...register("lastName")}
              type="text"
            />
            </InputWrapper>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <InputWrapper className="my-4 flex-1">
              <Label>City</Label>
              <Input
                {...register("city")}
                type="text"
              />
            </InputWrapper>
            <InputWrapper className="my-4 flex-1">
              <Label>State</Label>
              <select
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
              </select>
            </InputWrapper>
          </div>
          <div className="flex flex-wrap">
            <Label>School</Label>
            <Input
              className="w-[calc(100%-150px)]"
              {...register("school")}
              type="text"
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
        <div className="flex flex-wrap">
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
                currentResult as UserProfile,
                setToastData
              );
            },
          },
        ]}
      />
      {toastData && (
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
