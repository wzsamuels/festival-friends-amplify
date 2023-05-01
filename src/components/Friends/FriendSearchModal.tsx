import React, {Fragment, RefObject, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Friendship, UserProfile} from "../../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import FriendCard from "./FriendCard";
import {Dialog, Popover} from "@headlessui/react";
import Modal from "../common/Modal";
import Label from "../common/Label";
import Input from "../common/Input";
import Button from "../common/Button";
import PopoverTransition from "../PopoverTransition";
import CustomAlert from "../common/Alert";

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
}

const FriendSearchModal = ({isOpen, setIsOpen}: FriendSearchModalProps) => {
  const { register, handleSubmit, reset } = useForm<SearchInput>()
  const [results, setResults] = useState<UserProfile[]>([])
  const { user } = useAuthenticator();
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentResult, setCurrentResult] = useState<UserProfile | null>(null);

  const searchFriends: SubmitHandler<SearchInput> = async data => {
    console.log(data)
    // Remove empty
    const filteredData: { field: string; value: string; }[] = []
    for (const [key, value] of Object.entries(data)) {
      if(value) {
        filteredData.push({field: key, value: value})
      }
    }

    const criteria = (c: any) => {
      const query: any[] = [];
      filteredData.forEach((item) => {
        query.push(c[item.field].eq(item.value));
      });
      return query;
    };

    const results = await DataStore.query(UserProfile, (c) => c.or(() => criteria(c)))
    setResults(results)
  }

  const createFriendRequest = async (friendProfile: UserProfile) => {
    const profile = await DataStore.query(UserProfile, c => c.userID.eq(user?.username as string));
    const userProfile = profile[0];

    if(userProfile.id === friendProfile.id) {
      alert('You cannot send a friend request to yourself')
      return;
    }

    const existingFriendships1 = await DataStore.query(Friendship, c => c.and( c => [
      c.userProfileID.eq(userProfile.id),
      c.friendProfileID.eq(friendProfile.id)
    ]));

    const existingFriendships2 = await DataStore.query(Friendship, c => c.and( c => [
      c.userProfileID.eq(friendProfile.id),
      c.friendProfileID.eq(userProfile.id)
    ]));

    const existingFriendships = [...existingFriendships1, ...existingFriendships2];

    if(existingFriendships.length > 0) {
      if(existingFriendships[0].isAccepted) {
        alert('You are already friends')
        return;
      }
      alert('You already have a friend request pending')
      return;
    }

    const result = await DataStore.save(new Friendship({userProfileID: userProfile.id, friendProfileID: friendProfile.id, isAccepted: false, friendProfile: friendProfile, userProfile: profile[0]}) )
    console.log(result)
    setToastIsOpen(true);
  }

  return (
    <>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={() => {reset();setResults([]);}} title='Friend Search'>
      <form onSubmit={handleSubmit(searchFriends)} className='[&>*]:m-4'>
        <div className='flex flex-wrap '>
          <Label>First Name</Label>
          <Input {...register('firstName')} type="text"  />
        </div>
        <div className='flex flex-wrap'>
          <Label>Last Name</Label>
          <Input  {...register('lastName')} type="text" />
        </div>
        <div className='flex flex-wrap'>
          <Label>City</Label>
          <Input {...register('city')} type="text" />
        </div>
        <div className='flex flex-wrap'>
          <Label>State</Label>
          <Input {...register('state')} type="text" />
        </div>
        <div className='flex flex-wrap'>
          <Label>School</Label>
          <Input {...register('school')} type="text" />
        </div>
        <Button type='submit'>Search</Button>
      </form>
      <div className='flex flex-wrap' >
        {
          results.map(result =>
            <Fragment key={result.id}>

              <FriendCard onClick={() => { setCurrentResult(result);setIsConfirmModalOpen(true)}} className='m-4 cursor-pointer' profile={result}  link={false}/>
            </Fragment>

          )
        }
      </div>
    </Modal>
      <CustomAlert
        title="Alert Title"
        message="Send Friend Request?"
        isOpen={isConfirmModalOpen}
        setIsOpen={setIsConfirmModalOpen}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              alert(currentResult?.firstName + ' ' +currentResult?.lastName)
              createFriendRequest(currentResult as UserProfile);
            },
          },
        ]}
      />
    </>
  )
}

export default FriendSearchModal
