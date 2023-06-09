import React, {useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {Event} from "../../../models";
import AdminEventCard from "./AdminEventCard";
import Select from "../../common/Select";
import useDataClearedStore from "../../../stores/dataClearedStore";
import Toast from "../../common/Toast/Toast";
import {EventInputs, ToastData} from "../../../types";
import EventForm from "./EventForm";
import {SubmitHandler} from "react-hook-form";
import {approveEvent, createEvent, rejectEvent, updateEvent} from "../../../services/eventServices";

export const loader = async () => {
  return await DataStore.query(Event);
}

const AdminEventPage = () => {
  //const eventData = useLoaderData() as Event[];
  const [events, setEvents] = useState<Event[]>([]);
  const [unapprovedEvents, setUnapprovedEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const dataCleared = useDataClearedStore(state => state.dataCleared);
  const [toastData, setToastData] = useState<ToastData | null>(null);

  useEffect(() => {
    if(!dataCleared) return;

    try {
      const eventSub = DataStore.observeQuery(Event)
        .subscribe(({items}) => {
          setEvents(items);
          setUnapprovedEvents(items.filter(event => !event.approved));
        });
      return () => eventSub.unsubscribe();
    } catch (e) {
      console.log("Error subscribing to events", e)
    }
  }, [])

  const handleEventApproved = async (eventID: string) => {
    await approveEvent(eventID);
    setUnapprovedEvents(state => state.filter(event => event.id !== eventID))
  }

  const handleEventRejected = async (eventID: string) => {
    await rejectEvent(eventID);
    setUnapprovedEvents(state => state.filter(event => event.id !== eventID))
  }

  const handleEventCreate: SubmitHandler<EventInputs> = async (data) => {
    const newEvent = await createEvent(data);
    if(newEvent) {
      setToastData({
        type: "success",
        message: "Event created!"
      })
    } else {
      setToastData({
        type: "error",
        message: "Error creating event!"
      })
    }
  }

  const handleEventUpdate: SubmitHandler<EventInputs> = async (data) => {
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
  }

  return (
    <>
      <section className="w-full">
        <h1 className="text-xl md:text-2xl text-center my-4">Events Needing Approval</h1>
        <div className='flex flex-wrap gap-4 w-full'>
          { unapprovedEvents.map(event =>
            <AdminEventCard key={event.id} event={event} onApprove={handleEventApproved} onReject={handleEventRejected} />)
          }
        </div>
      </section>
      <section className="w-full max-w-xl my-8 mx-auto">
        <h1 className="text-xl md:text-2xl">Create Event</h1>
        <EventForm eventID={selectedEvent} onSubmit={handleEventCreate} />
      </section>
      <section className="w-full max-w-xl my-8 mx-auto flex flex-col items-center">
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
        { selectedEvent && <EventForm eventID={selectedEvent} onSubmit={handleEventUpdate} />}
      </section>
      {toastData &&
        <Toast toastData={toastData}/>
      }
    </>
  )
}

export default AdminEventPage;