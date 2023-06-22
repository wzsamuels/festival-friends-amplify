import React, {useEffect, useState} from "react";
import {ToastData} from "../../../types";
import Select from "../../../components/common/Select";
import Toast from "../../../components/common/Toast/Toast";
import {Event} from "../../../models";
import Button from "../../../components/common/Button/Button";
import {deleteEvent, getAllEvents} from "../../../services/eventServices";
import useDataClearedStore from "../../../stores/dataClearedStore";
import EventCardBase from "../../../components/ui/EventCardBase";

const DeleteEventPage = () => {
  const [toastData, setToastData] = useState<ToastData | null>(null);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const dataCleared = useDataClearedStore(state => state.dataCleared);

  useEffect(() => {
    if(!dataCleared) return;

    try {
      getAllEvents().then(events => setEvents(events));
    } catch (e) {
      console.log("Error getting events", e)
    }
  }, [])

  const handleDeleteEvent = async () => {
    setSubmitting(true);
    try {
      await deleteEvent(selectedEvent);
      setEvents(events.filter((event) => event.id !== selectedEvent));
      setSelectedEvent("");
      setToastData({
        message: "Event deleted successfully",
        type: "success",
      })
    } catch (e) {
      setToastData({
        message: "Error deleting event",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl text-center">Delete Events</h1>
      <Select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedEvent(e.target.value)}
        name="state"
        defaultValue=""
        className="my-4"
      >
        <option value="" disabled>
          Select event
        </option>
        {events.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </Select>
      { selectedEvent &&
        <div>
          <EventCardBase event={events.find((event) => event.id === selectedEvent) as Event}/>
          <div>
            <Button onClick={handleDeleteEvent} disabled={submitting}>Delete Event</Button>
          </div>
        </div>
      }
      {toastData &&
        <Toast toastData={toastData}/>
      }
    </div>
  )
}

export default DeleteEventPage;