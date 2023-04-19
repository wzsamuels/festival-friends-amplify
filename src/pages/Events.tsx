import {
  IonAlert,
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonIcon, IonModal,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import {checkmarkCircleOutline, search} from "ionicons/icons";
import { useAuthenticator } from '@aws-amplify/ui-react';
import {DataStore} from 'aws-amplify';
import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import { Storage } from "@aws-amplify/storage"
import {EventProfile, Festival, LazyFestival, UserProfile} from '../models';
import AccountButton from "../components/AccountButton";
import DataStoreContext, {DataStoreContextType} from "../context/DataStoreContext";

const EventPage: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [festivalData, setFestivalData] = useState<LazyFestival[]>([]);
  const [profile, setProfile] = useState<UserProfile>();
  const username = user?.username as string;

  const festivalModal = useRef<HTMLIonModalElement>(null);
  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;

  useLayoutEffect (() => {
    if(dataStoreCleared) {
      const festivalSub = DataStore.observeQuery(Festival)
        .subscribe(({items}) => {
          console.log(items)
          setFestivalData(items)
        })

      return () => {
        festivalSub.unsubscribe();
      };
    }
  }, [dataStoreCleared]);

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await DataStore.query(UserProfile, c => c.userID.eq(username));
      setProfile(profile[0]);
    }
    if(user) {
      fetchProfile();
    } else {
      setProfile(undefined);
    }
  }, [user])

  const handleSearch = async () => {
    const searchQuery = await DataStore.query(Festival, (festival) => festival.name.contains('test'))
    setFestivalData(searchQuery)
  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Festivals & Events</IonTitle>
          <IonButtons slot='end'>
            <IonButton id='search-festivals'>
              <IonIcon size='large' icon={search}/>
            </IonButton>
            <AccountButton id='events'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center p-4'>
          { festivalData?.map(festival =>
            <FestivalCard festival={festival} userProfile={profile} key={festival.id}/>
          )}
        </div>
      </IonContent>

      <IonModal ref={festivalModal} trigger='search-festivals'>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => festivalModal.current?.dismiss()}>Cancel</IonButton>
            </IonButtons>
            <IonTitle className='ion-justify-content-center'>Festival Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className='p-4'>
            Not yet implemented!
          </div>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

interface FestivalCardProps {
  festival: LazyFestival;
  userProfile: UserProfile | undefined;
}

const FestivalCard = ({festival, userProfile}: FestivalCardProps) => {
  const [festivalImage, setFestivalImage] = useState("")
  const [attendingEvent, setAttendingEvent] = useState(false)
  const [eventProfile, setEventProfile] = useState<EventProfile>();
  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  useEffect(() => {
    const fetchFestivalImage = async () => {
      const imageSrc = await Storage.get(festival.image, {level: 'public'})
      setFestivalImage(imageSrc);
    }

    fetchFestivalImage()
  }, [userProfile])

  useEffect(() => {
    if(dataStoreCleared) {
      const eventProfileSub = DataStore.observeQuery(EventProfile, c => c.eventID.eq(festival.id))
        .subscribe(({items}) => {
          console.log("EP", items)
          if(userProfile && items.length > 0) {
            const ep = items.filter(item => item.userProfileID === userProfile.id)
            if(ep.length > 0) {
              setAttendingEvent(true)
              setEventProfile(ep[0])
            }
          } else {
            setAttendingEvent(false)
            setEventProfile(undefined)
          }
        })

      return () => {
        eventProfileSub.unsubscribe();
      }
    }
  }, [dataStoreCleared, userProfile])

  const handleAttendFestival = async () => {
    if (userProfile) {
      if (attendingEvent && eventProfile) {
        // If the user is already attending, remove them from the attendees list
        await DataStore.delete(eventProfile);
        setAttendingEvent(false)
        console.log('User removed from the festival attendees list');
      } else {
        // If the user is not attending, add them to the attendees list
        await DataStore.save(
          new EventProfile({
            userProfileID: userProfile.id,
            eventID: festival.id,
            userProfile: userProfile,
            event: festival,
          })
        );
        console.log('User added to the festival attendees list');
      }
    } else {
      setAlertIsOpen(true);
    }
  }

  return (
    <div className='m-4 rounded-xl shadow-md w-full  max-w-[350px] bg-light-default'>
      <div className='relative'>
        <div className='w-full max-w-[350px] min-h-[350px] h-full max-h-[350px] object-cover flex items-center justify-center'>
          {
            festivalImage ? 
              <img className='w-full h-full' src={festivalImage} alt={festival.name}/>
            :
              <IonSpinner></IonSpinner>
          }
        </div>
        <div className=' bottom-4 left-4 rounded-xl z-10 w-full p-4 font-bold '>
          <div className='bold'>{festival.name} - {festival.location}</div>
          <div></div>
          <div>{festival.startDate}</div>
        </div>
      </div>
      <div>
        <h2 className='text-base md:text-lg m-2'>Plan on Attending? Let your friends know!</h2>
        {
          attendingEvent  ?
            <IonButton onClick={handleAttendFestival}>I&apos;ll be there! <IonIcon icon={checkmarkCircleOutline}/></IonButton>
            :
            <IonButton   onClick={handleAttendFestival} fill='outline'>I&apos;ll be there!</IonButton>
        }
      </div>
      <IonAlert
        isOpen={alertIsOpen}
        header="Not logged in!"
        message="Please log in to use this feature"
        buttons={['OK']}
        onDidDismiss={() => setAlertIsOpen(false)}
      ></IonAlert>
    </div>
  )
}

export default EventPage;
