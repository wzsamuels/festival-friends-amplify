import React, {useContext, useEffect, useRef, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Conversation, Friendship, Message, UserProfile} from "../../../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import FriendCard from "../../ui/FriendCard";
import ConversationModal from "./ConversationModal";
import {BsPlus, FaSearch} from "react-icons/all";
import {Link} from "react-router-dom";
import Modal from "../../common/Modal";
import Header from "../../layout/Header";
import ConservationSearchModal from "./ConservationSearchModal";
import Button from "../../common/Button";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";

const MessagePage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation>();
  const [isNewConversationModalOpen, setNewConversationModalOpen] = useState(false);
  const [isConversationSearchModalOpen, setConversationSearchModalOpen] = useState(false);
  const [isConversationModalOpen, setConversationModalOpen] = useState(false);
  const { user } = useAuthenticator(context => [context.user]);
  const { route } = useAuthenticator(context => [context.route]);
  const userProfile = useUserProfileStore(state => state.userProfile);
  const friendProfiles = useUserProfileStore(state => state.friendProfiles);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(friendProfiles)
  console.log(userProfile)
  console.log(route)

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

  return (
    <>
      <Header>
        <div className='w-full flex justify-end'>
          <button onClick={() => setConversationSearchModalOpen(true)}><FaSearch/></button>
        </div>
      </Header>
      <div className='p-4 min-h-full h-full relative mt-header'>
        {
          route === 'authenticated' && userProfile?.verified ?
            <>
              {/* Conversations */}
              <section className='my-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-items-center'>
                  { conversations.length > 0 ? conversations.map((conversation) => (
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
            </>
          :
            <div>
              <h1 className='text-xl md:text-2xl my-4'>
                Verified Festival Friends Account Required.
              </h1>
              <Link to='/account'>
                <Button>Sign In</Button>
              </Link>
            </div>
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




interface ConversationCardProps {
  conversation: Conversation,
  userProfile: UserProfile | undefined,
  isConversationModalOpen: boolean,
  setConversationModalOpen: (arg: boolean) => void
  onClick: (arg: Conversation) => void
  className: string
}
const ConversationCard = ({ conversation, onClick, className }: ConversationCardProps) => {
  const [friendProfileImage, setFriendProfileImage] = useState<string>();
  const [lastMessage, setLastMessage] = useState<string>();
  const [unreadMessage, setUnreadMessage] = useState<boolean>(false);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const friendProfiles = useUserProfileStore((state) => state.friendProfiles);

  const friendProfile = friendProfiles.find((profile) =>
    profile.id === (userProfile?.id === conversation.userProfileID ? conversation.friendProfileID : conversation.userProfileID)
  );

  useEffect(() => {
    const fetchProfileImageAndLastMessage = async () => {
      if (!userProfile || !friendProfile) {
        return;
      }
      const friendImage = await Storage.get(friendProfile.profileImage as string);
      setFriendProfileImage(friendImage);

      const messages = await conversation.messages.toArray();
      const lastMessage = messages[messages.length - 1];
      setUnreadMessage(lastMessage.unreadMessage === true && lastMessage.senderID !== userProfile.id)
      const message = lastMessage.senderID === userProfile.id ? 'You' : friendProfile.firstName;
      setLastMessage(message + ': ' + lastMessage.content);
    };


    fetchProfileImageAndLastMessage();
  }, [userProfile, friendProfiles, conversation]);

  const handleOnClick = async () => {
    const messages = await conversation.messages.toArray();
    const lastMessage = messages[messages.length - 1];
    await DataStore.save(Message.copyOf(lastMessage, updated => {updated.unreadMessage = false}));
    setUnreadMessage(false);
    onClick(conversation);
  }

  return (
    <div onClick={handleOnClick} className={`shadow-xl w-full max-w-[600px] flex justify-between  ${className}`}>
      <div className='flex items-center justify-between w-full p-4'>
        <div className='flex items-center'>
          <img className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square" src={friendProfileImage} alt={friendProfile?.firstName} />
          <div className='flex flex-col'>
            <span className='text-lg font-bold'>{friendProfile?.firstName} {friendProfile?.lastName}</span>
            <span className='my-2 truncate'>{lastMessage}</span>
          </div>
        </div>
        <div>
          {unreadMessage ? <span className='text-primary-default text-sm'>New</span> : <span className='text-primary-default text-sm'>No New</span> }
        </div>
      </div>
    </div>
  );
};


export default MessagePage;
