// AWS imports
import { DataStore } from "aws-amplify";

// React imports
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

// Local imports
import {EventProfile, EventType, Festival, LazyFestival, UserProfile} from "../../../models";
import DataStoreContext, { DataStoreContextType } from "../../../context/DataStoreContext";
import EventCard from "../../ui/EventCard";
import Header from "../../layout/Header";
import Modal from "../../common/Modal";
import {useUserProfileStore} from "../../../stores/friendProfilesStore";

const EventPage = () => {
  const { userProfile, friendProfiles } = useUserProfileStore();
  const [events, setEvents] = useState<LazyFestival[]>([]);
  const [eventAttendees, setEventAttendees] = useState<Map<string, UserProfile[]>>(new Map());

  // Filter events by type
  const sportEvents = events.filter((event) => event.type === EventType.SPORT);
  const musicEvents = events.filter((event) => event.type === EventType.MUSIC);
  const collegeEvent = events.filter((event) => event.type === EventType.COLLEGE);
  const businessEvent = events.filter((event) => event.type === EventType.BUSINESS);
  const [isOpen, setIsOpen] = useState(false)
  const [eventType, setEventType] = useState("all");

  const { dataStoreCleared } = useContext(DataStoreContext) as DataStoreContextType;

  // Observe the Festival data from DataStore
  useLayoutEffect(() => {
    if (dataStoreCleared) {
      const eventSub = DataStore.observeQuery(Festival).subscribe(({ items }) => {
        setEvents(items);
      });

      return () => {
        eventSub.unsubscribe();
      };
    }
  }, [dataStoreCleared]);

  useEffect(() => {
    const fetchEventAttendees = async () => {
      const eventAttendeesMap = new Map<string, UserProfile[]>();

      for (const event of events) {
        const attendees = (await DataStore.query(EventProfile, (ep) => ep.eventID.eq(event.id))).map(
          (eventProfile: EventProfile) => eventProfile.userProfile
        );
        const attendeeProfiles = await Promise.all(
          attendees.map(async (attendee) => await attendee)
        );
        eventAttendeesMap.set(event.id, attendeeProfiles);
      }
      setEventAttendees(eventAttendeesMap);
    };

    fetchEventAttendees();
  }, [events]);

  // Handle segment change

  const getAttendingFriends = (eventId: string): UserProfile[] => {
    const attendees = eventAttendees.get(eventId) || [];
    return friendProfiles.filter((friend) => attendees.some((attendee) => attendee.id === friend.id));
  };

  // Render festival cards
  const renderFestivalCards = (events:  LazyFestival[]) => {
    return events?.map((event) => (
      <EventCard festival={event} key={event.id} attendingFriends={getAttendingFriends(event.id)} />
    ));
  };

  // Event mapping
  const eventMapping = {
    music: musicEvents,
    sport: sportEvents,
    business: businessEvent,
    college: collegeEvent,
  };

  // Filter events by type, map to array, and flatten
  const filteredEvents = Object.entries(eventMapping)
    .filter(([key, events]) => eventType === key || eventType === "all")
    .map(([_, events]) => events)
    .flat();

  return (
    <div>
      <Header>
        <div className='w-full flex justify-between h-full'>
          <button
            className={`${eventType === "all" ? "" : "after:scale-x-0"} hover:bg-light-default flex-1 p-4 relative after:transition after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-primary-default after:origin-left`}
            onClick={() => setEventType("all")}
          >
            All
          </button>
          <button
            className={`${eventType === "music" ? "" : "after:scale-x-0"} hover:bg-light-default flex-1 p-4 relative after:transition after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-primary-default after:origin-left`}
            onClick={() => setEventType("music")}
          >
            Music
          </button>
          <button
            className={`${eventType === "sport" ? "" : "after:scale-x-0"} hover:bg-light-default flex-1 p-4 relative after:transition after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-primary-default after:origin-left`}
            onClick={() => setEventType("sport")}
          >
            Sports
          </button>
          <button
            className={`${eventType === "business" ? "" : "after:scale-x-0"}  hover:bg-light-default flex-1 p-4 relative after:transition after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0  after:bg-primary-default after:origin-left`}
            onClick={() => setEventType("business")}>Business</button>
        </div>
      </Header>
      <div className='grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center px-4'>
        {renderFestivalCards(filteredEvents)}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Search Festivals'>
        <div className='p-4'>
          Not yet implemented!
        </div>
    </Modal>
    </div>
  );
};

export default EventPage;
