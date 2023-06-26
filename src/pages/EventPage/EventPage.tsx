// React imports
import React, {useState} from "react";

// Local imports
import {EventType, Event} from "../../models";
import EventCard from "../../components/ui/EventCard";
import Header from "../../components/layout/Header";
import EventSearchModal from "./Modals/EventSearchModal";
import useEventStore from "../../stores/eventStore";
import LoadingState from "../../components/ui/LoadingState";
import SegmentSlide from "../../components/common/Segment/SegmentSlide";
import Spinner from "../../components/common/Spinner/Spinner";
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

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
    type: "sport", label: "Sports"
  },
  {
    id: 3,
    type: "business", label: "Business"
  },
  {
    id: 4,
    type: "travel", label: "Travel"
  }
];

const EventPage = () => {
  // Filter events by type
  const events = useEventStore(state => state.events).filter((event) => !event.cancelled);
  const loadingEvents = useEventStore(state => state.loadingEvents)
  const sportEvents = events.filter((event) => event.type === EventType.SPORT);
  const musicEvents = events.filter((event) => event.type === EventType.MUSIC);
  const businessEvents = events.filter((event) => event.type === EventType.BUSINESS);
  const travelEvents = events.filter((event) => event.type === EventType.TRAVEL)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [eventType, setEventType] = useState("all");
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

  console.log(filteredEvents)

  const renderCell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const index = rowIndex * numColumns + columnIndex;
    if(index >= filteredEvents.length) {
      return null;
    }
    const event = filteredEvents[index];
    return (
      <div style={{ ...style, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '1rem'}}>
        <EventCard
          event={event}

        />
      </div>
    );
  };

  // Decide on the number of columns based on the viewport size.
  const numColumns = window.innerWidth > 1400 ? 4 : window.innerWidth > 1200 ? 3 : window.innerWidth > 800 ? 2 : 1; // replace these values with actual breakpoint widths

  return (
    <>
      <Header
        className="min-[400px]:shadow-xl"
        onSearch={() => setIsSearchModalOpen(true)}>
        <SegmentSlide
          selected={eventType}
          setSelected={setEventType}
          items={segmentItems}
          className="hidden min-[400px]:flex"
        />
      </Header>
      <div className="fixed w-full z-10 min-[400px]:hidden shadow-xl">
        <SegmentSlide
          selected={eventType}
          setSelected={setEventType}
          items={segmentItems}
          className="flex"
        />
      </div>
      {
        (loadingEvents || events.length === 0 )?
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="text-xl md:text-2xl p-8">Loading Events</div>
            <Spinner/>
          </div>
          :
          <div className="pt-8 min-[400px]:pt-0 h-full min-h-[calc(100vh-3.8rem)] min-[400px]:min-h-[calc(100vh-5.8rem)]">
            <AutoSizer>
              {({ height, width }: {height: number; width: number}) => {
                const numColumns = window.innerWidth > 1600 ? 4 : window.innerWidth > 1200 ? 3 : window.innerWidth > 800 ? 2 : 1; // replace these values with actual breakpoint widths
                console.log(numColumns)
                return (
                  <Grid
                    key={numColumns}
                    columnCount={numColumns}
                    columnWidth={width / numColumns}
                    height={height}
                    rowCount={Math.ceil(filteredEvents.length / numColumns)}
                    rowHeight={700} // replace with the actual row height
                    width={width}
                    style={{ display: "flex", justifyContent: "center"}}
                  >
                    {renderCell}
                  </Grid>
                );
              }}
            </AutoSizer>
          </div>
      }
      <EventSearchModal
        isOpen={isSearchModalOpen}
        setIsOpen={setIsSearchModalOpen}
      />
    </>
  );
};

export default EventPage;
