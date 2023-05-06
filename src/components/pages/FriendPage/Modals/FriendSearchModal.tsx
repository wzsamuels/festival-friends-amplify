import React, {Fragment, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Friendship, UserProfile} from "../../../../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import FriendCard from "../../../ui/FriendCard";
import Modal from "../../../common/Modal/Modal";
import Label from "../../../common/Label/Label";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import CustomAlert from "../../../common/Alert/Alert";
import {useUserProfileStore} from "../../../../stores/friendProfilesStore";
import Toast from "../../../common/Toast/Toast";

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
  const [toastMessage, setToastMessage] = useState('');
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentResult, setCurrentResult] = useState<UserProfile | null>(null);
  const { userProfile } = useUserProfileStore()

  const showToast = (type: 'info' | 'success' | 'warning' | 'error') => {
    if(type === 'info') {
      setToastMessage(`Friend already sent!`);
    } else if(type === 'success') {
      setToastMessage(`Friend request sent!`);
    }
    setToastType(type);
  };

  const [toastType, setToastType] = useState<'success' | 'error' | 'info' | 'warning'>('info');

  const searchFriends: SubmitHandler<SearchInput> = async data => {

    // Remove empty fields from search
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

    const allProfiles = await DataStore.query(UserProfile, (c) => c.or(() => criteria(c)));
    // Filter out profiles with the same userProfile.id
    const otherProfiles = allProfiles.filter((profile) => profile.id !== userProfile?.id);

    const allFriends = await DataStore.query(Friendship);

    // Filter out profiles that are already friends or have a pending request
    const filteredResults = otherProfiles.filter((profile) => {
      const friendShip = allFriends.find((friend) => (
        (friend.userProfileID === userProfile?.id && friend.friendProfileID === profile.id) ||
        (friend.friendProfileID === userProfile?.id && friend.userProfileID === profile.id)
      ));

      return !friendShip;
    });

    setResults(filteredResults);
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
      showToast('info');
      return;
    }

    const result = await DataStore.save(new Friendship({userProfileID: userProfile.id, friendProfileID: friendProfile.id, isAccepted: false, friendProfile: friendProfile, userProfile: profile[0]}) )
    console.log(result)
    showToast('success');
  }

  return (
    <>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={() => {reset();setResults([]);}} title='Friend Search'>
      <form onSubmit={handleSubmit(searchFriends)} className='[&>*]:m-4 max-w-2xl'>
        <div className='flex flex-wrap '>
          <Label>First Name</Label>
          <Input className='w-[calc(100%-150px)]' {...register('firstName')} type="text"  />
        </div>
        <div className='flex flex-wrap'>
          <Label>Last Name</Label>
          <Input className='w-[calc(100%-150px)]' {...register('lastName')} type="text" />
        </div>
        <div className='flex flex-wrap'>
          <Label>City</Label>
          <Input className='w-[calc(100%-150px)]' {...register('city')} type="text" />
        </div>
        <div className='flex flex-wrap'>
          <Label>State</Label>
          <Input className='w-[calc(100%-150px)]' {...register('state')} type="text" />
        </div>
        <div className='flex flex-wrap'>
          <Label>School</Label>
          <Input className='w-[calc(100%-150px)]' {...register('school')} type="text" />
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
              createFriendRequest(currentResult as UserProfile);
            },
          },
        ]}
      />
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => {
            setToastMessage('');
          }}
        />
      )}
    </>
  )
}

export default FriendSearchModal
