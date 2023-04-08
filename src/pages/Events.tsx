import { IonContent, IonHeader, IonImg, IonNavLink, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import { festivalData } from '../data/mock-festival-data';
import userData from '../data/mock-user-data.json'



const EventPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className='flex justify-between'>
            <IonTitle>Festivals & Events</IonTitle>
            
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
          { festivalData.map(festival =>
            <div className='w-auto m-4 rounded-xl shadow-md max-w-4xl' key={festival.id}>
              <div className='relative'>
                <IonImg className=' rounded-t-xl' src={festival.image} alt={festival.name}/>
                <div className='absolute bottom-4 left-4 rounded-xl z-10 max-w-[300px] w-full p-4 font-bold bg-black'>
                  <div className='bold'>{festival.name}</div>
                  <div>{festival.location}</div>
                  <div>{festival.dates}</div>
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
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EventPage;
