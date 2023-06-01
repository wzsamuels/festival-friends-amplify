import {EventProfile, Festival, UserProfile} from "../../models";
import React, {useContext, useEffect, useState} from "react";
import ImageContext from "../../context/ImageContext";
import {BsCheck} from "react-icons/all";
import {Link} from "react-router-dom";
import Button from "../common/Button/Button";
import EventFriendModal from "../pages/EventPage/Modals/EventFriendModal";
import useDataClearedStore from "../../stores/dataClearedStore";
import useProfileStore from "../../stores/profileStore";
import {createEventProfile, deleteEventProfile, getEventProfile} from "../../services/eventProfileServices";
import {getEventAttendeeProfiles} from "../../services/eventServices";
import useFriendStore from "../../stores/friendProfileStore";
import dayjs from "dayjs";

interface EventCardProps {
  event: Festival;
  attendingFriends: UserProfile[];
}

const EventCard = ({ event }: EventCardProps) => {
  const [eventImage, setFestivalImage] = useState("");
  const [attendeeProfiles, setAttendeeProfiles] = useState<UserProfile[]>([]);
  const friendProfiles = useFriendStore(state => state.acceptedFriendProfiles);
  const [friendsAttending, setFriendsAttending] = useState<UserProfile[]>([])
  const [eventProfile, setEventProfile] = useState<EventProfile | null>(null);
  const userProfile = useProfileStore((state) => state.userProfile);
  const [isEventFriendModalOpen, setIsEventFriendModalOpen] = useState(false);
  const { getSignedURL } = useContext(ImageContext);
  const dataCleared = useDataClearedStore(state => state.dataCleared)

  useEffect(() => {
    const fetchSignedURL = async () => {
      return await getSignedURL(event.image, "public");
    };

    fetchSignedURL().then(url => setFestivalImage(url));
  }, [event.image, getSignedURL]);

  useEffect(() => {
    //if(!event || !dataCleared) return;
    try {
      getEventAttendeeProfiles(event.id).then(profiles => {
        setAttendeeProfiles(profiles)
        const attendeeMap = new Map(profiles.map(profile => [profile.id, profile]))
        setFriendsAttending(friendProfiles.filter(profile => attendeeMap.has(profile.id)));
      })
    } catch (e) {
      console.log("Error fetching event attendee profiles", e);
    }
  }, [event])

  useEffect(() => {
    if (!dataCleared || !userProfile) return;

    getEventProfile(event.id, userProfile.id).then(eventProfile => setEventProfile(eventProfile));
  }, [dataCleared, userProfile]);

  const handleAttendFestival = async () => {
    if (!userProfile || !dataCleared) return;

    if (eventProfile) {
      // If the user is already attending, remove them from the attendees list
      await deleteEventProfile(eventProfile);
      setAttendeeProfiles(state => state.filter(profile => profile.id !== userProfile.id))
      setEventProfile(null)
      console.log(`${userProfile.firstName} ${userProfile.lastName} has been removed from the event attendees list`);
    } else {
      // If the user is not attending, add them to the attendees list
      const newEventProfile = await createEventProfile(event, userProfile);
      setAttendeeProfiles(state => [...state, userProfile])
      setEventProfile(newEventProfile)
      console.log(`${userProfile.firstName} ${userProfile.lastName} has been added to the event attendees list`);
    }
  };

  return (
    <div className="m-4 rounded-xl shadow-md w-full  max-w-[350px] bg-light-default">
      <Link className="relative" to={`/events/${event.id}`}>
        <div className="w-full max-w-[350px] min-h-[350px] h-full max-h-[350px]  flex items-center justify-center">
          {eventImage ? (
            <img
              className="w-full h-full object-cover aspect-square"
              src={eventImage}
              alt={event.name}
            />
          ) : null}
        </div>
        <div className=" bottom-4 left-4 rounded-xl z-10 w-full p-4 ">
          <div className="font-bold min-h-[3rem]">
            {event.name}
          </div>
          <div>{event.city}, {event.state}</div>

          <div>{dayjs(event.startDate).format("MMMM D, YYYY")}</div>
        </div>
      </Link>
      <div className="p-2 text-base md:text-lg">
        {userProfile ? (
          <>
            <div>
            <button
              className="my-2 text-green-950"
              disabled={friendsAttending.length === 0}
              onClick={() => setIsEventFriendModalOpen(true)}
            >
              {friendsAttending.length > 0 ? (
                <span className="underline">
                  {friendsAttending.length} friend
                  {friendsAttending.length > 1 ? "s" : ""}{" "}
                  {friendsAttending.length > 1 ? "are" : "is"} attending
                </span>
              ) : (
                <span>&nbsp;</span>
              )}
            </button>
            </div>
            <div>
            <button
              className="mb-2 text-green-950">
              {attendeeProfiles.length > 0 ? (
                <span className="underline my-4">
                  {attendeeProfiles.length}{" "}
                  {attendeeProfiles.length > 1 ? "people" : "person"}{" "}
                  {attendeeProfiles.length > 1 ? "are" : "is"} attending
                </span>
              ) : (
                <span>&nbsp;</span>
              )}
            </button>
            </div>
            {eventProfile ? (
              <Button
                onClick={handleAttendFestival}
                className="flex items-center"
              >
                <span>I&apos;ll be there!</span>
                <BsCheck />
              </Button>
            ) : (
              <Button
                onClick={handleAttendFestival}
                variation="outline"
                className="flex items-center"
              >
                <span>I&apos;ll be there!</span>
              </Button>
            )}
          </>
        ) : null}
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

/*
    const eventProfileSub = DataStore.observeQuery(EventProfile, (c) =>
      c.eventID.eq(event.id)
    ).subscribe(({ items }) => {
      if (userProfile && items.length > 0) {
        const ep = items.filter(
          (item) => item.userProfileID === userProfile.id
        );
        if (ep.length > 0) {
          setAttendingEvent(true);
          setEventProfile(ep[0]);
        }
      } else {
        setAttendingEvent(false);
        setEventProfile(undefined);
      }
    });

    return () => {
      eventProfileSub.unsubscribe();
    };
 */

export default EventCard;
