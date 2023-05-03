import React, {useContext, useEffect, useState} from 'react'
import {Festival, UserProfile} from "../../../models";
import {DataStore} from "@aws-amplify/datastore";
import ImageContext from "../../../context/ImageContext";
import useFriendProfiles from "../../../hooks/useUserFriends";
import FriendCard from "../../ui/FriendCard";
import {Link, useParams} from "react-router-dom";
import Header from "../../layout/Header";

const EventDetailPage = () => {
  const [event, setEvent] = useState<Festival>();
  const [eventImage, setEventImage] =  React.useState('');
  const [attendees, setAttendees] = useState<UserProfile[]>([]);
  const [attendeeFriends, setAttendeeFriends] = useState<UserProfile[]>([]);
  const { friendProfiles, friendsAreLoading } = useFriendProfiles()
  const {id} = useParams()
  const { getSignedURL } = useContext(ImageContext);

  useEffect(() => {

    const fetchEvent = async () => {
      const items = await DataStore.query(Festival, c => c.id.eq(id as string));
      // Fetch event and event image
      const event = items[0];
      const image = await getSignedURL(event.image);
      setEventImage(image);
      setEvent(event);
      // Fetch attendee profiles
      const attendeeProfiles: UserProfile[] = [];
      for await (const attendee of event.attendees) {
        const profile = await attendee.userProfile;
        attendeeProfiles.push(profile);
      }
      setAttendees(attendeeProfiles);

    }
    fetchEvent()
  },[id] );

  useEffect(() => {
    console.log("Friend Proiles", friendProfiles)
    if(friendProfiles.length === 0) {
      return;
    }
    const friendIds = new Set(friendProfiles.map(friend => friend.id));
    const newAttendeeFriends = attendees.filter(attendee => friendIds.has(attendee.id));
    setAttendeeFriends(newAttendeeFriends);
  }, [friendProfiles, attendees])

  return (
    <>
      <Header>
        <span><Link className='underline text-primary-default' to='/'>Events</Link> / {event?.name}</span>
      </Header>
        <div className='w-screen max-h-[75vh] h-full relative overflow-hidden'>
          <img className='w-full h-full object-cover' src={eventImage} alt={event?.name}/>
          <div className='rounded-xl z-50 text-primary-default shadow-md absolute bottom-4 left-4 bg-white p-4 bg-light-default min-w-[250px]'>
            <h1 className='text-xl mb-2'>{event?.name}</h1>
            <p className='mb-2'> {event?.location}</p>
            <p>{event?.startDate}</p>
          </div>
        </div>
        <div className='w-full p-4'>
          {
            attendeeFriends.length > 0 &&
            <>
              <h2 className='text-2xl my-4'>Friends Attending</h2>
              <div className='flex flex-wrap w-full'>
                { attendeeFriends.map(attendee =>
                  <FriendCard profile={attendee} link={true} key={attendee.id} className='m-4'/>
                )}
              </div>
            </>
          }
          {
            attendees.length > 0 &&
            <>
              <h2 className='text-2xl my-4'>People Attending</h2>
              <div className='flex flex-wrap w-full'>

                { attendees.map(attendee =>
                  <FriendCard profile={attendee} link={true} key={attendee.id} className='m-4'/>
                )}
              </div>
            </>
          }

        </div>

    </>
  )
}

export default EventDetailPage