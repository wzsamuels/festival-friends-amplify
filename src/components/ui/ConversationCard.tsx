import {Conversation, Message, UserProfile} from "../../models";
import React, {useEffect, useState} from "react";
import {useUserProfileStore} from "../../stores/friendProfilesStore";
import {DataStore, Storage} from "aws-amplify";

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
      console.log(messages)
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

export default ConversationCard;