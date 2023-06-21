import {EventProfile, Event, Profile} from "../../models";
import React, {useEffect, useState} from "react";
import {BsCheck} from "react-icons/all";
import {Link} from "react-router-dom";
import Button from "../common/Button/Button";
import EventFriendModal from "../pages/EventPage/Modals/EventFriendModal";
import useDataClearedStore from "../../stores/dataClearedStore";
import useProfileStore from "../../stores/profileStore";
import {getAttendees, joinEvent, leaveEvent} from "../../services/eventServices";
import useFriendStore from "../../stores/friendProfileStore";
import dayjs from "dayjs";
import {DataStore} from "@aws-amplify/datastore";
import Image from "./Image";

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
  const [isEventFriendModalOpen, setIsEventFriendModalOpen] = useState(false);
  const dataCleared = useDataClearedStore(state => state.dataCleared)

  useEffect(() => {
    if(!event || !dataCleared) return;
    try {
      getAttendees(event.id).then(profiles => {
        setAttendeeProfiles(profiles)
        const attendeeMap = new Map(profiles.map(profile => [profile.id, profile]))
        setFriendsAttending(friendProfiles.filter(profile => attendeeMap.has(profile.id)));
      })
    } catch (e) {
      console.log("Error fetching event attendee profiles", e);
    }
  }, [event])

  useEffect(() => {
    if (!dataCleared || !userProfile || !event) return;

    DataStore.query(EventProfile, c => c.and(c => [
      c.eventId.eq(event.id),
      c.profileId.eq(userProfile.id)
      ]))
      .then(([eventProfile]) => setEventProfile(eventProfile))
  }, [dataCleared, userProfile, event]);

  const handleAttendEvent = async () => {
    if (!userProfile || !dataCleared) return;

    if (eventProfile) {
      // If the user is already attending, remove them from the attendees list
      await leaveEvent(event, userProfile);
      setAttendeeProfiles(state => state.filter(profile => profile.id !== userProfile.id))
      setEventProfile(null)
      console.log(`${userProfile.firstName} ${userProfile.lastName} has been removed from the event attendees list`);
    } else {
      // If the user is not attending, add them to the attendees list
      const newEventProfile = await joinEvent(event, userProfile);
      setAttendeeProfiles(state => [...state, userProfile])
      setEventProfile(newEventProfile)
      console.log(`${userProfile.firstName} ${userProfile.lastName} has been added to the event attendees list`);
    }
  };

  return (
    <div className={`rounded-xl shadow-md w-full max-w-[350px] min-h-[36rem] flex flex-col justify-between ${className}`}>
      <Link className="relative" to={`/events/${event.id}`}>
        <Image
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

          </>
        }
        <div className="flex gap-4">
          {userProfile && (eventProfile ?
            <Button
              onClick={handleAttendEvent}
              className="flex items-center"
            >
              <span>I&apos;ll be there!</span>
              <BsCheck />
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
      <EventFriendModal
        event={event}
        attendingFriends={friendsAttending}
        isOpen={isEventFriendModalOpen}
        setIsOpen={setIsEventFriendModalOpen}
      />
    </div>
  );
};

export default EventCard;
