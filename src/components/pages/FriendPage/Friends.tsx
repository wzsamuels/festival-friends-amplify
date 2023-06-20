import React, { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { Profile } from "../../../models";
import FriendCard, { FriendCardButton } from "../../ui/FriendCard";
import FriendSearchModal from "./Modals/FriendSearchModal";
import Header from "../../layout/Header";
import Segment from "../../common/Segment/Segment";
import {
  acceptFriendRequest,
  createFriendRequest,
  rejectFriendRequest,
} from "../../../services/friendsService";
import UnverifiedState from "../../ui/UnverifiedState";
import LoadingState from "../../ui/LoadingState";
import { ToastData } from "../../../types";
import Toast from "../../common/Toast/Toast";
import getErrorMessage from "../../../lib/getErrorMessage";
import useDataClearedStore from "../../../stores/dataClearedStore";
import useProfileStore from "../../../stores/profileStore";
import {shallow} from "zustand/shallow";
import useFriendStore from "../../../stores/friendProfileStore";
import {Link} from "react-router-dom";
import Button from "../../common/Button/Button";
import {
  FaUserFriends,
  MdLightbulbOutline, MdMoveToInbox, MdOutlineOutbox,
} from "react-icons/all";
import { useErrorBoundary } from "react-error-boundary";
import SegmentSlide from "../../common/Segment/SegmentSlide";

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
  const [suggestedFriends, setSuggestedFriends] = useState<Profile[]>([]);
  const [friendType, setFriendType] = useState("accepted");
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);
  const [toastData, setToastData] = useState<ToastData | null>(null);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (route !== "authenticated" || !userProfile || !dataCleared) {
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
    if (loadingFriends || loadingUserProfile || route === "idle") {
      return <LoadingState />;
    }

    if (route !== "authenticated") {
      return (
        <div className='bg-[url("https://twinsilver.mo.cloudinary.net/eventfriends/public/website/friends3.png?tx=q_auto,f_auto")] w-full bg-cover relative min-h-[calc(100vh-5rem)] h-full'>
          <div className="flex flex-col items-center justify-center  bg-white p-4 rounded-xl w-full max-w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="m-4 text-xl">
              Login in to view your friends.
            </h1>
            <Link to="/account">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      )
    }

    if (!loadingUserProfile && (!userProfile || !userProfile.verified)) {
      return (
        <div className="pt-8 min-[375px]:pt-0">
          <UnverifiedState />
        </div>
      )
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
          <div className="block mx-4">Friends</div>
          <div className="hidden text-xl"><FaUserFriends/></div>
        </div>
      )
    },
    {
      id: 1,
      type: "pending",
      label: (
        <div className="flex justify-center items-center">
          <div className="block">Requests</div>
          <div className="hidden text-xl"><MdMoveToInbox/></div>
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
          <div className="block">Suggested</div>
          <div className="hidden text-xl"><MdLightbulbOutline/></div>
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
    <div className="flex flex-wrap w-full">
      <Header
        className="min-[375px]:shadow-xl"
        onSearch={() => setIsFriendsModalOpen(true)}>
        <SegmentSlide
          selected={friendType}
          setSelected={setFriendType}
          items={segmentItems}
          className="hidden min-[375px]:flex "
        />
      </Header>
      <div className="fixed w-full z-10 min-[400px]:hidden shadow-xl min-[375px]:hidden">
      <SegmentSlide
        selected={friendType}
        setSelected={setFriendType}
        items={segmentItems}
        className="flex"
      />
      </div>
      {renderFriends()}
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
