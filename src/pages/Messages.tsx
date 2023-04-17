import {
  IonButton, IonButtons,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon,
  IonInput, IonItem, IonLabel,
  IonModal,
  IonPage, IonPopover,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, {ComponentProps, FormEvent, PropsWithoutRef, useEffect, useRef, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Conversation, Friends, Message, UserProfile} from "../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {addCircle, personCircle, search} from "ionicons/icons";
import AccountButton from "../components/AccountButton";
import {ZenObservable} from "zen-observable-ts";
import FriendCard from "../components/FriendCard";

const MessagePage: React.FC = () => {
  const { user, signOut } = useAuthenticator();
  const [conversations, setConversations] = useState<Conversation[]>()
  const [friendProfiles, setFriendProfiles] = useState<UserProfile[]>([])
  const newConversationModal = useRef<HTMLIonModalElement>(null);
  const [isNewConversationOpen, setIsNewConversationOpen] = useState(false);
  const [isConversationOpen, setIsConversationOpen ] = useState(false);
  const input = useRef<HTMLIonInputElement>(null);
  const username = user?.username as string;

  useEffect(() => {
    const fetchConversations = async () => {
      console.log(user.username)
      const conversations = await DataStore.query(Conversation, c => c.participants.contains(username))
      console.log(conversations)
      setConversations(conversations)
    }

    // TODO: Refactor this code common with Friends page
    const fetchFriends = async () => {
      const friends = await DataStore.query(Friends, c => c.or(c => [
        c.userID.eq(username),
        c.friendID.eq(username)
      ]))
      const friendIDs = friends.reduce((result: string[], friend) => {
        if(friend.status === 'accepted') {
          result.push(friend.friendID === username ? friend.userID : friend.friendID);
        }
        return result;
      }, [])
      const friendPromises = friendIDs.map(async friendID => {
        const result = await DataStore.query(UserProfile, c => c.userID.eq(friendID))
        return result[0];
      })
      const promiseResult = await Promise.all(friendPromises);
      setFriendProfiles(promiseResult)
    }


    if(user) {
      fetchFriends();
      fetchConversations();
    }
  }, [user])

  const handleNewConversation = async ({friendID} : {friendID: string}) => {
    setIsNewConversationOpen(false);
    const result = await DataStore.save(new Conversation({participants: [username, friendID], Messages: []}))
    console.log(result)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
          <IonButtons slot='end'>
            <IonButton>
              <IonIcon size='large' icon={search}/>
            </IonButton>
            <AccountButton id={'message'}/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='p-4 h-full'>
        {
          user ?
            <>
              {/* Conversations */}
              <section className='h-full my-4'>
                {
                  conversations?.length ? conversations.map(conversation =>
                    <ConversationCard key={conversation.id} conversation={conversation} username={username}/>)
                    :
                    <h1 className='text-2xl'>No conversations found.</h1>
                }
                <IonButton onClick={() => setIsNewConversationOpen(true)} className='my-6' >
                  <span className='mx-4'>New Conversation</span>
                  <IonIcon  icon={addCircle}></IonIcon>
                </IonButton>
              </section>

              {/* New conversation modal */}
              <IonModal isOpen={isNewConversationOpen} onDidDismiss={() => setIsNewConversationOpen(false)}  >
                <IonHeader>
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonButton onClick={() => newConversationModal.current?.dismiss()}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle className='ion-text-center'>New Conversation</IonTitle>
                    <IonButtons slot="end">
                      <IonButton strong={true} onClick={() => confirm()}>
                        Confirm
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                  {
                    friendProfiles.map(profile =>
                      <FriendCard key={profile.id} profile={profile} onClick={() => handleNewConversation({friendID: profile.userID})} link={false}/>
                    )}
                  <IonItem>
                    <IonInput label="Fi" ref={input} type="text" placeholder="Your name" />
                  </IonItem>
                </IonContent>
              </IonModal>
            </>
          :
            <div>
              <h1 className='text-xl md:text-2xl my-4'>
                Festival Friends Account Required.
              </h1>
              <IonButton routerLink='/account'>Sign In</IonButton>
            </div>
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

interface ConversationCardProps extends ComponentProps<'div'> {
  conversation: Conversation,
  username: string
}


// TODO: Pass profiles instead of fetching again
const ConversationCard = ({conversation, username, onClick} : ConversationCardProps) => {
  const [profiles, setProfiles] = useState<UserProfile[]>()
  const [profileImages, setProfileImages] = useState<ProfileImage[]>()
  const [messages, setMessages] = useState<Message[]>([])
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  useEffect(() => {

      // Fetch the profiles of the participants of the conversation
      const fetchProfiles = async () => {
      const profilePromises = conversation.participants?.map(async userID=> {
        const result = await DataStore.query(UserProfile, c => c.userID.eq(userID))
        return result[0]
      })
      if(profilePromises) {
        const profileData = await Promise.all(profilePromises);
        const profilesFiltered = profileData.filter(profile => profile.userID !== username);
        setProfiles(profilesFiltered)
        // Fetch the profile images of the participants of the conversation
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

    // Fetch the messages of the conversation
    const profileSub = DataStore.observeQuery(Message, c => c.conversationID.eq(conversation.id))
      .subscribe(( {items}) => {
        console.log(items)
        setMessages(items)
      })

    return () => {
      profileSub.unsubscribe();
    };

  }, [])

  // Create a new message
  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(input.current?.value && profiles) {
      const message = await DataStore.save(new Message({
        text: input.current?.value as string,
        conversationID: conversation.id,
        senderID: username as string,
      }))
      console.log(message)
    }
  }

  return (
    <div onClick={onClick} className='shadow-xl p-4 flex justify-between my-4'>
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

      {/* Conversation Modal */}
      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Conversation with {profiles?.map(profile => profile.firstName)}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {
            messages.map(message =>
              <div
                key={message.id}
                className={`flex my-4 w-full ${message.senderID !== username ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`p-4 ${message.senderID === username ? 'bg-secondary-default' : 'bg-secondary-shade'} w-1/2`}>{message.text}</div>
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
