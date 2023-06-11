import Select from "../../../common/Select";
import React, {useEffect, useState} from "react";
import EventForm from "../EventForm";
import {SubmitHandler} from "react-hook-form";
import {EventInputs, ToastData} from "../../../../types";
import {getAllEvents, updateEvent} from "../../../../services/eventServices";
import Toast from "../../../common/Toast/Toast";
import {Event} from "../../../../models";
import useDataClearedStore from "../../../../stores/dataClearedStore";

const UpdateEventPage = () => {
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

  const handleEventUpdate: SubmitHandler<EventInputs> = async (data) => {
    setSubmitting(true);
    const updatedEvent = await updateEvent(selectedEvent, data);
    if(updatedEvent) {
      setToastData({
        type: "success",
        message: "Event updated!"
      })
    } else {
      setToastData({
        type: "error",
        message: "Error updating event!"
      })
    }
    setSubmitting(false);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl text-center">Update Events</h1>
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
      { selectedEvent && <EventForm eventID={selectedEvent} onSubmit={handleEventUpdate} submitting={submitting}/>}
      {toastData &&
        <Toast toastData={toastData}/>
      }
    </div>
  )
}

export default UpdateEventPage;