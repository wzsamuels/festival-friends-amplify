// Ionic imports
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  SegmentChangeEventDetail,
} from "@ionic/react";
import { search } from "ionicons/icons";

// AWS imports
import { useAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";

// React imports
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

// Local imports
import { EventType, Festival, LazyFestival, UserProfile } from "../../models";
import AccountButton from "../../components/Profile/AccountButton";
import DataStoreContext, { DataStoreContextType } from "../../context/DataStoreContext";
import FestivalCard from "../../components/Events/FestivalCard";

const EventPage: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [events, setEvents] = useState<LazyFestival[]>([]);
  const [profile, setProfile] = useState<UserProfile>();
  const username = user?.username as string;

  // Filter events by type
  const sportEvents = events.filter((event) => event.type === EventType.SPORT);
  const musicEvents = events.filter((event) => event.type === EventType.MUSIC);
  const collegeEvent = events.filter((event) => event.type === EventType.COLLEGE);
  const businessEvent = events.filter((event) => event.type === EventType.BUSINESS);

  const [eventType, setEventType] = useState("all");

  const festivalModal = useRef<HTMLIonModalElement>(null);
  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;

  // Observe the Festival data from DataStore
  useLayoutEffect(() => {
    if (dataStoreCleared) {
      const eventSub = DataStore.observeQuery(Festival).subscribe(({ items }) => {
        console.log(items);
        setEvents(items);
      });

      return () => {
        eventSub.unsubscribe();
      };
    }
  }, [dataStoreCleared]);

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await DataStore.query(UserProfile, (c) => c.userID.eq(username));
      setProfile(profile[0]);
    };
    if (user) {
      fetchProfile();
    } else {
      setProfile(undefined);
    }
  }, [user]);

  console.log(eventType);

  // Handle segment change
  const handleSegmentChange = (e: CustomEvent<SegmentChangeEventDetail>) => {
    console.log(e.detail.value);
    if (e.detail.value) {
      setEventType(e.detail.value);
    }
  };

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
          {(eventType === 'music' || eventType === 'all')
            && musicEvents?.map(event =>
            <FestivalCard festival={event} userProfile={profile} key={event.id}/>
          )}
          {(eventType === 'sport' || eventType === 'all')
            && sportEvents?.map(event =>
              <FestivalCard festival={event} userProfile={profile} key={event.id}/>
            )}
          {(eventType === 'business' || eventType === 'all')
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

export default EventPage;
