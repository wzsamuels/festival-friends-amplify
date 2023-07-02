import {Conversation, Message} from "../../models";
import React, {useEffect, useState} from "react";
import { DataStore } from "@aws-amplify/datastore";
import useProfileStore from "../../stores/profileStore";
import useFriendStore from "../../stores/friendProfileStore";
import {getPhotoURL} from "../../services/photoServices";
import {UserCircleIcon} from "@heroicons/react/24/solid";

interface ConversationCardProps {conversation: Conversation;
  onClick: (arg: Conversation) => void;className?: string;
}
const ConversationCard = ({conversation, onClick, className}: ConversationCardProps) => {
  const [friendProfileImage, setFriendProfileImage] = useState<string>();
  const [lastMessage, setLastMessage] = useState<string>();
  const [unreadMessage, setUnreadMessage] = useState<boolean>(false);
  const userProfile = useProfileStore((state) => state.userProfile);
  const friendProfiles = useFriendStore(state => state.acceptedFriendProfiles)

  const friendProfile = friendProfiles.find(
    (profile) =>
      profile.id ===
      (userProfile?.id === conversation.profileID
        ? conversation.friendProfileID
        : conversation.profileID)
  );

  useEffect(() => {
    const fetchLastMessage = async () => {
      if (!userProfile || !friendProfile) {
        return;
      }

      const messages = await conversation.messages.toArray();
      console.log(messages);
      if (messages.length === 0) {
        return;
      }
      const lastMessage = messages[messages.length - 1];
      setUnreadMessage(
        lastMessage.unread === true &&
        lastMessage.senderProfileID !==  userProfile.id
      );
      const message =
        lastMessage.senderProfileID === userProfile.id
          ? "You"
          : friendProfile.firstName;
      setLastMessage(message + ": " + lastMessage.content);
    }

    try {
      getPhotoURL(friendProfile?.profilePhotoID).then(photoURL => setFriendProfileImage(photoURL))
      fetchLastMessage();
    } catch (e) {
      console.log("Error fetching friend profile image or last message", e);
    }
  }, [userProfile, friendProfile, conversation]);

  const handleOnClick = async () => {
    const messages = await conversation.messages.toArray();

    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      await DataStore.save(
        Message.copyOf(lastMessage, (updated) => {
          updated.unread = false;
        })
      );
    }
    setUnreadMessage(false);
    onClick(conversation);
  };

  return (
    <div
      onClick={handleOnClick}
      className={`shadow-xl w-full max-w-[600px] flex justify-between overflow-hidden ${className}`}
    >
      <div className="flex items-center w-full p-4">
        {
          friendProfileImage ?
            <img
              className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square"
              src={friendProfileImage}
              alt={friendProfile?.firstName ? friendProfile.firstName : ""}
            />
            :
            <div
              className={"flex mx-4 justify-center items-center rounded-full h-[75px] w-[75px]"}>
              <UserCircleIcon className="w-1/2 h-1/2 text-medium-default text-center" />
            </div>
        }
        <div className="flex flex-col flex-grow overflow-hidden">
          <div className="text-lg font-bold flex justify-between">
            <span>{friendProfile?.firstName} {friendProfile?.lastName}</span>
            {unreadMessage &&
              <span className="h-2 w-2 rounded-full bg-brandYellow"></span>
            }
          </div>
          <div className="my-2 truncate">{lastMessage}</div>
        </div>
      </div>
    </div>

  );
};

export default ConversationCard;
