import React, {Fragment, RefObject, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Friendship, UserProfile} from "../../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import FriendCard from "./FriendCard";
import styled from "styled-components";
import {Dialog} from "@headlessui/react";

interface SearchInput {
  firstName?: string;
  lastName?: string;
  city?: string;
  school?: string;
}

type FriendSearchModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const FriendSearchModal = ({isOpen, setIsOpen}: FriendSearchModalProps) => {
  const { register, handleSubmit } = useForm<SearchInput>()
  const [results, setResults] = useState<UserProfile[]>([])
  const { user } = useAuthenticator();
  const [toastIsOpen, setToastIsOpen] = useState(false);

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
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Friend Search
            <button onClick={() => setIsOpen(false)}>
              Cancel
            </button>
        </Dialog.Title>
        <form onSubmit={handleSubmit(searchFriends)}>
          <input  {...register('firstName')} type="text"  />
          <input  {...register('lastName')} type="text" />
          <input  {...register('city')} type="text" />
          <input {...register('school')} type="text"  />
          <button type='submit'>Search</button>
        </form>
        <div className='flex flex-wrap' >
        {
          results.map(result =>
            <Fragment key={result.id}>
              <button id={`open-${result.id}`}>
                <FriendCard profile={result} key={result.id} link={false}/>
              </button>
              {/*
              <IonAlert
                trigger={`open-${result.id}`}
                header="Send Friend Request"
                buttons={[
                  {
                    text: 'Cancel',
                    role: 'cancel',
                  },
                  {
                    text: 'OK',
                    role: 'confirm',
                    handler: () => {
                      createFriendRequest(result);
                    },
                  },
                ]}
              ></IonAlert>
              */}
            </Fragment>
          )
        }
        </div>
        {/*
        <IonToast
          isOpen={toastIsOpen}
          message="Friend request sent!"
          onDidDismiss={() => setToastIsOpen(false)}
          duration={5000}
        ></IonToast>
        */}
      </Dialog.Panel>
    </Dialog>
  )
}

export default FriendSearchModal
