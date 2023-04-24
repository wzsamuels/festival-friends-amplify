import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonLabel,
  IonPage, IonSegment, IonSegmentButton,
  IonToolbar, SegmentChangeEventDetail
} from '@ionic/react';
import React, { useEffect, useRef, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import { Friendship, UserProfile} from "../models";


import { search } from "ionicons/icons";
import AccountButton from "../components/Profile/AccountButton";
import FriendCard from "../components/FriendCard";
import FriendSearchModal from "../components/Friends/FriendSearchModal";


const FriendsPage: React.FC = () => {
  const {user} = useAuthenticator();
  const [allFriends, setFriends] = useState<Friendship[]>([]);
  const [acceptedProfiles, setAcceptedProfiles] = useState<UserProfile[]>([]);
  const [sentFriends, setSentFriends] = useState<UserProfile[]>([]);
  const [pendingFriends, setPendingFriends] = useState<UserProfile[]>([]);
  const [friendType, setFriendType] = useState("accepted");
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
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
            <IonButton onClick={() => setIsFriendsModalOpen(true)}>
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
        <FriendSearchModal isOpen={isFriendsModalOpen} setIsOpen={setIsFriendsModalOpen}/>
      </IonContent>
    </IonPage>
  );
};

export default FriendsPage;