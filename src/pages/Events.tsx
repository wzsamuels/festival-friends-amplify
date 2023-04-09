import { IonContent, IonHeader, IonImg, IonNavLink, IonPage, IonRouterLink, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
//import { festivalData } from '../data/mock-festival-data';
import userData from '../data/mock-user-data.json'
import { useAuthenticator } from '@aws-amplify/ui-react';
import { DataStore, Predicates } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Storage } from "@aws-amplify/storage"
import { Festival, LazyFestival } from '../models';

const EventPage: React.FC = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [festivalData, setFestivalData] = useState<LazyFestival[]>([]);

  useEffect(() => {
    const fetchFestivals = async () => {
      const festivals = await DataStore.query(Festival, Predicates.ALL, {
        page: 0,
        limit: 100
      });
      setFestivalData(festivals);
      console.log("Festivals", festivals)
    }

    fetchFestivals()
      
  }, [])

  

  console.log(user?.attributes)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className='flex justify-between'>
            <IonTitle className='basis-[200px]'>Festivals & Events</IonTitle>
            <div className='flex-1'>{ user ? user.username : "Not logged in"}</div>
            <div>{ user ? <button onClick={() => {signOut(); DataStore.clear();}} className='px-2 py-4'>Logout</button> : <a className='px-2 py-4' href='/login'>Login</a>  }</div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='flex flex-col items-center p-4'>
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
  })

  return (
    <div className='w-auto m-4 rounded-xl shadow-md max-w-4xl'>
      <div className='relative'>
        <div className='full h-[650px] flex items-center justify-center'>
          {
            festivalImage ? 
              <IonImg className='w-full h-full rounded-t-xl' src={festivalImage} alt={festival.name}/>
            :
              <IonSpinner></IonSpinner>
          }
        </div>
        <div className='absolute bottom-4 left-4 rounded-xl z-10 max-w-[300px] w-full p-4 font-bold bg-white'>
          <div className='bold'>{festival.name}</div>
          <div>{festival.location}</div>
          <div>{festival.startDate}</div>
        </div>
      </div>
      <div>
        <h2 className='text-xl m-2'>Attending</h2>
        <div className='flex flex-wrap'>
          { [...Array( Math.floor(Math.random() * 4) + 4)].map((item, index) => {
              let user_number = Math.floor(Math.random() * userData.length);
              return (
                <IonRouterLink href={`/profile/${user_number}`} className='flex max-w-[300px] items-center m-4 border border-black p-2 rounded-xl hover:border-gray-500' key={index}>
                  <div className='mx-4'>
                    <img className='rounded-full' width={50} height={50} src={userData[user_number].avatar} alt={userData[0].first_name}/>
                  </div>
                  <div>{userData[user_number].first_name} {userData[user_number].last_name}</div>
                </IonRouterLink>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export default EventPage;
