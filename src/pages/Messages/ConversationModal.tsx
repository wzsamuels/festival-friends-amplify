import {ModalProps} from "../../@types/modal";
import {Conversation, Message, UserProfile} from "../../models";
import React, {FormEvent, useEffect, useRef, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonInput,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {close} from "ionicons/icons";

interface ConversationModalProps extends ModalProps {
  conversation: Conversation | undefined,
  userProfile: UserProfile | undefined,
  friendProfile: UserProfile | undefined,
  friendProfileImage: string | undefined,
}

const ConversationModal = ({conversation, isOpen, setIsOpen, userProfile, friendProfile} : ConversationModalProps) => {

  const [messages, setMessages] = useState<Message[]>([])
  const input = useRef<HTMLIonInputElement>(null);
  const [friendProfileImage, setFriendProfileImage] = useState<string | undefined>()

  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(input.current?.value && friendProfile && userProfile && conversation) {
      const message = await DataStore.save(new Message({
        content: input.current?.value as string,
        conversation: conversation,
        conversationID: conversation.id,
        senderID: userProfile.id,
        sender: userProfile,
        receiverID: friendProfile.id,
        receiver: friendProfile ,
      }))
      console.log(message)
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

  }, [conversation, friendProfile, userProfile])

  return (
    <IonModal isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='end'>
            <IonButton onClick={() => setIsOpen(false)}>
              <IonIcon icon={close}/>
            </IonButton>
          </IonButtons>
          <IonTitle>Conversation with {friendProfile?.firstName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='p-4'>
          {
            messages.map(message =>
              <div
                key={message.id}
                className={`flex my-4 w-full ${message.senderID !== userProfile?.id ? 'justify-start' : 'justify-end'}`}
              >
                {message.senderID !== userProfile?.id && <img className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square" src={friendProfileImage} alt={friendProfile?.firstName}  />}
                <div className={`p-4 rounded-xl ${message.senderID === userProfile?.id ? 'bg-primary-default text-light-default' : 'bg-secondary-default'} w-1/2`}>{message.content}</div>
              </div>
            )
          }
        </div>
        <div className='fixed bottom-0 w-full'>
          <form onSubmit={sendData}>
            <IonItem className='border-t border-t-primary-default'>
              <IonInput ref={input} type="text" label="Message" labelPlacement="floating" enterkeyhint='send' />
              <IonButton type='submit'>Send</IonButton>
            </IonItem>
          </form>
        </div>
      </IonContent>
    </IonModal>
  )
}

export default ConversationModal