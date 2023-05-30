// React imports
import React, { useEffect, useState } from "react";

// Local imports
import {
  EventType,
  LazyFestival,
  UserProfile,
} from "../../../models";
import EventCard from "../../ui/EventCard";
import Header from "../../layout/Header";
import Segment from "../../common/Segment/Segment";
import EventSearchModal from "./Modals/EventSearchModal";
import {
  fetchEventAttendees,
  getAttendingFriends,
} from "../../../lib/eventHelpers";
import useEventStore from "../../../stores/eventStore";
import useFriendStore from "../../../stores/friendProfileStore";
import LoadingState from "../../ui/LoadingState";
import useDataClearedStore from "../../../stores/dataClearedStore";
const EventPage = () => {
  const [eventAttendees, setEventAttendees] = useState<Map<string, UserProfile[]>>(new Map());
  // Filter events by type
  const events = useEventStore(state => state.events)
  const loadingEvents = useEventStore(state => state.loadingEvents)
  const sportEvents = events.filter((event) => event.type === EventType.SPORT);
  const musicEvents = events.filter((event) => event.type === EventType.MUSIC);
  const businessEvents = events.filter((event) => event.type === EventType.BUSINESS);
  const travelEvents = events.filter((event) => event.type === EventType.TRAVEL)
  const dataCleared = useDataClearedStore(state => state.dataCleared)
  const friendProfiles = useFriendStore(state => state.acceptedFriendProfiles)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [eventType, setEventType] = useState("music");


  // Fetch event attendees
  useEffect(() => {
    if(!dataCleared) return

    try {
      fetchEventAttendees(events).then(setEventAttendees);
    } catch (e) {
      console.log("Error fetching event attendees", e);
    }
  }, [events]);

  // Render festival cards
  const renderFestivalCards = (events: LazyFestival[]) => {
    if(loadingEvents) {
      return <LoadingState/>
    }

    return events?.map((event) => (
      <EventCard
        event={event}
        key={event.id}
        attendingFriends={getAttendingFriends({
          eventAttendees,
          friendProfiles,
          eventId: event.id,
        })}
      />
    ));
  };

  // Event mapping
  const eventMapping = {
    music: musicEvents,
    sport: sportEvents,
    business: businessEvents,
    travel: travelEvents
  };

  const segmentItems = [
    { type: "music", label: "Music" },
    { type: "sport", label: "Sports" },
    { type: "business", label: "Business" },
    { type: "travel", label: "Travel" }
  ];

  // Filter events by type, map to array, and flatten
  const filteredEvents = Object.entries(eventMapping)
    .filter(([key, events]) => eventType === key || eventType === "all")
    .map(([_, events]) => events)
    .flat();

  return (
    <div>
      <Header onSearch={() => setIsSearchModalOpen(true)}>
        <Segment
          segmentType={eventType}
          setSegmentType={setEventType}
          items={segmentItems}
        />
      </Header>
      <div className="grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center px-4">
        {renderFestivalCards(filteredEvents)}
      </div>
      <EventSearchModal
        isOpen={isSearchModalOpen}
        setIsOpen={setIsSearchModalOpen}
      />
    </div>
  );
};

export default EventPage;
