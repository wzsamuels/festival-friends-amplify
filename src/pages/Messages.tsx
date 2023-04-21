import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, {ComponentProps, FormEvent, useEffect, useRef, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Conversation, Friendship, Message, UserProfile} from "../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {addCircle, search} from "ionicons/icons";
import AccountButton from "../components/AccountButton";
import FriendCard from "../components/FriendCard";

const MessagePage: React.FC = () => {
  const { user } = useAuthenticator();
  const [friendProfiles, setFriendProfiles] = useState<UserProfile[]>([])
  const searchConversationModal = useRef<HTMLIonModalElement>(null);
  const [isNewConversationOpen, setIsNewConversationOpen] = useState(false);
  const username = user?.username as string;
  const [userProfile, setUserProfile] = useState<UserProfile>()

  const handleNewConversation = async ({friendProfile} : {friendProfile: UserProfile}) => {
    setIsNewConversationOpen(false);
    if (userProfile) {
      const result = await DataStore.save(new Conversation({
        userProfileID: userProfile?.id,
        friendProfileID: friendProfile.id,
        messages: [],
        userProfile: userProfile,
        friendProfile: friendProfile
      }))
      console.log(result)
    }
  }

  useEffect(() => {
    const fetchFriends = async () => {
      const profile = await DataStore.query(UserProfile, c => c.userID.eq(username))

      // User has to have a verified profile to send messages
      if(profile.length === 0 || profile[0].verified === false) {
        return
      }
      setUserProfile(profile[0])
      const friends = await DataStore.query(Friendship, f => f.or(f => [
        f.friendProfileID.eq(profile[0].id),
        f.userProfileID.eq(profile[0].id)
      ]))
      const friendProfiles = friends.filter(friend => friend.isAccepted).map(friend =>
        friend.friendProfileID === profile[0].id ? friend.userProfile : friend.friendProfile)

      const result = await Promise.all(friendProfiles.map(async friendProfile => await friendProfile))
      setFriendProfiles(result)

    }
    if(user) {
      fetchFriends()
    }
  }, [user])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
          <IonButtons slot='end'>
            <IonButton id='search-modal'>
              <IonIcon icon={search} />
            </IonButton>
            <AccountButton id={'message'}/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='p-4 h-full'>
        {
          user && userProfile?.verified ?
            <>
              {/* Conversations */}
              <section className='h-full my-4'>
                <ConversationList userProfile={userProfile} />
                <IonButton onClick={() => setIsNewConversationOpen(true)} className='my-6' >
                  <span className='mx-4'>New Conversation</span>
                  <IonIcon  icon={addCircle}></IonIcon>
                </IonButton>
              </section>

              {/* New conversation modal */}
              <IonModal isOpen={isNewConversationOpen} onDidDismiss={() => setIsNewConversationOpen(false)}  >
                <IonHeader>
                  <IonToolbar>
                    <IonTitle className='ion-text-center'>New Conversation</IonTitle>
                    <IonButtons slot="end">
                      <IonButton onClick={() => setIsNewConversationOpen(false)}>Cancel</IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
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
        <IonModal ref={searchConversationModal} trigger='search-modal'>
            <IonHeader>
              <IonToolbar>
                <IonTitle className='ion-text-center'>Search Conversations</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => searchConversationModal.current?.dismiss()}>Cancel</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
          <IonContent className='ion-padding'>
            <div>Not yet implemented.</div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

const ConversationList = ({userProfile}: {userProfile: UserProfile}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        if (userProfile) {
          const fetchedConversations = await DataStore.query(Conversation, c => c.or(c => [
              c.userProfileID.eq(userProfile.id),
              c.friendProfileID.eq(userProfile.id)
            ]
          ));
          setConversations(fetchedConversations);
        }
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();

    const subscription = DataStore.observe(Conversation).subscribe(() => fetchConversations());
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <ul>
        { conversations.length > 0 ? conversations.map((conversation) => (
          <li key={conversation.id}>
            {conversation.userProfileID} - {conversation.friendProfileID}
            <ConversationCard conversation={conversation} userProfile={userProfile}/>
          </li>
        ))
        :
          <div>
            No Conversations found!
          </div>
        }
      </ul>
    </div>
  );
};

interface ConversationCardProps extends ComponentProps<'div'> {
  conversation: Conversation,
  userProfile: UserProfile | undefined,
}
const ConversationCard = ({conversation, userProfile, onClick} : ConversationCardProps) => {
  const [friendProfile, setFriendProfile] = useState<UserProfile>();
  const [friendProfileImage, setFriendProfileImage] = useState<string>();
  const [userProfileImage, setUserProfileImage] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([])
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  useEffect(() => {
      // Fetch the profiles of the participants of the conversation
    const fetchProfiles = async () => {
      if(!userProfile) {
        return;
      }
      const friend = await DataStore.query(UserProfile, c =>
        c.id.eq(userProfile.id === conversation.userProfileID ? conversation.friendProfileID : conversation.userProfileID)
      )

      setFriendProfile(friend[0])

      // Fetch the profile images of the participants of the conversation
      const userImage = await Storage.get(userProfile.profileImage as string)
      const friendImage = await Storage.get(friend[0].profileImage as string)
      setFriendProfileImage(friendImage)
      setUserProfileImage(userImage)
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
    if(input.current?.value && friendProfile && userProfile) {
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

  return (
    <div onClick={onClick} className='shadow-xl p-4 flex justify-between my-4'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <img className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square" src={friendProfileImage} alt={friendProfile?.firstName} />
          <span >{friendProfile?.firstName}</span>
        </div>
        <IonButton id={`open-modal-${conversation.id}`} expand="block">
          Open
        </IonButton>
      </div>

      {/* Conversation Modal */}
      <IonModal ref={modal} trigger={`open-modal-${conversation.id}`}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Conversation with {friendProfile?.firstName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
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
