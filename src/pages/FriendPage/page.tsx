import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Profile } from "../../models";
import FriendCard, { FriendCardButton } from "../../components/ui/FriendCard";
import FriendSearchModal from "./Modals/FriendSearchModal";
import Header from "../../components/layout/Header";
import {
  acceptFriendRequest,
  createFriendRequest,
  rejectFriendRequest,
} from "../../services/friendsService";
import LoadingState from "../../components/ui/LoadingState";
import { ToastData } from "../../types";
import Toast from "../../components/common/Toast/Toast";
import getErrorMessage from "../../lib/getErrorMessage";
import useDataClearedStore from "../../stores/dataClearedStore";
import useProfileStore from "../../stores/profileStore";
import {shallow} from "zustand/shallow";
import useFriendStore from "../../stores/friendProfileStore";
import { useErrorBoundary } from "react-error-boundary";
import SegmentSlide from "../../components/common/Segment/SegmentSlide";
import {IonContent, IonPage} from "@ionic/react";
type FriendType = "accepted" | "sent" | "suggestions" | "pending";

const FriendsPage: React.FC = () => {
  const { userProfile, loadingUserProfile } = useProfileStore((state) =>
    ({ userProfile: state.userProfile, loadingUserProfile: state.loadingUserProfile }), shallow)
  const loadingFriends = useFriendStore(state => state.loadingFriends);
  const allFriendships = useFriendStore(state => state.allFriendships);
  const acceptedFriendProfiles = useFriendStore(state => state.acceptedFriendProfiles);
  const incomingFriendProfiles = useFriendStore(state => state.incomingFriendProfiles);
  const outgoingFriendProfiles = useFriendStore(state => state.outgoingFriendProfiles);
  const [suggestedFriends, setSuggestedFriends] = useState<Profile[]>([]);
  const [friendType, setFriendType] = useState("accepted");
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);
  const [toastData, setToastData] = useState<ToastData | null>(null);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (!userProfile || !dataCleared) {
      return;
    }

    const fetchSuggestedFriends = async () => {
      try {
        const allProfiles = await DataStore.query(Profile);

        // Filter user profiles based on common attributes
        const suggestedFriends = allProfiles.filter((profile) => {
          // Exclude the current user from the suggestions
          if (profile.id === userProfile?.id) {
            return false;
          }
          // Exclude the current user's friends from the suggestions
          if (acceptedFriendProfiles.find((acceptedProfile) => acceptedProfile.id === profile.id)) {
            return false;
          }

          // Exclude the current user's pending friend requests from the suggestions
          if (incomingFriendProfiles.find((pendingFriendProfile) => pendingFriendProfile.id === profile.id)) {
            return false;
          }

          // Exclude the current user's sent friend requests from the suggestions
          if (outgoingFriendProfiles.find((sentFriendProfile) => sentFriendProfile.id === profile.id)) {
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
        console.log("Error observing friendships in page.tsx: ", getErrorMessage(e));
      }
    }
    fetchSuggestedFriends();
  }, [userProfile, dataCleared]);

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
  const handleFriendAccept = async (friendProfile: Profile) => {
    try {
      await acceptFriendRequest(friendProfile, allFriendships);
    } catch (e) {
      showBoundary(e);
    }
  };

  const handleFriendReject = async (friendProfile: Profile) => {
    try {
      await rejectFriendRequest(friendProfile, allFriendships);
    } catch (e) {
      showBoundary(e);
    }
  }

  const handleFriendRequest = async (friendProfile: Profile) => {
    try {
      await createFriendRequest(userProfile, friendProfile, setToastData);
    } catch (e) {
      showBoundary(e)
    }
  };

  const FriendsList: React.FC<{
    friends: Profile[];
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
    if (loadingFriends || loadingUserProfile) {
      return <LoadingState />;
    }

    const friendTypeMap: Record<
      FriendType,
      {
        friends: Profile[];
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
            onClick: (friendProfile: Profile) =>
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
            onClick: (friendProfile: Profile) =>
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
            onClick: (friendProfile: Profile) =>
              handleFriendAccept(friendProfile),
          },
          {
            label: "Reject",
            onClick: (friendProfile: Profile) =>
              handleFriendReject(friendProfile),
          },
        ],
      },
    };

    const currentType = friendTypeMap[friendType as FriendType];

    if (currentType.friends.length === 0) {
      return (
        <div className={"p-4 w-full flex-col items-center justify-center pt-8 min-[375px]:pt-0"}>
          <h1 className="text-xl my-4">{currentType.noFriendsMessage}</h1>
          <p>
            Want more friends? Try searching for them or checking out the
            suggestions tab.
          </p>
        </div>
      );
    }

    return (
      <div className={"p-4 w-full flex-col items-center justify-center pt-8 min-[375px]:pt-0"}>
        <FriendsList
          buttons={currentType.buttons}
          friends={currentType.friends}
        />
      </div>
    );
  };

  const segmentItems = [
    {
      id: 0,
      type: "accepted",
      label: (
        <div className="flex justify-center items-center">
          <div>Friends</div>
        </div>
      )
    },
    {
      id: 1,
      type: "pending",
      label: (
        <div className="flex justify-center items-center">
          <div>Requests</div>
          {incomingFriendProfiles.length > 0 ? (
            <div className="bg-lightYellow text-black rounded-full mx-2 w-[20px] p-2  h-[20px] justify-center items-center hidden sm:flex">
              {incomingFriendProfiles.length}
            </div>
          ) : null}
        </div>
      ),
    },
    /*
    {
      id: 2,
      type: "sent",
      label: (
        <div className="flex justify-center items-center">
          <div className="hidden sm:block">Sent</div>
          <div className="block sm:hidden text-xl"><MdOutlineOutbox/></div>
          {outgoingFriendProfiles.length > 0 ? (
            <div className="bg-lightYellow text-black rounded-full mx-2 w-[20px] p-2 h-[20px] justify-center items-center hidden md:flex">
              {outgoingFriendProfiles.length}
            </div>
          ) : null}
        </div>
      ),
    },

     */
    {
      id: 3,
      type: "suggestions",
      label: (
        <div className="flex justify-center items-center">
          <div>Suggested</div>
          {suggestedFriends.length > 0 ? (
            <div className="bg-lightYellow text-black rounded-full mx-2 w-[20px] p-2 h-[20px] justify-center items-center hidden md:flex">
              {suggestedFriends.length}
            </div>
          ) : null}
        </div>
      ),
    },
  ];

  return (
    <IonPage>
      <Header
        onSearch={() => setIsFriendsModalOpen(true)}
        secondChild={
          <div className="min-[375px]:hidden">
            <SegmentSlide
              selected={friendType}
              setSelected={setFriendType}
              items={segmentItems}
              className="flex"
            />
          </div>
        }
      >
        <SegmentSlide
          selected={friendType}
          setSelected={setFriendType}
          items={segmentItems}
          className="hidden min-[375px]:flex "
        />
      </Header>
      <IonContent>
        <div className="flex flex-wrap w-full">
          {renderFriends()}
        </div>
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
      </IonContent>
    </IonPage>
  );
};

export default FriendsPage;
