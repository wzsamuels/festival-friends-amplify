import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonPage, IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  IonTitle,
  IonToolbar, SegmentChangeEventDetail
} from '@ionic/react';

import {checkmarkCircleOutline, search} from "ionicons/icons";
import {useAuthenticator} from '@aws-amplify/ui-react';
import {DataStore} from 'aws-amplify';
import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Storage} from "@aws-amplify/storage"
import {EventProfile, EventType, Festival, LazyFestival, UserProfile} from '../models';
import AccountButton from "../components/AccountButton";
import DataStoreContext, {DataStoreContextType} from "../context/DataStoreContext";
import styled from "styled-components";

const IonSearchbarStyled = styled(IonSearchbar)`
  --box-shadow: none;
  max-width: 500px;
`


const EventPage: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [events, setEvents] = useState<LazyFestival[]>([]);
  const [profile, setProfile] = useState<UserProfile>();
  const username = user?.username as string;
  const sportEvents = events.filter(event => event.type === EventType.SPORT);
  const musicEvent = events.filter(event => event.type === EventType.MUSIC);
  const collegeEvent = events.filter(event => event.type === EventType.COLLEGE);
  const businessEvent = events.filter(event => event.type === EventType.BUSINESS);
  const [eventType, setEventType] = useState('all')

  const festivalModal = useRef<HTMLIonModalElement>(null);
  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;

  useLayoutEffect (() => {
    if(dataStoreCleared) {
      const eventSub = DataStore.observeQuery(Festival)
        .subscribe(({items}) => {
          console.log(items)
          setEvents(items)
        })

      return () => {
        eventSub.unsubscribe();
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
    setEvents(searchQuery)
  }

  console.log(eventType)
  const handleSegmentChange = (e: CustomEvent<SegmentChangeEventDetail>) => {
    console.log(e.detail.value)
    if(e.detail.value) {
      setEventType(e.detail.value)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment value={eventType} scrollable onIonChange={handleSegmentChange}>
            <IonSegmentButton value='all'>
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='music'>
              <IonLabel>Music</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='sport'>
              <IonLabel>Sports</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='business'>
              <IonLabel>Business</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='college'>
              <IonLabel>College</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonButtons slot='end'>
            <IonButton id='search-festivals'>
              <IonIcon icon={search}/>
            </IonButton>
            <AccountButton id='events'/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center p-4'>
          { (eventType === 'music' || eventType === 'all')
            && musicEvent?.map(event =>
            <FestivalCard festival={event} userProfile={profile} key={event.id}/>
          )}
          { (eventType === 'sport' || eventType === 'all')
            && sportEvents?.map(event =>
              <FestivalCard festival={event} userProfile={profile} key={event.id}/>
            )}
          { (eventType === 'business' || eventType === 'all')
            && businessEvent?.map(event =>
              <FestivalCard festival={event} userProfile={profile} key={event.id}/>
            )}
          {(eventType === 'college' || eventType === 'all')
            && collegeEvent?.map(event =>
              <FestivalCard festival={event} userProfile={profile} key={event.id}/>
            )}
        </div>
      </IonContent>

      <IonModal ref={festivalModal} trigger='search-festivals'>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
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
            <IonButton onClick={handleAttendFestival}>I&apos;ll be there! <IonIcon className='ml-2' icon={checkmarkCircleOutline}/></IonButton>
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
