import React, { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { Friendship, UserProfile } from "../../../models";
import FriendCard, { FriendCardButton } from "../../ui/FriendCard";
import FriendSearchModal from "./Modals/FriendSearchModal";
import Header from "../../layout/Header";
import Segment from "../../common/Segment/Segment";
import {
  acceptFriendRequest,
  createFriendRequest,
  rejectFriendRequest,
} from "../../../services/FriendsService";
import LoggedOutState from "../../ui/LoggedOutState";
import UnverifiedState from "../../ui/UnverifiedState";
import LoadingState from "../../ui/LoadingState";
import { ToastData } from "../../../types";
import Toast from "../../common/Toast/Toast";
import getErrorMessage from "../../../lib/getErrorMessage";
import useDataClearedStore from "../../../stores/dataClearedStore";
import useProfileStore from "../../../stores/profileStore";
import {shallow} from "zustand/shallow";
import useFriendStore from "../../../stores/friendProfileStore";

type FriendType = "accepted" | "sent" | "suggestions" | "pending";

const FriendsPage: React.FC = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const { userProfile, loadingUserProfile } = useProfileStore((state) =>
    ({ userProfile: state.userProfile, loadingUserProfile: state.loadingUserProfile }), shallow)
  const loadingFriends = useFriendStore(state => state.loadingFriends);
  const allFriendships = useFriendStore(state => state.allFriendships);
  const acceptedFriendProfiles = useFriendStore(state => state.acceptedFriendProfiles);
  const incomingFriendProfiles = useFriendStore(state => state.incomingFriendProfiles);
  const outgoingFriendProfiles = useFriendStore(state => state.outgoingFriendProfiles);
  const [suggestedFriends, setSuggestedFriends] = useState<UserProfile[]>([]);
  const [friendType, setFriendType] = useState("accepted");
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);
  const [toastData, setToastData] = useState<ToastData | null>(null);

  useEffect(() => {
    if (route !== "authenticated" || !userProfile || !dataCleared) {
      return;
    }

    const fetchSuggestedFriends = async () => {
      try {
        const allProfiles = await DataStore.query(UserProfile);

        // Filter user profiles based on common attributes
        const suggestedFriends = allProfiles.filter((profile) => {
          // Exclude the current user from the suggestions
          if (profile.id === userProfile?.id) {
            return false;
          }
          // Exclude the current user's friends from the suggestions
          if (
            acceptedFriendProfiles.find(
              (acceptedProfile) => acceptedProfile.id === profile.id
            )
          ) {
            return false;
          }

          // Exclude the current user's pending friend requests from the suggestions
          if (
            incomingFriendProfiles.find(
              (pendingFriendProfile) => pendingFriendProfile.id === profile.id
            )
          ) {
            return false;
          }

          // Exclude the current user's sent friend requests from the suggestions
          if (
            outgoingFriendProfiles.find(
              (sentFriendProfile) => sentFriendProfile.id === profile.id
            )
          ) {
            return false;
          }

          // Check for common attributes
          const commonSchool = profile.school === userProfile?.school;
          const commonCity = profile.city === userProfile?.city;
          const commonState = profile.state === userProfile?.state;

          return commonSchool || commonCity || commonState;
        });
        setSuggestedFriends(suggestedFriends);
      } catch (e) {
        console.log("Error observing friendships in Friends.tsx: ", getErrorMessage(e));
      }
    }
    fetchSuggestedFriends();
  }, [route, userProfile, dataCleared]);

  useEffect(() => {
    console.log(
      "All friendships: ",
      allFriendships,
      "\nAccepted friend profiles ",
      acceptedFriendProfiles,
      "\nIncoming friend profiles ",
      incomingFriendProfiles,
      "\nOutgoing friend profiles: ",
      outgoingFriendProfiles
    );
  }, [allFriendships, acceptedFriendProfiles, incomingFriendProfiles, outgoingFriendProfiles]);

  // Accept friend request
  const handleFriendAccept = async (friendProfile: UserProfile) => {
    await acceptFriendRequest(friendProfile, allFriendships);
  };

  const handleFriendReject = async (friendProfile: UserProfile) => {
    await rejectFriendRequest(friendProfile, allFriendships);
  };

  const handleFriendRequest = async (friendProfile: UserProfile) => {
    await createFriendRequest(userProfile, friendProfile, setToastData);
  };

  const FriendsList: React.FC<{
    friends: UserProfile[];
    buttons?: FriendCardButton[];
  }> = ({ friends, buttons }) => (
    <>
      <div className="flex flex-wrap justify-center">
        {friends.map((profile) => (
          <FriendCard
            className="m-4"
            key={profile.id}
            profile={profile}
            buttons={buttons}
            link={true}
          />
        ))}
      </div>
      <p>
        Want more friends? Try searching for them or checking out the
        suggestions tab.
      </p>
    </>
  );

  const renderFriends = () => {
    if (loadingFriends || loadingUserProfile || route === "idle") {
      return <LoadingState />;
    }

    if (route !== "authenticated") {
      return <LoggedOutState />;
    }

    if (!loadingUserProfile && (!userProfile || !userProfile.verified)) {
      return <UnverifiedState />;
    }

    const friendTypeMap: Record<
      FriendType,
      {
        friends: UserProfile[];
        noFriendsMessage: string;
        buttons?: FriendCardButton[];
      }
    > = {
      accepted: {
        friends: acceptedFriendProfiles,
        noFriendsMessage: "No accepted friends.",
      },
      sent: {
        friends: outgoingFriendProfiles,
        noFriendsMessage: "No sent friend requests.",
        buttons: [
          {
            label: "Cancel",
            onClick: (friendProfile: UserProfile) =>
              handleFriendReject(friendProfile),
          },
        ],
      },
      suggestions: {
        friends: suggestedFriends,
        noFriendsMessage: "No suggested friends.",
        buttons: [
          {
            label: "Send Request",
            onClick: (friendProfile: UserProfile) =>
              handleFriendRequest(friendProfile),
          },
        ],
      },
      pending: {
        friends: incomingFriendProfiles,
        noFriendsMessage: "No friend requests pending.",
        buttons: [
          {
            label: "Accept",
            onClick: (friendProfile: UserProfile) =>
              handleFriendAccept(friendProfile),
          },
          {
            label: "Reject",
            onClick: (friendProfile: UserProfile) =>
              handleFriendReject(friendProfile),
          },
        ],
      },
    };

    const currentType = friendTypeMap[friendType as FriendType];

    if (currentType.friends.length === 0) {
      return (
        <div>
          <h1 className="text-xl my-4">{currentType.noFriendsMessage}</h1>
          <p>
            Want more friends? Try searching for them or checking out the
            suggestions tab.
          </p>
        </div>
      );
    }

    return (
      <FriendsList
        buttons={currentType.buttons}
        friends={currentType.friends}
      />
    );
  };

  const segmentItems = [
    {
      type: "accepted",
      label: "Friends",
    },
    {
      type: "pending",
      children: (
        <div className="flex justify-center items-center">
          <div>Requests</div>
          {incomingFriendProfiles.length > 0 ? (
            <div className="bg-green-950 text-white rounded-full mx-2 w-[20px] p-2  h-[20px] justify-center items-center hidden sm:flex">
              {incomingFriendProfiles.length}
            </div>
          ) : null}
        </div>
      ),
    },
    {
      type: "suggestions",
      children: (
        <div className="flex justify-center items-center">
          <div>Suggestions</div>
          {suggestedFriends.length > 0 ? (
            <div className="bg-green-950 text-white rounded-full mx-2 w-[20px] p-2 h-[20px] justify-center items-center hidden md:flex">
              {suggestedFriends.length}
            </div>
          ) : null}
        </div>
      ),
    },
    {
      type: "sent",
      children: (
        <div className="flex justify-center items-center">
          <div>Sent</div>
          {outgoingFriendProfiles.length > 0 ? (
            <div className="bg-green-950 text-white rounded-full mx-2 w-[20px] p-2 h-[20px] justify-center items-center hidden md:flex">
              {outgoingFriendProfiles.length}
            </div>
          ) : null}
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap w-full">
      <Header onSearch={() => setIsFriendsModalOpen(true)}>
        <Segment
          segmentType={friendType}
          setSegmentType={setFriendType}
          items={segmentItems}
        />
      </Header>
      <div className={"p-4 w-full flex-col items-center justify-center"}>{renderFriends()}</div>
      <FriendSearchModal
        isOpen={isFriendsModalOpen}
        setIsOpen={setIsFriendsModalOpen}
      />
      {toastData && (
        <Toast
          toastData={toastData}
          onClose={() => {
            setToastData(null);
          }}
        />
      )}
    </div>
  );
};

export default FriendsPage;
