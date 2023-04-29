import React, {useContext, useEffect, useRef, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Conversation, Friendship, UserProfile} from "../../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import FriendCard from "../../components/Friends/FriendCard";
import ConversationModal from "./ConversationModal";
import UserProfileContext from "../../context/UserProfileContext";
import { Dialog } from '@headlessui/react'
import {BsPlus, BsSearch, FaSearch} from "react-icons/all";
import {Link} from "react-router-dom";
import Modal from "../../components/Modal";
import Header from "../../components/Header";
import useUserFriends from "../../hooks/useUserFriends";

const MessagePage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation>();
  const [isNewConversationModalOpen, setNewConversationModalOpen] = useState(false);
  const [isConversationModalOpen, setConversationModalOpen] = useState(false);
  const { user } = useAuthenticator();
  const { userProfile } = useContext(UserProfileContext)
  const { friendProfiles } = useUserFriends()
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <>
      <Header>
        <button><FaSearch/></button>
      </Header>
      <div className='p-4 min-h-full h-full relative mt-header'>
        {
          user && userProfile?.verified ?
            <>
              {/* Conversations */}
              <section className='my-4 flex flex-wrap'>
                  { conversations.length > 0 ? conversations.map((conversation) => (
                        <ConversationCard
                          key={conversation.id}
                          className='my-4 cursor-pointer'
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
            </>
          :
            <div>
              <h1 className='text-xl md:text-2xl my-4'>
                Verified Festival Friends Account Required.
              </h1>
              <Link to='/account'>
                <button>Sign In</button>
              </Link>
            </div>
        }
        <div className='absolute bottom-16 right-4'>
          <button className='flex flex-col items-center rounded-full bg-primary-default text-light-default p-2' onClick={() => setNewConversationModalOpen(true)}  >
            <span className='mx-4'>New</span>
            <BsPlus/>
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
          userProfile={userProfile}
          isOpen={isConversationModalOpen}
          setIsOpen={setConversationModalOpen} />
      </div>
    </>
  );
}




interface ConversationCardProps {
  conversation: Conversation,
  userProfile: UserProfile | undefined,
  isConversationModalOpen: boolean,
  setConversationModalOpen: (arg: boolean) => void
  onClick: (arg: Conversation) => void
  className: string
}
const ConversationCard = ({conversation, userProfile, onClick, className} : ConversationCardProps) => {
  const [friendProfile, setFriendProfile] = useState<UserProfile>();
  const [friendProfileImage, setFriendProfileImage] = useState<string>();
  const [lastMessage, setLastMessage] = useState<string>();

  useEffect(() => {
      // Fetch the profiles of the participants of the conversation
    const fetchProfiles = async () => {
      if(!userProfile) {
        return;
      }
      const friend = await DataStore.query(UserProfile, c =>
        c.id.eq(userProfile.id === conversation.userProfileID ? conversation.friendProfileID : conversation.userProfileID)
      )
      const messages = await conversation.messages.toArray();
      const message = messages[messages.length - 1].senderID === userProfile.id ? "You" : friend[0].firstName;
      setLastMessage(message + ": " + messages[messages.length - 1].content);
      setFriendProfile(friend[0])

      // Fetch the profile images of the participants of the conversation
      const friendImage = await Storage.get(friend[0].profileImage as string)
      setFriendProfileImage(friendImage)
    }

    fetchProfiles()
  }, [])

  // Create a new message


  return (
    <div onClick={() => onClick(conversation)} className={`shadow-xl  flex justify-between max-w-[400px] min-w-[400px] ${className}`}>
      <div className='flex items-center justify-between w-full p-4'>
        <div className='flex items-center'>
          <img className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square" src={friendProfileImage} alt={friendProfile?.firstName} />
          <div className='flex flex-col'>
            <span className='text-lg font-bold'>{friendProfile?.firstName} {friendProfile?.lastName}</span>
            <span className='my-2 truncate'>{lastMessage}</span>
          </div>

        </div>
      </div>
    </div>
  )
}


export default MessagePage;
