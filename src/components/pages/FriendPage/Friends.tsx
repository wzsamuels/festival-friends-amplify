import React, {useEffect, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Friendship, UserProfile} from "../../../models";
import FriendCard from "../../ui/FriendCard";
import FriendSearchModal from "./Modals/FriendSearchModal";
import {Link} from "react-router-dom";
import Header from "../../layout/Header";
import {BsSearch} from "react-icons/all";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";

const FriendsPage: React.FC = () => {
  const { route } = useAuthenticator(context => [context.route]);
  const { userProfile, loadingUserProfile, loadingFriendProfiles} = useUserProfileStore()
  const [allFriends, setFriends] = useState<Friendship[]>([]);
  const [acceptedProfiles, setAcceptedProfiles] = useState<UserProfile[]>([]);
  const [sentFriends, setSentFriends] = useState<UserProfile[]>([]);
  const [pendingFriends, setPendingFriends] = useState<UserProfile[]>([]);
  const [suggestedFriends, setSuggestedFriends] = useState<UserProfile[]>([]);
  const [friendType, setFriendType] = useState("accepted");
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);

  useEffect(() => {

    const fetchSuggestedFriends = async () => {
      // Fetch all user profiles
      const allProfiles = await DataStore.query(UserProfile);

      // Filter user profiles based on common attributes
      return allProfiles.filter(profile => {
        // Exclude the current user from the suggestions
        if (profile.id === userProfile?.id) {
          return false;
        }

        // Check for common attributes
        const commonSchool = profile.school === userProfile?.school;
        const commonCity = profile.city === userProfile?.city;
        const commonState = profile.state === userProfile?.state;

        return commonSchool || commonCity || commonState;
      });
    };

    fetchSuggestedFriends().then(setSuggestedFriends);

    if (route === 'authenticated' && userProfile) {
      const subscription = DataStore.observeQuery(Friendship, c => c.or(c => [
        c.userProfileID.eq(userProfile.id),
        c.friendProfileID.eq(userProfile.id)
      ])).subscribe(async ({items}) => {
        const profileID = userProfile.id;
        setFriends(items);

        const acceptedFriends = [] as  UserProfile[];
        const incomingFriendRequests = [] as  UserProfile[];
        const outgoingFriendRequests = [] as  UserProfile[];

        await Promise.all(items.map(async (friend) => {
          const relatedProfile = friend.userProfileID === profileID ? await friend.friendProfile : await friend.userProfile;

          if (friend.isAccepted) {
            acceptedFriends.push(relatedProfile);
          } else if (friend.friendProfileID === profileID) {
            incomingFriendRequests.push(relatedProfile);
          } else {
            outgoingFriendRequests.push(relatedProfile);
          }
        }));

        console.log("All friends: ", allFriends, "\nAccepted friends: ", acceptedFriends, "\nIncoming friend requests: ", incomingFriendRequests, "\nOutgoing friend requests: ", outgoingFriendRequests)

        setPendingFriends(incomingFriendRequests);
        setAcceptedProfiles(acceptedFriends)
        setSentFriends(outgoingFriendRequests);
      });

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [route, userProfile])

  // Accept friend request
  const handleFriendAccept = async ({friendShipID} : {friendShipID: string}) => {
    const friendShip = allFriends.filter((friendship) => friendship.userProfileID === friendShipID);
    await DataStore.save(Friendship.copyOf(friendShip[0], updated => {
      updated.isAccepted = true;
    }))
  }

  const handleFriendshipReject = async ({friendShipID} : {friendShipID: string}) => {
    const friendShip = allFriends.filter((friendship) => friendship.userProfileID === friendShipID || friendship.friendProfileID === friendShipID);
    console.log(friendShip)
    await DataStore.delete(friendShip[0]);
  }

  useEffect(() => {
    console.log("Loading user profile", loadingUserProfile, "userProfile", userProfile);
  }, [loadingUserProfile, userProfile]);
  const renderFriends = () => {
    if(!loadingUserProfile && (!userProfile || !userProfile.verified)) {
      return (<div>Your profile is not verified yet. Please check back later.</div>)
    }
    if(loadingFriendProfiles) {
      return (<div>Loading friends...</div>)
    }
    if(friendType === 'accepted') {
      return (
        <>
          {
            acceptedProfiles.map((profile) =>
              <FriendCard className='m-4' key={profile.id} profile={profile} link={true}/>)
          }
          <h1>Want to see more friends? Try searching for them or checking out the suggestions tab.</h1>
        </>
      )
    } else if(friendType === 'sent') {
      return (
        <>
          {
            sentFriends.map((profile) =>
              <FriendCard className='m-4' key={profile.id} profile={profile} link={true}/>)
          }
        </>
      )
    } else if(friendType === 'suggestions') {
      return (
        <>
          {
            suggestedFriends.map(friend =>
              <FriendCard
                className='m-4'
                key={friend.id}
                profile={friend}
                link={true}

              />)
          }
        </>
      )
    } else if(friendType === 'pending') {
      return (
        <>
          {
            pendingFriends.map(friend =>
              <FriendCard
                className='m-4'
                key={friend.id}
                profile={friend}
                link={true}
                onConfirm={() => handleFriendAccept({friendShipID: friend.id})}
                onCancel={() => handleFriendshipReject({friendShipID: friend.id})}
              />
            )}
        </>
      )
    }
  }

  console.log("auth route", route, "Verified: ", userProfile?.verified)

  return (
    <div className='flex flex-wrap w-full pt-header pb-header'>
      <Header>
        <div className='w-full flex justify-between items-center h-full'>
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
          <button
            className={`${friendType === "sent" ? "" : "after:scale-x-0"} hover:bg-light-default flex-1 p-4 relative after:transition after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-primary-default after:origin-left`}
            onClick={() => setFriendType("sent")}
          >
            Sent
          </button>
          {
            route === 'authenticated' && userProfile?.verified ?
              <button onClick={() => setIsFriendsModalOpen(true)} className='flex items-center p-4'>
                <BsSearch/>
              </button>
              :
              null
          }
        </div>
      </Header>
      <div className={'p-4 w-full'}>
      {
        route === 'authenticated' ?
          <div className='flex flex-wrap'>
            {renderFriends()}
          </div>
          :
          <div className='bg-[url("/src/images/friends.png")]  w-full bg-cover flex flex-col items-center justify-center h-screen'>
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