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
import {AnimatePresence, motion} from "framer-motion";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {ModalProps} from "../../@types/modal";
import Modal from "../../components/common/Modal/Modal";
import Button from "../../components/common/Button/Button";
import {IonContent, IonPage} from "@ionic/react";

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
  }
];

const EventPage = () => {
  // Filter events by type
  const events = useEventStore(state => state.events)
  const { loadingEvents, error} = useEventStore();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [eventType, setEventType] = useState<string>("all");
  const [shareOpen, setShareOpen] = useState(true);
  const [promoteModalOpen, setPromoteModalOpen] = useState(false);
  //const [attendees, setAttendees] = useState<Map

  // TODO Determine is performance boost from fetching attendees here instead of inside each EventCard component

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
    <IonPage>
      <Header
        secondChild={
          <div className="min-[400px]:hidden">
            <SegmentSlide
              selected={eventType}
              setSelected={setEventType}
              items={segmentItems}
              className="flex"
            />
          </div>
        }
      >
        <SegmentSlide
          selected={eventType}
          setSelected={setEventType}
          items={segmentItems}
          className="hidden min-[400px]:flex"
        />
      </Header>
      <IonContent>
        <div className="h-full">
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
        <AnimatePresence>
          {shareOpen && (
            <motion.div
              className="fixed w-full flex justify-center"
              initial={{opacity: 0, bottom:  -50}}
              animate={{opacity: 1, bottom:  0}}
              exit={{opacity: 0, bottom:  -50}}
              transition={{duration: 1, type: "spring"}}
            >
              <div className="max-w-xl z-10 shadow-xl bg-darkYellow px-2 md:px-4 md:py-2 py-1 text-base md:text-lg flex flex-nowrap">
                <div>
                  Share Event Friends and receive a free event posting!
                  <span
                    className="underline cursor-pointer"
                    onClick={() => {setPromoteModalOpen(true); setShareOpen(false)}}
                  >
                    {' '}Learn more.
                  </span>
                </div>
                <div className="px-2 cursor-pointer" onClick={() => setShareOpen(false)}>
                  <XMarkIcon height={20} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <PromoteModal
          isOpen={promoteModalOpen}
          setIsOpen={setPromoteModalOpen}
        />
        <EventSearchModal
          isOpen={isSearchModalOpen}
          setIsOpen={setIsSearchModalOpen}
        />
      </IonContent>
    </IonPage>
  );
};

const PromoteModal = ({isOpen, setIsOpen} : ModalProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="max-w-xl" title="Share Events Friends and Promote Your Event!">
      <img src={"https://twinsilver.mo.cloudinary.net/eventfriends/public/website/promote_image.jpg?tx=q_auto,f_auto"} className="w-full h-full"/>
      <div className="p-4">
        <h1 className="text-xl my-4">Want to share your event with friends and help build our community?</h1>
        <p className="">Send us a link to a social media post sharing https://www.eventfriends.app and we'll give you a free event posting!</p>
        <div className="flex justify-center mt-4">
          <Button onClick={() => setIsOpen(false)}>OK</Button>
        </div>
      </div>
    </Modal>
  )
}

export default EventPage;
