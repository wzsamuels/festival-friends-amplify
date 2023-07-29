import React, {useEffect, useState} from "react";
import { Conversation, Profile } from "../../models";
import { useAuthenticator } from "@aws-amplify/ui-react";
import ConversationModal from "./Modals/ConversationModal";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import ConservationSearchModal from "./Modals/ConservationSearchModal";
import Button from "../../components/common/Button/Button";
import ConversationCard from "../../components/ui/ConversationCard";
import LoadingState from "../../components/ui/LoadingState";
import useProfileStore from "../../stores/profileStore";
import useFriendStore from "../../stores/friendProfileStore";
import useDataClearedStore from "../../stores/dataClearedStore";
import {createConversation} from "../../services/conversationServices";
import NewConversationModal from "./Modals/NewConversationModal";
import {PlusIcon} from "@heroicons/react/24/outline";
import useQueueStore from "../../stores/queueStore";
import {DataStore} from "@aws-amplify/datastore";
import {IonContent, IonPage} from "@ionic/react";

const MessagePage: React.FC = () => {
  const [currentConversation, setCurrentConversation] = useState<Conversation>();
  const [isNewConversationModalOpen, setNewConversationModalOpen] = useState(false);
  const [isConversationSearchModalOpen, setConversationSearchModalOpen] = useState(false);
  const [isConversationModalOpen, setConversationModalOpen] = useState(false);
  const { route } = useAuthenticator((context) => [context.route]);
  const userProfile = useProfileStore((state) => state.userProfile);
  const loadingUserProfile = useProfileStore((state) => state.loadingUserProfile);
  const friendProfiles = useFriendStore((state) => state.acceptedFriendProfiles);
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [loadingConversations, setLoadingConversations] = useState(false)
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const { dataStoreQueue } = useQueueStore()

  console.log("MessagePage friends: ", friendProfiles)

  useEffect(() => {
    if(!userProfile) return;

    dataStoreQueue.enqueue(async () => {
      setLoadingConversations(true);
      const conversations = await DataStore.query(Conversation, (c) =>
        c.or((c) => [
          c.profileID.eq(userProfile.id),
          c.friendProfileID.eq(userProfile.id),
        ])
      )
      setConversations(conversations);
      setLoadingConversations(false);
    })
  }, [userProfile])

  const handleNewConversation = async ({friendProfile}: { friendProfile: Profile;}) => {
    setNewConversationModalOpen(false);

    // Shouldn't be possible to get here without a user profile, but just in case
    if (!userProfile || !dataCleared) {
      return;
    }

    dataStoreQueue.enqueue(async () => {
      const conversation = await createConversation(userProfile, friendProfile)
      setCurrentConversation(conversation);
      setConversationModalOpen(true);
      setConversations(conversations => [...conversations, conversation])
    });
  };

  const openConversationModal = (conversation: Conversation) => {
    setCurrentConversation(conversation);
    setConversationModalOpen(true);
  };

  const renderMessages = () => {
    if (loadingUserProfile || loadingConversations || route === "idle") {
      return <LoadingState />;
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
    <IonPage>
      <IonContent>
      <Header
        className=" shadow-xl"
        onSearch={() => setConversationSearchModalOpen(true)}
      />
      <div className="min-h-full h-full relative">
        {renderMessages()}
        {
          route === "authenticated" &&
          <div className="fixed bottom-20 right-16">
            <button
              className="flex flex-col items-center rounded-[100%] bg-lightYellow p-3"
              onClick={() => setNewConversationModalOpen(true)}
            >
              <PlusIcon className="h-6" />
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
      </IonContent>
    </IonPage>
  );
};

export default MessagePage;
