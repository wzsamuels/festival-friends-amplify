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
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { Storage } from "@aws-amplify/storage"
import {Festival, LazyFestival, UserProfile} from '../models';
import AccountButton from "../components/AccountButton";

const EventPage: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [festivalData, setFestivalData] = useState<LazyFestival[]>([]);
  const [profile, setProfile] = useState<UserProfile>();
  const username = user?.username as string;
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const festivalModal = useRef<HTMLIonModalElement>(null);

  useEffect (() => {
    const festivalSub = DataStore.observeQuery(Festival)
      .subscribe(( {items}) => {
        console.log(items)
        setFestivalData(items)
      })

    return () => {
      festivalSub.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await DataStore.query(UserProfile, c => c.userID.eq(username));
      setProfile(profile[0]);
    }
    if(user) {
      fetchProfile();
    }
  }, [user])

  const handleSearch = async () => {
    const searchQuery = await DataStore.query(Festival, (festival) => festival.name.contains('test'))
    setFestivalData(searchQuery)
  }

  const handleAttendFestival = async (festival: Festival, action: string = 'attend') => {
    const latestProfile = await DataStore.query(UserProfile, c => c.userID.eq(username));
    const profile = latestProfile[0];
    if (profile) {
      if (action === 'attend') {
        const updatedFestival = Festival.copyOf(festival, updated => {
          updated.attendants = updated.attendants ?? [];
          updated.attendants.push(profile.userID);
        })
        await DataStore.save(updatedFestival);

        const updatedAttending = UserProfile.copyOf(profile, updated => {
          updated.festivalsAttending = updated.festivalsAttending ?? [];
          updated.festivalsAttending.push(festival.id);
        })
        await DataStore.save(updatedAttending);
      } else if(action === 'unattend') {
        const updatedFestival = Festival.copyOf(festival, updated => {
          updated.attendants = updated.attendants ?? [];
          updated.attendants = updated.attendants.filter(attendant => attendant !== profile.userID);
        })
        await DataStore.save(updatedFestival);

        const updatedAttending = UserProfile.copyOf(profile, updated => {
          updated.festivalsAttending = updated.festivalsAttending ?? [];
          updated.festivalsAttending = updated.festivalsAttending.filter(attending => attending !== festival.id);
        })
        await DataStore.save(updatedAttending);
      }
    } else {
      setAlertIsOpen(true);
    }
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
            <FestivalCard onClick={handleAttendFestival} festival={festival} userProfile={profile} key={festival.id}/>
          )}
        </div>
      </IonContent>
      <IonAlert
        isOpen={alertIsOpen}
        header="Not logged in!"
        message="Please log in to use this feature"
        buttons={['OK']}
        onDidDismiss={() => setAlertIsOpen(false)}
      ></IonAlert>
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
  onClick: (festival: Festival, action?: string) => void;
}

const FestivalCard = ({festival, onClick, userProfile}: FestivalCardProps) => {
  const [festivalImage, setFestivalImage] = useState("")

  useEffect(() => {
    const fetchFestivalImage = async () => {
      const imageSrc = await Storage.get(festival.image, {level: 'public'})
      setFestivalImage(imageSrc);
    }
    fetchFestivalImage()
  }, [])

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
          festival.attendants?.includes(userProfile?.userID as string)  ?
            <IonButton onClick={() => onClick(festival, 'unattend')}>I&apos;ll be there! <IonIcon icon={checkmarkCircleOutline}/></IonButton>
            :
            <IonButton   onClick={() => onClick(festival, 'attend')} fill='outline'>I&apos;ll be there!</IonButton>
        }


      </div>
    </div>
  )
}

export default EventPage;
