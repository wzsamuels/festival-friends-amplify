// React imports
import React, {useState, useMemo} from "react";
// Local imports
import {EventType, Event} from "../../models";
import EventCard from "../../components/ui/EventCard";
import Header from "../../components/layout/Header";
import EventSearchModal from "./Modals/EventSearchModal";

import SegmentSlide from "../../components/common/Segment/SegmentSlide";
import Spinner from "../../components/common/Spinner/Spinner";
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import useEventStore from "../../stores/eventStore";

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
  const events = useEventStore(state => state.events)
  const { loadingEvents, error} = useEventStore();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [eventType, setEventType] = useState<string>("all");

  const eventMapping = useMemo<{ [key: string]: Event[] }>(() => {
    const eventTypes: { [key: string]: EventType } = {
      music: EventType.MUSIC,
      sport: EventType.SPORT,
      business: EventType.BUSINESS,
      travel: EventType.TRAVEL
    };

    const mapping: { [key: string]: Event[] } = {};
    for (const type in eventTypes) {
      mapping[type] = events.filter(event => event.type === eventTypes[type]);
    }
    return mapping;
  }, [events]);

  const filteredEvents = useMemo<Event[]>(() => {
    if (eventType === 'all') {
      return events;
    } else {
      return eventMapping[eventType] || [];
    }
  }, [eventType, eventMapping, events]);

  if(loadingEvents) {
    return (
      <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-xl md:text-2xl p-8">Loading Events</div>
          <Spinner/>
        </div>
      </>
    )
  }

  if(error) {
    return (
      <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-xl md:text-2xl p-8">Error fetching events!</div>
        </div>
      </>
    )
  }

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
      <div className="pt-10 min-[400px]:pt-0 h-full min-h-[calc(100vh-6rem)] overflow-hidded">
        <AutoSizer>
          {({ height, width }: {height: number; width: number}) => {
            const numColumns = width > 1600 ? 4 : width > 1200 ? 3 : width > 800 ? 2 : 1; // replace these values with actual breakpoint widths
            return (
              <Grid
                key={eventType}
                columnCount={numColumns}
                columnWidth={width / numColumns}
                height={height}
                rowCount={Math.ceil(filteredEvents.length / numColumns)}
                rowHeight={700} // replace with the actual row height
                width={width}
                className="flex justify-center"
                style={{overflowX: "hidden"}}
                overscanRowCount={2}
              >
                {renderCell}
              </Grid>
            );
          }}
        </AutoSizer>
      </div>
      <EventSearchModal
        isOpen={isSearchModalOpen}
        setIsOpen={setIsSearchModalOpen}
      />
    </>
  );
};

export default EventPage;
