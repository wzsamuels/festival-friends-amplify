import React, {useContext, useEffect, useState} from 'react'
import {Festival, UserProfile} from "../../models";
import {DataStore} from "@aws-amplify/datastore";
import ImageContext from "../../context/ImageContext";
import useFriendProfiles from "../../hooks/useUserFriends";
import FriendCard from "../../components/Friends/FriendCard";
import {Link, useParams} from "react-router-dom";
import Header from "../../components/Header";

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
    <div className='w-full flex items-center flex-col justify-center pt-16'>
      <div className='max-w-5xl max-h-screen relative'>
        <img className='w-full h-full' src={eventImage} alt={event?.name}/>
        <div className='rounded-xl z-50 text-primary-default shadow-md absolute bottom-4 left-4 bg-white'>
          <h1 className='p-4 bg-light-default'>{event?.name}</h1>
        </div>
      </div>
    </div>
    <div className='w-full'>
      <h2 className='text-2xl'>Friends Attending</h2>
      <div className='flex flex-wrap w-full'>
        { attendeeFriends.map(attendee =>
          <FriendCard profile={attendee} link={true} key={attendee.id}/>
        )}
      </div>
      <h2 className='text-2xl'>People Attending</h2>
      <div className='flex flex-wrap w-full'>

        { attendees.map(attendee =>
          <FriendCard profile={attendee} link={true} key={attendee.id}/>
        )}
      </div>
    </div>
    </>
  )
}

export default EventDetailPage