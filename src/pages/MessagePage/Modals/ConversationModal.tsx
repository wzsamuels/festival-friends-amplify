import { ModalProps } from "../../../@types/modal";
import { Conversation, Message, Profile } from "../../../models";
import React, {useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import Modal from "../../../components/common/Modal/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import useProfileStore from "../../../stores/profileStore";
import useDataClearedStore from "../../../stores/dataClearedStore";
import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";
import {getPhotoURL} from "../../../services/photoServices";

interface ConversationModalProps extends ModalProps {
  conversation: Conversation | undefined;
}

interface MessageInput {
  message: string;
}
const ConversationModal = ({conversation, isOpen, setIsOpen,}: ConversationModalProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { register, handleSubmit, reset } = useForm<MessageInput>();
  const [friendProfileImage, setFriendProfileImage] = useState("");
  const [friendProfile, setFriendProfile] = useState<Profile | undefined>();
  const userProfile = useProfileStore(state => state.userProfile);
  const dataCleared = useDataClearedStore(state => state.dataCleared);

  console.log(messages)

  const handleSendMessage: SubmitHandler<MessageInput> = async (data) => {
    if (data.message && friendProfile && userProfile && conversation) {
      const message = await DataStore.save(
        new Message({
          content: data.message,
          conversationMessagesId: conversation.id,
          senderProfileID: userProfile.id,
          receiverProfileID: friendProfile.id,
        })
      );
      setMessages([...messages, message]);
      console.log(message);
      reset();
    }
  };

  useEffect(() => {
    if(!dataCleared) return;
    // Fetch the profiles of the participants of the conversation
    const fetchFriendProfile = async () => {
      if (!userProfile) {
        return;
      }
      const friendProfile = await DataStore.query(Profile,(userProfile.id === conversation?.profileID
            ? conversation.friendProfileID
            : conversation?.profileID) as string
      );
      // Fetch the profile images of the participants of the conversation
      getPhotoURL(friendProfile?.profilePhotoID)
        .then(photoURL => setFriendProfileImage(photoURL))
      setFriendProfile(friendProfile);
    };

    fetchFriendProfile();

    // Fetch the messages of the conversation
    conversation?.messages.toArray()
      .then(messages => setMessages(messages));

  }, [conversation, userProfile]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={<div>Conversation with {friendProfile?.firstName}</div>}
      className="max-w-2xl"
    >
      <div className="px-4 pt-4 pb-36 sm:pb-24">
        {messages.length > 0 ? messages.map((message) => (
          <div
            key={message.id}
            className={`flex my-4 w-full ${
              message.senderProfileID !== userProfile?.id
                ? "justify-start"
                : "justify-end"
            }`}
          >
            {message.senderProfileID !== userProfile?.id && (
              <img
                className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square"
                src={friendProfileImage}
                alt={friendProfile?.firstName ? friendProfile?.firstName : ""}
              />
            )}
            <div
              className={`p-4 rounded-xl ${
                message.senderProfileID === userProfile?.id
                  ? "bg-lightGreen text-black"
                  : "bg-lightYellow text-black"
              } w-1/2`}
            >
              {message.content}
            </div>
          </div>
        ))
          :
          <div className='h-[15rem] max-h-full'>&nbsp;</div>
        }
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4">
        <form
          className="pt-4 border-t border-t-primary-default flex flex-col sm:flex-row justify-between"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <Input
            className="w-full p-2 outline-0 flex-1"
            placeholder="Message"
            {...register("message")}
            type="text"
          />
          <div className='flex-1 justify-end flex mt-4'>
            <Button
              className="bg-primary-default text-light-default py-2 px-4 rounded-xl"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ConversationModal;
