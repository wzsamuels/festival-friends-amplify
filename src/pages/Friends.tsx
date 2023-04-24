import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonInput, IonLabel,
  IonModal,
  IonPage, IonSegment, IonSegmentButton,
  IonTitle, IonToast,
  IonToolbar, SegmentChangeEventDetail
} from '@ionic/react';
import React, {RefObject, useEffect, useRef, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import { Friendship, UserProfile} from "../models";
import {checkmark, close, search } from "ionicons/icons";
import AccountButton from "../components/AccountButton";
import {SubmitHandler, useForm} from "react-hook-form";
import FriendCard from "../components/FriendCard";

type SearchInput = {
  firstName: string,
  lastName: string,
  city: string,
  state: string,
  school: string
}

type FriendType = "accepted" | "sent" | "pending";

const FriendsPage: React.FC = () => {
  const {user} = useAuthenticator();
  const [allFriends, setFriends] = useState<Friendship[]>([]);
  const [acceptedProfiles, setAcceptedProfiles] = useState<UserProfile[]>([]);
  const [sentFriends, setSentFriends] = useState<UserProfile[]>([]);
  const [pendingFriends, setPendingFriends] = useState<UserProfile[]>([]);
  const [friendType, setFriendType] = useState<string>("accepted");
  const modal = useRef<HTMLIonModalElement>(null);
  const username = user?.username as string;

  useEffect(() => {

    const fetchFriends = async () => {
      if (user) {
        const profile = await DataStore.query(UserProfile, (userProfile) =>
          userProfile.userID.eq(username)
        );
        const profileID = profile[0].id;
        const allFriends = await DataStore.query(Friendship, c => c.or(c => [
          c.userProfileID.eq(profileID),
          c.friendProfileID.eq(profileID)
        ]));

        setFriends(allFriends);
        console.log(allFriends)

        const acceptedFriendsPromises = allFriends
          .filter((friend) => friend.isAccepted)
          .map((friend) => (friend.userProfileID === profileID ? friend.friendProfile : friend.userProfile));
        const acceptedFriends = await Promise.all(acceptedFriendsPromises);

        const incomingFriendPromises = allFriends
          .filter((friend) => !friend.isAccepted && friend.friendProfileID === profileID)
          .map((friend) => friend.userProfile);
        const incomingFriendRequests = await Promise.all(incomingFriendPromises);

        const outgoingFriendPromises = allFriends
          .filter((friend) => !friend.isAccepted && friend.userProfileID === profileID)
          .map((friend) => friend.friendProfile);
        const outgoingFriendRequests = await Promise.all(outgoingFriendPromises);

        console.log(acceptedFriends);
        console.log(incomingFriendRequests);
        console.log(outgoingFriendRequests)

        setPendingFriends(incomingFriendRequests);
        setAcceptedProfiles(acceptedFriends)
        setSentFriends(outgoingFriendRequests);
      }
    }
    fetchFriends();

    const subscription = DataStore.observe(Friendship).subscribe(() => fetchFriends());
    return () => {
      subscription.unsubscribe();
    };
  }, [user])

  const handleFriendAccept = async ({friendShipID} : {friendShipID: string}) => {
    console.log(allFriends, friendShipID)
    const friendShip = allFriends.filter((friendship) => friendship.userProfileID === friendShipID);
    console.log(friendShip)
    await DataStore.save(Friendship.copyOf(friendShip[0], updated => {
      updated.isAccepted = true;
    }))
  }

  const handleFriendshipReject = async ({friendShipID} : {friendShipID: string}) => {
    const friendShip = allFriends.filter((friendship) => friendship.userProfileID === friendShipID || friendship.friendProfileID === friendShipID);
    console.log(friendShip)
    await DataStore.delete(friendShip[0]);
  }

  const handleSegmentChange = (e: CustomEvent<SegmentChangeEventDetail>) => {
    console.log(e.detail.value)
    if(e.detail.value) {
      setFriendType(e.detail.value)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment value={friendType} scrollable onIonChange={handleSegmentChange}>
            <IonSegmentButton value='accepted'>
              <IonLabel>Friends</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='pending'>
                <div className='flex justify-center items-center'>
                  <div>Requests</div>
                  {pendingFriends.length > 0 ? <div className='bg-primary-default text-light-default rounded-full mx-2 w-[20px] p-2 h-[20px] flex justify-center items-center'>{pendingFriends.length}</div> : null}
                </div>
            </IonSegmentButton>
            <IonSegmentButton value='sent'>
              <IonLabel>Suggestions</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonButtons slot='end'>
            <IonButton id="friend-search">
              <IonIcon icon={search}/>
            </IonButton>
            <AccountButton id='friends'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className={'flex flex-wrap p-4'}>
        {
          user ?
            <>
              {
                friendType === 'pending' && pendingFriends.length ?
                  <>
                    {
                      pendingFriends.map(friend =>
                          <FriendCard
                            key={friend.id}
                            profile={friend}
                            link={true}
                            onConfirm={() => handleFriendAccept({friendShipID: friend.id})}
                            onCancel={() => handleFriendshipReject({friendShipID: friend.id})}
                          />
                      )}
                  </>
                  :
                  null
              }
              {
                friendType === 'accepted' && acceptedProfiles.length ?
                  acceptedProfiles.map((profile) =>
                    <>
                      <FriendCard key={profile.id} profile={profile} link={true}/>
                    </>)
                  :
                  null
              }
              {
                !(acceptedProfiles.length || sentFriends.length || pendingFriends.length) ?
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
          <FriendSearch modal={modal}/>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

const FriendSearch = ({modal} : {modal: RefObject<HTMLIonModalElement> | null}) => {
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
      alert('You already have a friend request pending')
      return;
    }

    const result = await DataStore.save(new Friendship({userProfileID: userProfile.id, friendProfileID: friendProfile.id, isAccepted: false, friendProfile: friendProfile, userProfile: profile[0]}) )
    console.log(result)
    setToastIsOpen(true);
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Friend Search</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => modal?.current?.dismiss()}>
              Cancel
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(searchFriends)}>
          <IonInput label='First Name' labelPlacement='stacked' {...register('firstName')} type="text"  />
          <IonInput label='Last Name' labelPlacement='stacked' {...register('lastName')} type="text" />
          <IonInput label='City' labelPlacement='stacked' {...register('city')} type="text" />
          <IonInput label='School' labelPlacement='stacked' {...register('school')} type="text"  />
          <IonButton type='submit'>Search</IonButton>
        </form>
        {
          results.map(result =>
            <React.Fragment key={result.id}>
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
                      createFriendRequest(result);
                    },
                  },
                ]}
              ></IonAlert>
            </React.Fragment>
          )
        }
        <IonToast
          isOpen={toastIsOpen}
          message="Friend request sent!"
          onDidDismiss={() => setToastIsOpen(false)}
          duration={5000}
        ></IonToast>
      </IonContent>
    </>
  )
}

export default FriendsPage;
