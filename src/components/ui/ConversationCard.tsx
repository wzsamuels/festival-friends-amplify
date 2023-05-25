import {Conversation, Message, Photo} from "../../models";
import React, {useContext, useEffect, useState} from "react";
import { DataStore } from "aws-amplify";
import ImageContext from "../../context/ImageContext";
import {getProfilePhoto} from "../../services/ProfileServices";
import useProfileStore from "../../stores/profileStore";
import useFriendStore from "../../stores/friendProfileStore";

interface ConversationCardProps {
  conversation: Conversation;
  onClick: (arg: Conversation) => void;
  className?: string;
}
const ConversationCard = ({
  conversation,
  onClick,
  className,
}: ConversationCardProps) => {
  const [friendProfileImage, setFriendProfileImage] = useState<string>();
  const [lastMessage, setLastMessage] = useState<string>();
  const [unreadMessage, setUnreadMessage] = useState<boolean>(false);
  const userProfile = useProfileStore((state) => state.userProfile);
  const friendProfiles = useFriendStore(state => state.acceptedFriendProfiles)
  const { getSignedURL } = useContext(ImageContext);

  const friendProfile = friendProfiles.find(
    (profile) =>
      profile.id ===
      (userProfile?.id === conversation.userProfileID
        ? conversation.friendProfileID
        : conversation.userProfileID)
  );

  useEffect(() => {
    const fetchFriendProfileImage = async () => {
      getProfilePhoto(friendProfile, getSignedURL).then(image => setFriendProfileImage(image))
    };

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
        lastMessage.unreadMessage === true &&
        lastMessage.senderID !== userProfile.id
      );
      const message =
        lastMessage.senderID === userProfile.id
          ? "You"
          : friendProfile.firstName;
      setLastMessage(message + ": " + lastMessage.content);
    }

    try {
      fetchFriendProfileImage();
      fetchLastMessage();
    } catch (e) {
      console.log("Error fetching friend profile image or last message", e);
    }
  }, [userProfile, friendProfiles, conversation]);

  const handleOnClick = async () => {
    const messages = await conversation.messages.toArray();

    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      await DataStore.save(
        Message.copyOf(lastMessage, (updated) => {
          updated.unreadMessage = false;
        })
      );
    }
    setUnreadMessage(false);
    onClick(conversation);
  };

  return (
    <div
      onClick={handleOnClick}
      className={`shadow-xl w-full max-w-[600px] flex justify-between  ${className}`}
    >
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex items-center">
          <img
            className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square"
            src={friendProfileImage}
            alt={friendProfile?.firstName ? friendProfile.firstName : ""}
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold">
              {friendProfile?.firstName} {friendProfile?.lastName}
            </span>
            <span className="my-2 truncate">{lastMessage}</span>
          </div>
        </div>
        <div>
          {unreadMessage ? (
            <span className="text-primary-default text-sm">New</span>
          ) : (
            <span className="text-primary-default text-sm">No New</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
