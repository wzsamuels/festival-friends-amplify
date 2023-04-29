
import React, {useContext, useEffect, useRef, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import { Friendship, UserProfile} from "../models";


import { search } from "ionicons/icons";
import AccountButton from "../components/Profile/AccountButton";
import FriendCard from "../components/Friends/FriendCard";
import FriendSearchModal from "../components/Friends/FriendSearchModal";
import UserProfileContext from "../context/UserProfileContext";
import {Link} from "react-router-dom";
import {Tab} from "@headlessui/react";
import Header from "../components/Header";
import useUserFriends from "../hooks/useUserFriends";


const FriendsPage: React.FC = () => {
  const { route } = useAuthenticator(context => [context.route]);
  const { userProfile } = useContext(UserProfileContext);
  const [allFriends, setFriends] = useState<Friendship[]>([]);
  const [acceptedProfiles, setAcceptedProfiles] = useState<UserProfile[]>([]);
  const [sentFriends, setSentFriends] = useState<UserProfile[]>([]);
  const [pendingFriends, setPendingFriends] = useState<UserProfile[]>([]);
  const [friendType, setFriendType] = useState("accepted");
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);

  useEffect(() => {

    const fetchFriends = async () => {
      if (route === 'authenticated' && userProfile) {
        const profileID = userProfile.id;
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
  }, [route, userProfile])

  const findSuggestions = async () => {
    const allUsers = await DataStore.query(UserProfile);

  }

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

  return (
    <div className='flex flex-wrap w-full pt-16'>
        <Header>
          <div className='w-full flex justify-between h-full'>
            <button
              className={`${friendType === "accepted" ? "" : "after:scale-x-0"} hover:bg-light-default flex-1 p-4 relative after:transition after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-primary-default after:origin-left`}
              onClick={() => setFriendType("accepted")}
            >
              Friends
            </button>
            <button
              className={`${friendType === "pending" ? "" : "after:scale-x-0"} hover:bg-light-default flex-1 p-4 relative after:transition after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-primary-default after:origin-left`}
              onClick={() => setFriendType("pending")}
            >
              <div className='flex justify-center items-center'>
                <div>Requests</div>
                {pendingFriends.length > 0 ? <div className='bg-primary-default text-light-default rounded-full mx-2 w-[20px] p-2 h-[20px] flex justify-center items-center'>{pendingFriends.length}</div> : null}
              </div>
            </button>
            <button
              className={`${friendType === "suggestions" ? "" : "after:scale-x-0"} hover:bg-light-default flex-1 p-4 relative after:transition after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-primary-default after:origin-left`}
              onClick={() => setFriendType("suggestions")}
            >
              Suggestions
            </button>
          </div>
        </Header>
        <div className={'flex flex-wrap p-4'}>
        {
          route === 'authenticated' && userProfile?.verified?
            <>
              {
                friendType === 'accepted' && acceptedProfiles.length ?
                  acceptedProfiles.map((profile) =>
                      <FriendCard className='m-4' key={profile.id} profile={profile} link={true}/>)
                  :
                  null
              }
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
                !(acceptedProfiles.length || sentFriends.length || pendingFriends.length) ?
                  <h1 className='text-xl md:text-2xl'>No friends yet! How about searching for some people you might know?</h1>
                  :
                  null
              }
            </>
            :
            <div className='bg-[url("/src/images/friends.png")] h-screen w-full bg-cover flex flex-col items-center justify-center h-full'>
              <div className='text-primary-default font-bold flex flex-col items-center justify-center text-3xl bg-light-default p-4 rounded-xl'>
                <div className='my-4'>Find New Friends</div>
                <Link to='/account' className='my-4'>Sign In</Link>
              </div>
            </div>

        }
        </div>
        <FriendSearchModal isOpen={isFriendsModalOpen} setIsOpen={setIsFriendsModalOpen}/>
    </div>
  );
};

export default FriendsPage;