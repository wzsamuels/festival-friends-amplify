import {EventProfile, Event, Profile} from "../../models";
import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "../common/Button/Button";
import useProfileStore from "../../stores/profileStore";
import {getAttendees, joinEvent, leaveEvent} from "../../services/eventServices";
import useFriendStore from "../../stores/friendProfileStore";
import dayjs from "dayjs";
import {DataStore} from "@aws-amplify/datastore";
import {CheckIcon} from "@heroicons/react/20/solid";
import useDataClearedStore from "../../stores/dataClearedStore";
import useQueueStore from "../../stores/queueStore";

interface EventCardProps {
  event: Event;
  className?: string;
}

const EventCard = ({ event, className }: EventCardProps) => {
  const [attendeeProfiles, setAttendeeProfiles] = useState<Profile[]>([]);
  const friendProfiles = useFriendStore(state => state.acceptedFriendProfiles);
  const [friendsAttending, setFriendsAttending] = useState<Profile[]>([])
  const [eventProfile, setEventProfile] = useState<EventProfile | null>(null);
  const userProfile = useProfileStore((state) => state.userProfile);
  const dataCleared = useDataClearedStore(state => state.dataCleared);
  const { dataStoreQueue } = useQueueStore();

  const getAttendeesEffect = useCallback(async () => {
    if(!event || !dataCleared) return;

    dataStoreQueue.enqueue(async () => {
      try {        
        const profiles = await getAttendees(event.id);
        setAttendeeProfiles(profiles);
        const attendeeMap = new Map(profiles.map(profile => [profile.id, profile]));
        setFriendsAttending(friendProfiles.filter(profile => attendeeMap.has(profile.id)));
      } catch (e) {
        console.log("Error fetching event attendee profiles:", e);
      }
    });
  }, [event, friendProfiles, dataCleared]);

  useEffect(() => {
    getAttendeesEffect();
  }, [getAttendeesEffect]);

  useEffect(() => {
    if (!userProfile || !event || !dataCleared) return;
      // TODO: Move API call to service file
      DataStore.query(EventProfile, c => c.and(c => [
        c.eventId.eq(event.id),
        c.profileId.eq(userProfile.id)
      ])).then(([eventProfile]) => setEventProfile(eventProfile));
  },[userProfile, event, dataCleared]);

  const handleAttendEvent = async () => {
    if (!userProfile) return;

    if (eventProfile) {
      // If the user is already attending, remove them from the attendees list
      await leaveEvent(event, userProfile);
      setAttendeeProfiles(state => state.filter(profile => profile.id !== userProfile.id))
      setEventProfile(null)
      console.log(`${userProfile.firstName} ${userProfile.lastName} has been removed from the event attendees list`);
    } else {
      // If the user is not attending, add them to the attendees list
      const latestEvent = await DataStore.query(Event, event.id);
      console.log("Latest event: ", latestEvent);
      const newEventProfile = await joinEvent(latestEvent, userProfile);
      console.log(newEventProfile)
      setAttendeeProfiles(state => [...state, userProfile])
      setEventProfile(newEventProfile)
      console.log(`${userProfile.firstName} ${userProfile.lastName} has been added to the event attendees list`);
    }
  };

  return (
    <div className={`rounded-xl shadow-md w-full max-w-[350px] min-h-[calc(700px-2rem)] max-h-[calc(700px-2rem)] flex flex-col justify-between ${className}`}>
      <Link className="relative" to={`/events/${event.id}`}>
        <img
          loading="lazy"
          className="w-full h-full object-cover aspect-square"
          src={`${import.meta.env.VITE_CLOUDINARY_URL}/public/${event.image}${import.meta.env.VITE_CLOUDINARY_TRANSFORM}`}
          alt={event.name}
        />
        <div className=" bottom-4 left-4 rounded-xl z-10 w-full p-4 ">
          <div className="text-lg">{event.name}</div>
          <div className="mb-2">{event.genre}</div>
          <div>{event.city}, {event.state}</div>
          <div>{event.country}</div>
          <div>
            {dayjs(event.startDate).format("MMMM D, YYYY")} - {dayjs(event.endDate).format("MMMM D, YYYY")}
          </div>
        </div>
      </Link>
      <div className="p-2 text-base md:text-lg  h-full items-end">
        {/*<div>Distance: {Number(distance).toFixed(0)} miles</div>*/}
        {userProfile &&
          <>
            <div>
              <button
                className="my-2"
                disabled={friendsAttending.length === 0}
              >
                {friendsAttending.length > 0 ? (
                  <Link to={`/events/${event.id}#friends`} className="underline">
                    {friendsAttending.length} friend
                    {friendsAttending.length > 1 ? "s" : ""}{" "}
                    {friendsAttending.length > 1 ? "are" : "is"} attending
                  </Link>
                ) : (
                  <div>&nbsp;</div>
                )}
              </button>
            </div>
            {/*
            <div>
              <button
                className="mb-2">
                { attendeeProfiles.length > 0 ?
                  <Link to={`/events/${event.id}#people`} className="underline my-4">
                    {attendeeProfiles.length}{" "}
                    {attendeeProfiles.length > 1 ? "people" : "person"}{" "}
                    {attendeeProfiles.length > 1 ? "are" : "is"} attending
                  </Link>
                  :
                  <span>&nbsp;</span>
                }
              </button>
            </div>
            */}

          </>
        }
        <div className="flex gap-4">
          {userProfile && (eventProfile ?
            <Button
              onClick={handleAttendEvent}
              className="flex items-center"
            >
              <span>I&apos;ll be there!</span>
              <CheckIcon className='ml-4 h-4' />
            </Button>
          :
            <Button
              onClick={handleAttendEvent}
              variation="outline"
              className="flex items-center"
            >
              <span>I&apos;ll be there!</span>
            </Button>
          )}
          { event.ticketURL &&
            <a href={event.ticketURL} target="_blank" rel="noreferrer"><Button>Buy Tickets</Button></a>
          }
        </div>
      </div>
    </div>
  );
};

export default EventCard;
