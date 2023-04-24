import {
  IonBackButton,
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
import React, { useEffect, useRef, useState} from "react";
import {DataStore, Storage} from "aws-amplify";
import {Conversation, Friendship, UserProfile} from "../../models";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {addCircle, search} from "ionicons/icons";
import AccountButton from "../../components/Profile/AccountButton";
import FriendCard from "../../components/FriendCard";
import ConversationModal from "./ConversationModal";

const MessagePage: React.FC = () => {
  const { user } = useAuthenticator();
  const [userProfile, setUserProfile] = useState<UserProfile>()
  const [friendProfiles, setFriendProfiles] = useState<UserProfile[]>([])
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation>();
  const searchConversationModal = useRef<HTMLIonModalElement>(null);
  const [isNewConversationModalOpen, setNewConversationModalOpen] = useState(false);
  const [isConversationModalOpen, setConversationModalOpen] = useState(false);
  const username = user?.username as string;

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

  const openConversationModal = (conversation: Conversation) => {
    setCurrentConversation(conversation);
    setConversationModalOpen(true);
  };

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
                <ul>
                  { conversations.length > 0 ? conversations.map((conversation) => (
                      <li key={conversation.id}>
                        <ConversationCard
                          isConversationModalOpen={isConversationModalOpen}
                          setConversationModalOpen={setConversationModalOpen} conversation={conversation} userProfile={userProfile}
                          onClick={() => openConversationModal(conversation)}/>
                      </li>
                    ))
                    :
                    <div>
                      No Conversations found!
                    </div>
                  }
                </ul>
                <IonButton onClick={() => setNewConversationModalOpen(true)} className='my-6' >
                  <span className='mx-4'>New Conversation</span>
                  <IonIcon icon={addCircle}></IonIcon>
                </IonButton>
              </section>
            </>
          :
            <div>
              <h1 className='text-xl md:text-2xl my-4'>
                Verified Festival Friends Account Required.
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
      <ConversationModal
        conversation={currentConversation}
        userProfile={userProfile}
        isOpen={isConversationModalOpen}
        setIsOpen={setConversationModalOpen} />

      <IonModal isOpen={isNewConversationModalOpen} onDidDismiss={() => setNewConversationModalOpen(false)}  >
        <IonHeader>
          <IonToolbar>
            <IonTitle className='ion-text-center'>New Conversation</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setNewConversationModalOpen(false)}>Cancel</IonButton>
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
    </IonPage>
  );
};

interface ConversationCardProps {
  conversation: Conversation,
  userProfile: UserProfile | undefined,
  isConversationModalOpen: boolean,
  setConversationModalOpen: (arg: boolean) => void
  onClick: (arg: Conversation) => void
}
const ConversationCard = ({conversation, userProfile, onClick, isConversationModalOpen, setConversationModalOpen} : ConversationCardProps) => {
  const [friendProfile, setFriendProfile] = useState<UserProfile>();
  const [friendProfileImage, setFriendProfileImage] = useState<string>();
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
      const friendImage = await Storage.get(friend[0].profileImage as string)
      setFriendProfileImage(friendImage)
    }

    fetchProfiles()
  }, [])

  // Create a new message


  return (
    <IonItem lines='none' button onClick={() => onClick(conversation)} className='shadow-xl  flex justify-between w-full max-w-[400px] my-4'>
      <div className='flex items-center justify-between w-full p-4'>
        <div className='flex items-center'>
          <img className="rounded-full mx-4 max-w-[75px] w-full max-h-[75px] aspect-square" src={friendProfileImage} alt={friendProfile?.firstName} />
          <span>{friendProfile?.firstName}</span>
        </div>
      </div>
    </IonItem>
  )
}


export default MessagePage;
