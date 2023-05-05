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
import SearchButton from "../../ui/SearchButton";
import Toast from "../../common/Toast/Toast";
import Segment from "../../common/Segment/Segment";

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
      if(acceptedProfiles.length === 0) {
        return (
          <div>
            <h1 className='text-xl my-4'>No accepted friends.</h1>
            <p>Want more friends? Try searching for them or checking out the suggestions tab.</p>
          </div>
        )
      }
      return (
        <>
          <div className='flex flex-wrap'>
            {
              acceptedProfiles.map((profile) =>
                <FriendCard className='m-4' key={profile.id} profile={profile} link={true}/>)
            }
          </div>
          <p>Want more friends? Try searching for them or checking out the suggestions tab.</p>
        </>
      )
    } else if(friendType === 'sent') {
      if(sentFriends.length === 0) {
        return (
          <div>
            <h1 className='text-xl my-4'>No sent friend requests.</h1>
            <p>Want to see more friends? Try searching for them or checking out the suggestions tab.</p>
          </div>
        )
      }
      return (
        <>
          <div className='flex flex-wrap'>
            {
              sentFriends.map((profile) =>
                <FriendCard className='m-4' key={profile?.id} profile={profile} link={true}/>)
            }
          </div>
          <p>Want to see more friend suggestions? Update your profile your.</p>
        </>
      )
    } else if(friendType === 'suggestions') {
      if(suggestedFriends.length === 0) {
        return (
          <div>
            <h1 className='text-xl my-4'>No suggested friends.</h1>
            <p>Want to see more friend suggestions? Update your profile to see more suggestions.</p>
          </div>
        )
      }

      return (
        <>
          <div className='flex flex-wrap'>
            {
              suggestedFriends.map(friend =>
                <FriendCard
                  className='m-4'
                  key={friend.id}
                  profile={friend}
                  link={true}

                />)
            }
          </div>
          <p>Want to see more friend suggestions? Update your profile to see more suggestions.</p>
        </>
      )
    } else if(friendType === 'pending') {
      if(pendingFriends.length === 0) {
        return (
          <div>
            <h1 className='text-xl my-4'>No friend requests pending.</h1>
            <p>Want to see more friends? Try searching for them or checking out the suggestions tab.</p>
          </div>
        )
      }
      return (
        <>
          <div className='flex flex-wrap'>
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
          </div>
        </>
      )
    }
  }

  console.log("auth route", route, "Verified: ", userProfile?.verified)

  const segmentItems = [
    {
      type: 'accepted',
      label: 'Friends'
    },
    {
      type: 'pending',
      children:
          <div className='flex justify-center items-center'>
            <div>Requests</div>
            {pendingFriends.length > 0 ? <div className='bg-green-950 text-white rounded-full mx-2 w-[20px] p-2 text-sm h-[20px] flex justify-center items-center'>{pendingFriends.length}</div> : null}
          </div>
    },
    {
      type: 'suggestions',
      children:
          <div className='flex justify-center items-center'>
            <div>Suggestions</div>
            {suggestedFriends.length > 0 ? <div className='bg-green-950 text-white rounded-full mx-2 w-[20px] p-2 h-[20px] flex justify-center items-center'>{suggestedFriends.length}</div> : null}
          </div>
    },
    {
      type: 'sent',
      children:
        <div className='flex justify-center items-center'>
          <div>Sent</div>
          {sentFriends.length > 0 ? <div className='bg-green-950 text-white rounded-full mx-2 w-[20px] p-2 h-[20px] flex justify-center items-center'>{sentFriends.length}</div> : null}
        </div>
    },
  ];

  return (
    <div className='flex flex-wrap w-full'>
      <Header onSearch={() => setIsFriendsModalOpen(true)}>
        <Segment
          segmentType={friendType}
          setSegmentType={setFriendType}
          items={segmentItems}
        />
      </Header>
      <div className={'p-4 w-full'}>
      {
        route === 'authenticated' ?
          <>
            {renderFriends()}
          </>
          :
          <div className='bg-[url("/src/images/friends.png")]  w-full bg-cover flex flex-col items-center justify-center h-screen'>
            <div className='text-primary-default font-bold flex flex-col items-center justify-center text-3xl bg-white p-4 rounded-xl'>
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