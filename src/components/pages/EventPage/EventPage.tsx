// React imports
import React, {useState} from "react";

// Local imports
import {EventType, Event} from "../../../models";
import EventCard from "../../ui/EventCard";
import Header from "../../layout/Header";
import Segment from "../../common/Segment/Segment";
import EventSearchModal from "./Modals/EventSearchModal";
import useEventStore from "../../../stores/eventStore";
import LoadingState from "../../ui/LoadingState";
import Nav from "../../layout/Nav";

const navItems = [
  {
    content: "Music", link: "/"
  }
]

const segmentItems = [
  {
    id: 0,
    type: "all", label: "All"
  },
  {
    id: 1,
    type: "music", label: "Music"
  },
  {
    id: 2,
    type: "sport",
    label: "Sports"
  },
  {
    id: 3,
    type: "business", label: "Business"
  },
  {
    id: 4,
    type: "college", label: "College"
  },
  {
    id: 5,
    type: "all", label: "All"
  }
];

const EventPage = () => {
  // Filter events by type
  const events = useEventStore(state => state.events).filter((event) => !event.cancelled);
  //const [events, setEvents] = useState<Event[]>([]);
  const loadingEvents = useEventStore(state => state.loadingEvents)
  const sportEvents = events.filter((event) => event.type === EventType.SPORT);
  const musicEvents = events.filter((event) => event.type === EventType.MUSIC);
  const businessEvents = events.filter((event) => event.type === EventType.BUSINESS);
  const travelEvents = events.filter((event) => event.type === EventType.TRAVEL)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [eventType, setEventType] = useState("music");
  //const dataCleared = useDataClearedStore(state => state.dataCleared)

  /*
  useEffect(() => {
    if(!dataCleared) return;

    DataStore.query(Event, c => c.and(c => [
      c.cancelled.eq(false),
      c.hasPaid.eq(true),
      c.approved.eq(true)
    ]))
      .then(events => setEvents(events))
      .catch(err => console.log(err))
  },[])

   */

  // Render festival cards
  const renderFestivalCards = (events: Event[]) => {
    if(loadingEvents) {
      return <LoadingState/>
    }

    return events?.map((event) => (
      <EventCard
        event={event}
        key={event.id}
        className="m-4"
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
          className="hidden md:flex"
        />
      </Header>
      <Segment
        segmentType={eventType}
        setSegmentType={setEventType}
        items={segmentItems}
        className="flex md:hidden shadow-xl"
      />

      <div className="grid gap-0 sm:gap-2 md:gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
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
