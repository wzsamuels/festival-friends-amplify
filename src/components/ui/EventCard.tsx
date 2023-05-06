import {EventProfile, LazyFestival, UserProfile} from "../../models";
import React, {useContext, useEffect, useState} from "react";
import DataStoreContext, {DataStoreContextType} from "../../context/DataStoreContext";
import ImageContext from "../../context/ImageContext";
import {DataStore} from "aws-amplify";
import {BsCheck} from "react-icons/all";
import {Link} from "react-router-dom";
import {useUserProfileStore} from "../../stores/friendProfilesStore";
import Button from "../common/Button/Button";
import EventFriendModal from "../pages/EventPage/Modals/EventFriendModal";

interface FestivalCardProps {
  festival: LazyFestival;
  attendingFriends: UserProfile[];
}

const EventCard = ({festival, attendingFriends}: FestivalCardProps) => {
  const [festivalImage, setFestivalImage] = useState('')
  const [attendingEvent, setAttendingEvent] = useState(false)
  const [eventProfile, setEventProfile] = useState<EventProfile>();
  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;
  const { userProfile} = useUserProfileStore()
  const [isEventFriendModalOpen, setIsEventFriendModalOpen] = useState(false)

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
    }
  }

  return (
    <div className='m-4 rounded-xl shadow-md w-full  max-w-[350px] bg-light-default'>
      <Link className='relative' to={`/events/${festival.id}`}>
        <div className='w-full max-w-[350px] min-h-[350px] h-full max-h-[350px] object-cover flex items-center justify-center'>
          {
            festivalImage ?
                <img className='w-full h-full' src={festivalImage} alt={festival.name}/>
              :
              null
          }
        </div>
        <div className=' bottom-4 left-4 rounded-xl z-10 w-full p-4 font-bold '>
          <div className='bold min-h-[3rem]'>{festival.name} - {festival.location}</div>

          <div>{festival.startDate}</div>
        </div>
      </Link>
      <div className='p-2 text-base md:text-lg'>
        {
          userProfile ?
            <>
              <button className='my-2  text-green-950' disabled={attendingFriends.length === 0} onClick={() => setIsEventFriendModalOpen(true)}>
                {attendingFriends.length > 0 ? <span className='underline'>{attendingFriends.length} friend{attendingFriends.length > 1 ? 's' : ''} {attendingFriends.length > 1 ? 'are' : 'is'} attending</span> : <span>&nbsp;</span>}
              </button>
              {
                attendingEvent  ?
                  <Button onClick={handleAttendFestival} className='flex items-center'>
                    <span>I&apos;ll be there!</span>
                    <BsCheck/>
                  </Button>
                  :
                  <Button onClick={handleAttendFestival} variation='outline' className='flex items-center'><span>I&apos;ll be there!</span></Button>
              }
            </>
            :
            null
        }
      </div>
      <EventFriendModal event={festival} attendingFriends={attendingFriends} isOpen={isEventFriendModalOpen} setIsOpen={setIsEventFriendModalOpen}/>
    </div>
  )
}

export default EventCard;