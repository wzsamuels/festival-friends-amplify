// React imports
import React, { useState } from "react";

// Local imports
import {
  EventType,
  Event
} from "../../../models";
import EventCard from "../../ui/EventCard";
import Header from "../../layout/Header";
import Segment from "../../common/Segment/Segment";
import EventSearchModal from "./Modals/EventSearchModal";
import useEventStore from "../../../stores/eventStore";
import LoadingState from "../../ui/LoadingState";

const EventPage = () => {
  // Filter events by type
  const events = useEventStore(state => state.events).filter((event) => !event.cancelled);
  const loadingEvents = useEventStore(state => state.loadingEvents)
  const sportEvents = events.filter((event) => event.type === EventType.SPORT);
  const musicEvents = events.filter((event) => event.type === EventType.MUSIC);
  const businessEvents = events.filter((event) => event.type === EventType.BUSINESS);
  const travelEvents = events.filter((event) => event.type === EventType.TRAVEL)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [eventType, setEventType] = useState("music");

  // Render festival cards
  const renderFestivalCards = (events: Event[]) => {
    if(loadingEvents) {
      return <LoadingState/>
    }

    return events?.map((event) => (
      <EventCard
        event={event}
        key={event.id}
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
