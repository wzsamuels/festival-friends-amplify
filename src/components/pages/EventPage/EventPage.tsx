// AWS imports
import { DataStore } from "aws-amplify";

// React imports
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

// Local imports
import {
  EventType,
  Festival,
  LazyFestival,
  UserProfile,
} from "../../../models";
import DataStoreContext, {
  DataStoreContextType,
} from "../../../context/DataStoreContext";
import EventCard from "../../ui/EventCard";
import Header from "../../layout/Header";
import { useUserProfileStore } from "../../../stores/friendProfilesStore";
import Segment from "../../common/Segment/Segment";
import EventSearchModal from "./Modals/EventSearchModal";
import {
  fetchEventAttendees,
  getAttendingFriends,
} from "../../../lib/eventHelpers";

const EventPage = () => {
  const { friendProfiles } = useUserProfileStore();
  const [events, setEvents] = useState<LazyFestival[]>([]);
  const [eventAttendees, setEventAttendees] = useState<
    Map<string, UserProfile[]>
  >(new Map());

  // Filter events by type
  const sportEvents = events.filter((event) => event.type === EventType.SPORT);
  const musicEvents = events.filter((event) => event.type === EventType.MUSIC);
  const businessEvents = events.filter(
    (event) => event.type === EventType.BUSINESS
  );
  const travelEvents = events.filter(
    (event) => event.type === EventType.TRAVEL
  )

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [eventType, setEventType] = useState("music");

  const { dataStoreCleared } = useContext(
    DataStoreContext
  ) as DataStoreContextType;

  // Observe the Festival data from DataStore
  useLayoutEffect(() => {
    if (dataStoreCleared) {
      const eventSub = DataStore.observeQuery(Festival).subscribe(
        ({ items }) => {
          setEvents(items);
        }
      );

      return () => {
        eventSub.unsubscribe();
      };
    }
  }, [dataStoreCleared]);

  // Fetch event attendees
  useEffect(() => {
    fetchEventAttendees(events).then(setEventAttendees);
  }, [events]);

  // Get attending friends

  // Render festival cards
  const renderFestivalCards = (events: LazyFestival[]) => {
    return events?.map((event) => (
      <EventCard
        festival={event}
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
