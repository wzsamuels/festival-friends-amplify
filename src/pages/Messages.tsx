import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput, IonItem,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, {FormEvent, useEffect, useRef, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Conversation, Message, UserProfile} from "../models";
import {useAuthenticator} from "@aws-amplify/ui-react";

const MessagePage: React.FC = () => {
  const { user } = useAuthenticator();
  const [conversations, setConversations] = useState<Conversation[]>()

  useEffect(() => {
    const fetchConversations = async () => {
      const conversations = await DataStore.query(Conversation, c => c.userIDs.contains(user.username))
      console.log(conversations)
      setConversations(conversations)
    }

    if(user) {
      fetchConversations()
    }

  }, [user])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages {user?.username}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='p-4 h-full'>
        {
          user ?
            <>
              <h1>Start Conversation</h1>
              <section className='h-full'>
                <h2>Conversations</h2>
                {
                  conversations?.map(conversation =>
                    <ConversationCard key={conversation.id} conversation={conversation} username={user.username}/>)
                }
              </section>
            </>
          :
          <div>Not Logged in</div>
        }
        </div>
      </IonContent>
    </IonPage>
  );
};

type ProfileImage = {
  src: string,
  user: string
}

const ConversationCard = ({conversation, username} : {conversation: Conversation, username: string | undefined}) => {
  const [profiles, setProfiles] = useState<UserProfile[]>()
  const [profileImages, setProfileImages] = useState<ProfileImage[]>()
  const [messages, setMessages] = useState<Message[]>([])
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const profilePromises = conversation.userIDs?.map(async userID=> {
        const result = await DataStore.query(UserProfile, c => c.userID.eq(userID))
        return result[0]
      })
      if(profilePromises) {
        const profileData = await Promise.all(profilePromises);
        const profilesFiltered = profileData.filter(profile => profile.userID !== username);
        setProfiles(profilesFiltered)
        const imagePromises =  profilesFiltered
          .map(async profile => {
            const result = await Storage.get(profile.profileImage as string)
            return {user: profile.userID, src: result}
          })
        if(imagePromises) {
          const imageData = await Promise.all(imagePromises)
          setProfileImages(imageData)
        }
      }
    }



    fetchProfiles()

    const profileSub = DataStore.observeQuery(Message, c => c.conversationID.eq(conversation.id))
      .subscribe(( {items}) => {
        console.log(items)
        setMessages(items)
      })

    return () => {
      profileSub.unsubscribe();
    };

  }, [])

  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(input.current?.value && profiles) {
      const message = await DataStore.save(new Message({
        messageText: input.current?.value as string,
        conversationID: conversation.id,
        fromUser: username as string,
        toUser: profiles[0].userID
      }))
      console.log(message)
    }
  }

  return (
    <div className='shadow-xl p-4 flex justify-between my-4'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
        {
          profileImages?.map(profileImage =>
            <img className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square" src={profileImage.src} key={profileImage.user} alt={profileImage.user}/>
          )
        }
        {
          profiles?.map(profile =>
            <span key={profile.userID}>{profile.firstName}</span>)
        }
        </div>
        <IonButton id="open-modal" expand="block">
          Open
        </IonButton>
      </div>

      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Conversation with {profiles?.map(profile => profile.firstName)}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {
            messages.map(message =>
              <div key={message.id} className={`flex my-4 w-full ${message.fromUser !== username ? 'justify-start' : 'justify-end'}`}>
                <div className={`p-4 ${message.fromUser === username ? 'bg-secondary-default' : 'bg-secondary-shade'} w-1/2`}>{message.messageText}</div>
              </div>
            )
          }
          <div className='fixed bottom-0 w-full'>
            <form onSubmit={sendData}>
              <IonItem>
                <IonInput ref={input} type="text" label="Message" labelPlacement="stacked" enterkeyhint='send' />
                <IonButton type='submit'>Send</IonButton>
              </IonItem>
            </form>
          </div>
        </IonContent>
      </IonModal>
    </div>
  )
}

export default MessagePage;
