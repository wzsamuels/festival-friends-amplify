import {ModalProps} from "../../../@types/modal";
import {Conversation, Message, UserProfile} from "../../../models";
import React, {FormEvent, useEffect, useRef, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Dialog} from "@headlessui/react";
import Modal from "../../common/Modal/Modal";
import {SubmitHandler, useForm} from "react-hook-form";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";

interface ConversationModalProps extends ModalProps {
  conversation: Conversation | undefined
}


interface MessageInput {
  message: string
}
const ConversationModal = ({conversation, isOpen, setIsOpen} : ConversationModalProps) => {

  const [messages, setMessages] = useState<Message[]>([])
  const {register, handleSubmit, reset} = useForm<MessageInput>();
  const [friendProfileImage, setFriendProfileImage] = useState<string | undefined>()
  const [friendProfile, setFriendProfile] = useState<UserProfile | undefined>()
  const userProfile = useUserProfileStore(state => state.userProfile)


  const handleSendMessage: SubmitHandler<MessageInput> = async (data) => {
    if(data.message && friendProfile && userProfile && conversation) {
      const message = await DataStore.save(new Message({
        content: data.message,
        conversation: conversation,
        conversationID: conversation.id,
        senderID: userProfile.id,
        sender: userProfile,
        receiverID: friendProfile.id,
        receiver: friendProfile,
        unreadMessage: true,
      }))
      console.log(message)
      reset()
    }
  }

  useEffect(() => {
    // Fetch the profiles of the participants of the conversation
    const fetchProfiles = async () => {
      if(!userProfile) {
        return;
      }
      const friend = await DataStore.query(UserProfile, c =>
        c.id.eq((userProfile.id === conversation?.userProfileID ? conversation.friendProfileID : conversation?.userProfileID) as string)
      )
      // Fetch the profile images of the participants of the conversation
      const friendImage = await Storage.get(friend[0].profileImage as string)
      setFriendProfileImage(friendImage)
      setFriendProfile(friend[0])
    }

    fetchProfiles()

    // Fetch the messages of the conversation
    const profileSub = DataStore.observeQuery(Message, c => c.conversationID.eq(conversation?.id as string))
      .subscribe(( {items}) => {
        console.log(items)
        setMessages(items)
      })

    return () => {
      profileSub.unsubscribe();
    };

  }, [conversation, userProfile])

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={
        <div>Conversation with {friendProfile?.firstName}</div>
      }
    >
      <div className='px-4 pt-4 pb-16'>
        {
          messages.map(message =>
            <div
              key={message.id}
              className={`flex my-4 w-full ${message.senderID !== userProfile?.id ? 'justify-start' : 'justify-end'}`}
            >
              {message.senderID !== userProfile?.id && <img className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square" src={friendProfileImage} alt={friendProfile?.firstName}  />}
              <div className={`p-4 rounded-xl ${message.senderID === userProfile?.id ? 'bg-green-950 text-white' : 'bg-teal-600'} w-1/2`}>{message.content}</div>
            </div>
          )
        }
      </div>
      <div className='fixed bottom-0 left-0 w-full p-4'>
        <form className='pt-4 border-t border-t-primary-default flex justify-between' onSubmit={handleSubmit(handleSendMessage)}>
          <input className='w-full p-2 outline-0' placeholder="Message" {...register('message')} type="text"/>
          <button className='bg-primary-default text-light-default py-2 px-4 rounded-xl' type='submit'>Send</button>
      </form>
      </div>
    </Modal>
  )
}

export default ConversationModal