import React, { useEffect, useState} from "react";
import {DataStore} from "aws-amplify";
import {Conversation, UserProfile} from "../../../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import FriendCard from "../../ui/FriendCard";
import ConversationModal from "./ConversationModal";
import {BsPlus, FaSearch} from "react-icons/all";
import {Link} from "react-router-dom";
import Modal from "../../common/Modal/Modal";
import Header from "../../layout/Header";
import ConservationSearchModal from "./ConservationSearchModal";
import Button from "../../common/Button/Button";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";
import ConversationCard from "../../ui/ConversationCard";
import LoadingState from "../../ui/LoadingState";

const MessagePage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation>();
  const [isNewConversationModalOpen, setNewConversationModalOpen] = useState(false);
  const [isConversationSearchModalOpen, setConversationSearchModalOpen] = useState(false);
  const [isConversationModalOpen, setConversationModalOpen] = useState(false);
  const { route } = useAuthenticator(context => [context.route]);
  const { userProfile, loadingUserProfile, friendProfiles} = useUserProfileStore();

  const handleNewConversation = async ({friendProfile} : {friendProfile: UserProfile}) => {
    setNewConversationModalOpen(false);
    if (!userProfile) {
      return
    }
    const existingConversation1 = await DataStore.query(Conversation, c => c.and(c => [
      c.userProfileID.eq(userProfile?.id),
      c.friendProfileID.eq(friendProfile.id)
    ]))
    const existingConversation2 = await DataStore.query(Conversation, c => c.and(c => [
      c.userProfileID.eq(friendProfile.id),
      c.friendProfileID.eq(userProfile?.id)
    ]))
    const existingConversations = [...existingConversation1, ...existingConversation2];
    if (existingConversations.length === 0) {
      const newConversation = await DataStore.save(new Conversation({
        userProfileID: userProfile?.id,
        friendProfileID: friendProfile.id,
        messages: [],
        userProfile: userProfile,
        friendProfile: friendProfile
      }))
      setCurrentConversation(newConversation)
      setConversationModalOpen(true)
    } else {
      setCurrentConversation(existingConversations[0])
      setConversationModalOpen(true)
    }
  }

  useEffect(() => {
    if (userProfile) {
      const conversationSub = DataStore.observeQuery(Conversation, c => c.or(c => [
        c.userProfileID.eq(userProfile.id),
        c.friendProfileID.eq(userProfile.id)
      ]))
        .subscribe(({ items }) => {
          setConversations(items);
        });

      return () => {
        conversationSub.unsubscribe();
      };
    } else {
      // Clear the conversations state when the user logs out
      setConversations([]);
    }
  }, [userProfile]);
  const openConversationModal = (conversation: Conversation) => {
    setCurrentConversation(conversation);
    setConversationModalOpen(true);
  };

  useEffect(() => {
    if(userProfile) {
      const conversationSub = DataStore.observeQuery(Conversation, c => c.or(c => [
        c.userProfileID.eq(userProfile.id),
        c.friendProfileID.eq(userProfile.id)
      ]))
        .subscribe(({items}) => {
          setConversations(items);
        })
      return () => {
        conversationSub.unsubscribe();
      };
    }
  }, [userProfile])

  const renderMessages = () => {
    if(loadingUserProfile || route === 'idle') {
      return <LoadingState/>
    }

    if(route !== 'authenticated') {
      return (
        <>
          <div className='m-4 text-xl'>You must be logged in to view your messages.</div>
          <Link to='/account'>
            <Button>Sign In</Button>
          </Link>
        </>
      )
    }

    if(!loadingUserProfile && (!userProfile || !userProfile.verified)) {
      return (
        <div className='m-4 text-xl'>Your profile is not verified yet. Once your profile has been verified, you will be able to view your messages.</div>
      )
    }

    return (
      <section className='my-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-items-center'>
        { conversations.length > 0 && userProfile ? conversations.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              className='my-4 cursor-pointer '
              isConversationModalOpen={isConversationModalOpen}
              setConversationModalOpen={setConversationModalOpen} conversation={conversation} userProfile={userProfile}
              onClick={() => openConversationModal(conversation)}/>
          ))
          :
          <div>
            No Conversations found!
          </div>
        }
      </section>
    )
  }

  return (
    <>
      <Header>
        <div className='w-full flex justify-end'>
          <button onClick={() => setConversationSearchModalOpen(true)}><FaSearch/></button>
        </div>
      </Header>
      <div className='p-4 min-h-full h-full relative'>
        {
          renderMessages()
        }
        <div className='fixed bottom-20 right-16'>
          <button className='flex flex-col items-center rounded-[100%] bg-green-950 text-white p-3' onClick={() => setNewConversationModalOpen(true)}  >
            <BsPlus className='text-3xl'/>
          </button>
        </div>
        <Modal isOpen={isNewConversationModalOpen} setIsOpen={setNewConversationModalOpen} title={<div>Start New Conversation</div>}>
          {
            friendProfiles.length > 0 ? friendProfiles.map(profile =>
                <FriendCard
                  key={profile.id}
                  profile={profile}
                  onClick={() => handleNewConversation({friendProfile: profile})}
                  link={false}/>)
              :
              <div>
                <h1 className='text-xl md:text-2xl my-4'>
                  No Friends found. Add some friends to start a conversation.
                </h1>
              </div>
          }
        </Modal>
        <ConversationModal
          conversation={currentConversation}
          isOpen={isConversationModalOpen}
          setIsOpen={setConversationModalOpen} />
        <ConservationSearchModal isOpen={isConversationSearchModalOpen} setIsOpen={setConversationSearchModalOpen} conversations={conversations}/>
      </div>
    </>
  );
}

export default MessagePage;
