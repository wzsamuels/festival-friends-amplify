import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonInput,
  IonModal,
  IonPage,
  IonTitle, IonToast,
  IonToolbar
} from '@ionic/react';
import React, {useEffect, useRef, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Friends, UserProfile} from "../models";
import {checkmark, close, search } from "ionicons/icons";
import AccountButton from "../components/AccountButton";
import {SubmitHandler, useForm} from "react-hook-form";
import { ZenObservable } from 'zen-observable-ts';
import FriendCard from "../components/FriendCard";

type SearchInput = {
  firstName: string,
  lastName: string,
  city: string,
  state: string,
  school: string
}

const FriendsPage: React.FC = () => {
  const {user} = useAuthenticator();
  const [friends, setFriends] = useState<Friends[]>([]);
  const [acceptedProfiles, setAcceptedProfiles] = useState<UserProfile[]>([]);
  const [sentFriends, setSentFriends] = useState<UserProfile[]>([]);
  const [pendingFriends, setPendingFriends] = useState<UserProfile[]>([]);
  const modal = useRef<HTMLIonModalElement>(null);
  const username = user?.username as string;

  useEffect(() => {

    let friendSub: ZenObservable.Subscription;
    if(user) {
      friendSub = DataStore.observeQuery(Friends, c => c.or(c => [
        c.userID.eq(username),
        c.friendID.eq(username)
      ])).subscribe(({ items }) => {
        setFriends(items)
      });
      return () => {
        if(user) {
          friendSub.unsubscribe();
        }
      }
    }
  }, [user])

  useEffect(() => {
    const fetchProfiles = async () => {
      const acceptedFriendIDs = friends.reduce((result: string[], friend) => {
        if(friend.status === 'accepted') {
          result.push(friend.friendID === username ? friend.userID : friend.friendID);
        }
        return result;
      }, [])
      // Filter friend requests sent to the user
      const pendingFriends = friends.filter(friend => friend.friendID === username && friend.status === 'pending' );
      // Filter friend requests sent from the user
      const sentFriends = friends.filter(friend => friend.userID === username && friend.status === 'pending')

      // Fetch UserProfiles for accepted friends
      const acceptedPromises = acceptedFriendIDs.map(async friendID => {
        const result = await DataStore.query(UserProfile, c => c.userID.eq(friendID))
        return result[0];
      })
      const pendingPromises = pendingFriends.map(async friend => {
        const result = await DataStore.query(UserProfile, c => c.userID.eq(friend.userID))
        return result[0];
      })
      const sentPromises = sentFriends.map(async friend => {
        const result = await DataStore.query(UserProfile, c => c.userID.eq(friend.friendID))
        return result[0];
      })

      const pendingProfiles = await Promise.all(pendingPromises);
      const friendProfiles = await Promise.all(acceptedPromises);
      const sentFriendProfiles = await Promise.all(sentPromises);

      setPendingFriends(pendingProfiles);
      setAcceptedProfiles(friendProfiles)
      setSentFriends(sentFriendProfiles);
    }
    fetchProfiles()
  }, [friends])

  const handleFriendAccept = async ({friendID, status} : {friendID: string, status: string}) => {
    const friends = await DataStore.query(Friends, c => c.and(c => [
      c.friendID.eq(username),
      c.userID.eq(friendID)
    ]))
    console.log(friends)
    await DataStore.save(Friends.copyOf(friends[0], updated => {
      updated.status = status
    }))
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Friends</IonTitle>
          <IonButtons slot='end'>
            <IonButton id="friend-search">
              <IonIcon size='large'  icon={search}/>
            </IonButton>
            <AccountButton id='friends'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className={'flex flex-col flex-wrap p-4'}>
        {
          user ?
            <>
              {
                acceptedProfiles.length ?
                  acceptedProfiles.map((profile) =>
                    <FriendCard key={profile.id} profile={profile} link={true}/> )
                  :
                  null
              }
              {
                pendingFriends.length ?
                  <>
                    <h2 className='text-xl'>Pending Friend Requests</h2>
                    {
                      pendingFriends.map(friend =>
                        <div className='flex items-center' key={friend.id}>
                          <FriendCard profile={friend} link={true}/>
                          <div>
                            <IonButton onClick={() => handleFriendAccept({friendID: friend.userID, status: 'accepted'})}>
                              <IonIcon size='large' icon={checkmark}/>
                            </IonButton>
                            <IonButton>
                              <IonIcon size='large' icon={close} onClick={() => handleFriendAccept({friendID: friend.userID, status: 'rejected'})}/>
                            </IonButton>
                          </div>
                        </div>
                      )
                    }
                    <hr/>
                  </>
                  :
                  null
              }
              {
                sentFriends.length ?
                  <>
                    <h2 className='text-xl'>Sent Friend Requests</h2>
                    {
                      sentFriends.map(friend =>
                        <FriendCard key={friend.id} profile={friend} link={true}/> )
                    }
                    <hr/>
                  </>
                  :
                  null
              }
              {
                !(friends.length || sentFriends.length || pendingFriends.length) ?
                  <h1 className='text-xl md:text-2xl'>No friends yet! How about searching for some people you might know?</h1>
                  :
                  null
              }
            </>
            :
            <div>
              <h1 className='text-xl md:text-2xl my-4'>
                Festival Friends Account Required.
              </h1>
              <IonButton routerLink='/account'>Sign In</IonButton>
            </div>

        }

        </div>
        <IonModal ref={modal} trigger="friend-search">
          <FriendSearch modal={modal.current}/>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

const FriendSearch = ({modal} : {modal: HTMLIonModalElement | null}) => {
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const criteria = (c) => {
      const query: any[] = []
      filteredData.forEach(item => {
        query.push(c[item.field].eq(item.value));
      })
      return query;
    }

    const results = await DataStore.query(UserProfile, c =>
      c.or(criteria))
    setResults(results)
  }

  const createFriendRequest = async (friendID: string) => {
    const result = await DataStore.save(new Friends({userID: user?.username as string, friendID: friendID, status: 'pending' }) )
    console.log(result)
    setToastIsOpen(true);
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center' >Friend Search</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => modal?.dismiss()}>
              Cancel
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(searchFriends)}>
          <IonInput label='First Name' labelPlacement='stacked' {...register('firstName')} type="text" placeholder="Your name" />
          <IonInput label='Last Name' labelPlacement='stacked' {...register('lastName')} type="text" placeholder="Your name" />
          <IonInput label='City' labelPlacement='stacked' {...register('city')} type="text" placeholder="Your name" />
          <IonInput label='School' labelPlacement='stacked' {...register('school')} type="text" placeholder="Your name" />
          <IonButton type='submit'>Search</IonButton>
        </form>
        {
          results.map(result =>
            <>
              <button id={`open-${result.id}`}>
                <FriendCard profile={result} key={result.id} link={false}/>
              </button>
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
                      createFriendRequest(result.userID);
                    },
                  },
                ]}
              ></IonAlert>
            </>
          )
        }
        <IonToast
          isOpen={toastIsOpen}
          message="This toast will close in 5 seconds"
          onDidDismiss={() => setToastIsOpen(false)}
          duration={5000}
        ></IonToast>
      </IonContent>
    </>
  )
}

export default FriendsPage;
