import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonPage, IonPopover,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import {personCircle, search } from "ionicons/icons";
import { useAuthenticator } from '@aws-amplify/ui-react';
import {DataStore} from 'aws-amplify';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import { Storage } from "@aws-amplify/storage"
import {Festival, LazyFestival} from '../models';

const EventPage: React.FC = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [festivalData, setFestivalData] = useState<LazyFestival[]>([]);

  useLayoutEffect (() => {

    const profileSub = DataStore.observeQuery(Festival)
      .subscribe(( {items}) => {
        console.log(items)
        setFestivalData(items)
      })

    return () => {
      profileSub.unsubscribe();
    };


  }, [])

  console.log(user?.attributes)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Festivals & Events</IonTitle>
          <IonButtons slot='end'>
            <IonButton>
              <IonIcon size='large' icon={search}/>
            </IonButton>
            <IonButton id="click-trigger">
              <IonIcon size='large' icon={personCircle}/>
            </IonButton>
            <IonPopover trigger="click-trigger" showBackdrop={false} dismissOnSelect={true}  triggerAction="hover">
              {
                user ?
                  <>
                    <IonItem className='w-full cursor-pointer' routerLink='/account'>Account</IonItem>
                    <IonItem className='w-full cursor-pointer' onClick={signOut}>Sign Out</IonItem>
                  </>
                  :
                  <>
                    <IonItem className='w-full cursor-pointer' routerLink='/account'>Login In / Sign Up</IonItem>
                  </>
              }
            </IonPopover>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center p-4'>
          { festivalData?.map(festival =>
            <FestivalCard festival={festival} key={festival.id}/>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

const FestivalCard = ({festival}: {festival: LazyFestival}) => {
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
        <IonButton>I&apos;ll be there!</IonButton>
      </div>
    </div>
  )
}

export default EventPage;