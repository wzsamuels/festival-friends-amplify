import Select from "../../common/Select";
import React, {useState} from "react";
import EventForm from "./EventForm";
import {SubmitHandler} from "react-hook-form";
import {EventInputs, ToastData} from "../../../types";
import {updateEvent} from "../../../services/eventServices";
import Toast from "../../common/Toast/Toast";
import {Event} from "../../../models";

const UpdateEvent = ({events}: {events: Event[]}) => {
  const [toastData, setToastData] = useState<ToastData | null>(null);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [submitting, setSubmitting] = useState(false);

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
    <>
      <h1 className="text-xl md:text-2xl text-center my-6">Update Events</h1>
      <Select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedEvent(e.target.value)}
        name="state"
        defaultValue=""
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
    </>
  )
}

export default UpdateEvent;