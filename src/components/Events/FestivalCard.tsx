import {EventProfile, LazyFestival, UserProfile} from "../../models";
import React, {useContext, useEffect, useState} from "react";
import DataStoreContext, {DataStoreContextType} from "../../context/DataStoreContext";
import ImageContext from "../../context/ImageContext";
import {DataStore} from "aws-amplify";
import {IonAlert, IonButton, IonIcon, IonItem, IonSpinner} from "@ionic/react";
import {checkmarkCircleOutline} from "ionicons/icons";

interface FestivalCardProps {
  festival: LazyFestival;
  userProfile: UserProfile | undefined;
}

const FestivalCard = ({festival, userProfile}: FestivalCardProps) => {
  const [festivalImage, setFestivalImage] = useState('')
  const [attendingEvent, setAttendingEvent] = useState(false)
  const [eventProfile, setEventProfile] = useState<EventProfile>();
  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const { getSignedURL } = useContext(ImageContext);
  useEffect(() => {
    const fetchSignedURL = async () => {
      const url = await getSignedURL(festival.image);
      setFestivalImage(url);
    };

    fetchSignedURL();
  }, [festival.image, getSignedURL]);

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
              <IonItem routerLink={`/events/${festival.id}`} lines='none'>
                <img className='w-full h-full' src={festivalImage} alt={festival.name}/>
              </IonItem>
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
            <IonButton onClick={handleAttendFestival} fill='outline'>I&apos;ll be there!</IonButton>
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

export default FestivalCard;