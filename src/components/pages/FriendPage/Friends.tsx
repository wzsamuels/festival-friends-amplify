import React, {useContext, useEffect, useState} from "react";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "aws-amplify";
import {Friendship, UserProfile} from "../../../models";
import FriendCard, {FriendCardButton} from "../../ui/FriendCard";
import FriendSearchModal from "./Modals/FriendSearchModal";
import Header from "../../layout/Header";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";
import Segment from "../../common/Segment/Segment";
import DataStoreContext, {DataStoreContextType} from "../../../context/DataStoreContext";
import {acceptFriendRequest, rejectFriendship} from "../../../services/FriendsService";
import LoggedOutState from "../../ui/LoggedOutState";
import UnverifiedState from "../../ui/UnverifiedState";
import LoadingState from "../../ui/LoadingState";

type FriendType = 'accepted' | 'sent' | 'suggestions' | 'pending';

const FriendsPage: React.FC = () => {
  const { route } = useAuthenticator(context => [context.route]);
  const { userProfile, loadingUserProfile, loadingFriendProfiles} = useUserProfileStore()
  const [allFriends, setAllFriends] = useState<Friendship[]>([]);
  const [acceptedProfiles, setAcceptedProfiles] = useState<UserProfile[]>([]);
  const [sentFriendProfiles, setSentFriends] = useState<UserProfile[]>([]);
  const [pendingFriendProfiles, setPendingFriends] = useState<UserProfile[]>([]);
  const [suggestedFriends, setSuggestedFriends] = useState<UserProfile[]>([]);
  const [friendType, setFriendType] = useState("accepted");
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType

  useEffect(() => {
    if (route !== 'authenticated' || !userProfile || !dataStoreCleared) {
      return;
    }

    const subscription = DataStore.observeQuery(Friendship, c => c.or(c => [
      c.userProfileID.eq(userProfile.id),
      c.friendProfileID.eq(userProfile.id)
    ])).subscribe(async ({items}) => {
      const profileID = userProfile.id;
      setAllFriends(items);

      const acceptedFriends = [] as UserProfile[];
      const incomingFriendRequests = [] as UserProfile[];
      const outgoingFriendRequests = [] as UserProfile[];

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

      setPendingFriends(incomingFriendRequests);
      setAcceptedProfiles(acceptedFriends)
      setSentFriends(outgoingFriendRequests);

      const allProfiles = await DataStore.query(UserProfile);

      // Filter user profiles based on common attributes
      const suggestedFriends = allProfiles.filter(profile => {
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
      setSuggestedFriends(suggestedFriends);
    });

    return () => {
      subscription.unsubscribe();
    };

  }, [route, userProfile, dataStoreCleared])

  useEffect(() => {
    console.log("All friends: ", allFriends, "\nAccepted friends: ", acceptedProfiles, "\nIncoming friend requests: ", pendingFriendProfiles, "\nOutgoing friend requests: ", sentFriendProfiles)
  }, [allFriends, acceptedProfiles, pendingFriendProfiles, sentFriendProfiles])

  // Accept friend request
  const handleFriendAccept = async ({friendProfileID} : {friendProfileID: string}) => {
    await acceptFriendRequest(friendProfileID, allFriends);
  }

  const handleFriendReject = async ({friendProfileID} : {friendProfileID: string}) => {
    await rejectFriendship(friendProfileID, allFriends);
  }

  const FriendsList: React.FC<{friends: UserProfile[], buttons?: FriendCardButton[]}> = ({friends, buttons}) => (
    <>
      <div className='flex flex-wrap'>
        {
          friends.map((profile) =>
            <FriendCard className='m-4' key={profile.id} profile={profile} buttons={buttons} link={true}/>)
        }
      </div>
      <p>Want more friends? Try searching for them or checking out the suggestions tab.</p>
    </>
  );

  const renderFriends = () => {
    if (loadingFriendProfiles || loadingUserProfile || route === 'idle') {
      return <LoadingState/>
    }

    if (route !== 'authenticated') {
      return <LoggedOutState/>;
    }

    if (!loadingUserProfile && (!userProfile || !userProfile.verified)) {
      return <UnverifiedState/>;
    }



    const friendTypeMap: Record<FriendType, { friends: UserProfile[], noFriendsMessage: string, buttons?: FriendCardButton[]}> = {
      'accepted': {
        friends: acceptedProfiles,
        noFriendsMessage: 'No accepted friends.'
      },
      'sent': {
        friends: sentFriendProfiles,
        noFriendsMessage: 'No sent friend requests.',
        buttons: [
          {
            label: 'Cancel',
            onClick: (friendProfileID: string) =>
              handleFriendReject({friendProfileID})
          }
        ]
      },
      'suggestions': {
        friends: suggestedFriends,
        noFriendsMessage: 'No suggested friends.'
      },
      'pending': {
        friends: pendingFriendProfiles,
        noFriendsMessage: 'No friend requests pending.',
        buttons: [
          {
            label: 'Accept',
            onClick: (friendProfileID: string) =>
              handleFriendAccept({friendProfileID})
          },
          {
            label: 'Reject',
            onClick: (friendProfileID: string) =>
              handleFriendReject({friendProfileID})
          }
        ]
      },
    };

    const currentType = friendTypeMap[friendType as FriendType];

    if (currentType.friends.length === 0) {
      return (
        <div>
          <h1 className='text-xl my-4'>{currentType.noFriendsMessage}</h1>
          <p>Want more friends? Try searching for them or checking out the suggestions tab.</p>
        </div>
      )
    }

    return <FriendsList buttons={currentType.buttons} friends={currentType.friends} />;
  }

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
            {pendingFriendProfiles.length > 0 ? <div className='bg-green-950 text-white rounded-full mx-2 w-[20px] p-2 text-sm h-[20px] flex justify-center items-center'>{pendingFriendProfiles.length}</div> : null}
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
          {sentFriendProfiles.length > 0 ? <div className='bg-green-950 text-white rounded-full mx-2 w-[20px] p-2 h-[20px] flex justify-center items-center'>{sentFriendProfiles.length}</div> : null}
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
        renderFriends()
      }
      </div>
      <FriendSearchModal isOpen={isFriendsModalOpen} setIsOpen={setIsFriendsModalOpen}/>

    </div>
  );
};

export default FriendsPage;