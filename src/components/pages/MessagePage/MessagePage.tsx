import React, { useState} from "react";
import { Conversation, Profile } from "../../../models";
import { useAuthenticator } from "@aws-amplify/ui-react";
import ConversationModal from "./Modals/ConversationModal";
import { BsPlus, FaSearch } from "react-icons/all";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import ConservationSearchModal from "./Modals/ConservationSearchModal";
import Button from "../../common/Button/Button";
import ConversationCard from "../../ui/ConversationCard";
import LoadingState from "../../ui/LoadingState";
import useProfileStore from "../../../stores/profileStore";
import useFriendStore from "../../../stores/friendProfileStore";
import useConversationStore from "../../../stores/conversationStore";
import useDataClearedStore from "../../../stores/dataClearedStore";
import {createConversation} from "../../../services/conversationServices";
import NewConversationModal from "./Modals/NewConversationModal";

const MessagePage: React.FC = () => {
  const [currentConversation, setCurrentConversation] = useState<Conversation>();
  const [isNewConversationModalOpen, setNewConversationModalOpen] = useState(false);
  const [isConversationSearchModalOpen, setConversationSearchModalOpen] = useState(false);
  const [isConversationModalOpen, setConversationModalOpen] = useState(false);
  const { route } = useAuthenticator((context) => [context.route]);
  const userProfile = useProfileStore((state) => state.userProfile);
  const loadingUserProfile = useProfileStore((state) => state.loadingUserProfile);
  const friendProfiles = useFriendStore((state) => state.acceptedFriendProfiles);
  const conversations = useConversationStore((state) => state.conversations);
  const dataCleared = useDataClearedStore(state => state.dataCleared)

  console.log("MessagePage friends: ", friendProfiles)

  const handleNewConversation = async ({
    friendProfile,
  }: {
    friendProfile: Profile;
  }) => {
    setNewConversationModalOpen(false);
    if (!userProfile || !dataCleared) {
      return;
    }
    const conversation = await createConversation(userProfile, friendProfile)
    setCurrentConversation(conversation);
    setConversationModalOpen(true);
  };

  const openConversationModal = (conversation: Conversation) => {
    setCurrentConversation(conversation);
    setConversationModalOpen(true);
  };

  const renderMessages = () => {
    if (loadingUserProfile || route === "idle") {
      return <LoadingState />;
    }

    if (route !== "authenticated") {
      return (
        <div className='bg-[url("/src/images/messages.png")] w-full bg-cover flex flex-col items-center justify-center h-full min-h-screen p-2'>
          <div className="text-brandYellow font-bold flex flex-col items-center justify-center  bg-white p-4 rounded-xl w-full max-w-lg ">
            <h1 className="m-4 text-xl">
              You must be logged in to view your messages.
            </h1>
            <Link to="/account">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      );
    }

    if (!loadingUserProfile && (!userProfile || !userProfile.verified)) {
      return (
        <div className="m-4 text-xl">
          Your profile is not verified yet. Once your profile has been verified,
          you will be able to view your messages.
        </div>
      );
    }

    return (
      <section className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-items-center">
        {conversations.length > 0 && userProfile ? (
          conversations.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              className="my-4 cursor-pointer "
              conversation={conversation}
              onClick={() => openConversationModal(conversation)}
            />
          ))
        ) : (
          <div>No Conversations found!</div>
        )}
      </section>
    );
  };

  return (
    <>
      <Header>
        {
          route === "authenticated" &&
            <div className="w-full flex justify-end">
              <button onClick={() => setConversationSearchModalOpen(true)}>
                <FaSearch />
              </button>
            </div>
        }
      </Header>
      <div className="p-4 min-h-full h-full relative">
        {renderMessages()}
        {
          route === "authenticated" &&
          <div className="fixed bottom-20 right-16">
            <button
              className="flex flex-col items-center rounded-[100%] bg-brandYellow text-white p-3"
              onClick={() => setNewConversationModalOpen(true)}
            >
              <BsPlus className="text-3xl" />
            </button>
          </div>
        }

        <NewConversationModal
          friendProfiles={friendProfiles}
          isOpen={isNewConversationModalOpen}
          setIsOpen={setNewConversationModalOpen}
          handleNewConversation={handleNewConversation}/>
        <ConversationModal
          conversation={currentConversation}
          isOpen={isConversationModalOpen}
          setIsOpen={setConversationModalOpen}
        />
        <ConservationSearchModal
          isOpen={isConversationSearchModalOpen}
          setIsOpen={setConversationSearchModalOpen}
          conversations={conversations}
        />
      </div>
    </>
  );
};

export default MessagePage;
