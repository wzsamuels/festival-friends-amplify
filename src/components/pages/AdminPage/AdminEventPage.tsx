import React, {useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {useLoaderData} from "react-router-dom";
import {Festival} from "../../../models";
import {FestivalCreateForm} from "../../../ui-components";
import AdminEventCard from "./AdminEventCard";
import Select from "../../common/Select";
import EventUpdateForm from "../AccountPage/EventUpdateForm";

export const loader = async () => {
  return await DataStore.query(Festival);
}

const AdminEventPage = () => {
  const eventData = useLoaderData() as Festival[];
  const [events, setEvents] = useState(eventData.filter(event => !event.approved));
  const [selectedEvent, setSelectedEvent] = useState<Festival | undefined>();

  const handleEventApproved = async (eventID: string) => {
    const latestEvent = await DataStore.query(Festival, eventID)
    if(!latestEvent) return;
    await DataStore.save(Festival.copyOf(latestEvent, updated => {
      updated.approved = true
    }))

    setEvents(state => state.filter(event => event.id !== eventID))
  }

  const handleEventRejected = async (eventID: string) => {
    await DataStore.delete(Festival, eventID);
    setEvents(state => state.filter(event => event.id !== eventID))
  }

  return (
    <>
      <section className="w-full max-w-xl">
        <h1 className="text-xl md:text-2xl">Events Needing Approval</h1>
        <div className='flex flex-wrap gap-4 w-full'>
          { events.map(event =>
            <AdminEventCard key={event.id} event={event} onApprove={handleEventApproved} onReject={handleEventRejected} />)
          }
        </div>
      </section>
      <section className="w-full max-w-xl my-8">
        <h1 className="text-xl md:text-2xl">Create Event</h1>
        <FestivalCreateForm />
      </section>
      <section className="w-full max-w-xl my-8">
        <h1 className="text-xl md:text-2xl">Update Events</h1>
        <Select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedEvent(eventData.find(event => event.name === e.target.value))}
          name="state"
          defaultValue=""
        >
          <option value="" disabled>
            Select event
          </option>
          {eventData.map((event) => (
            <option key={event.id} value={event.name}>
              {event.name}
            </option>
          ))}
        </Select>
        { selectedEvent && <EventUpdateForm event={selectedEvent} />}
      </section>
    </>
  )
}

export default AdminEventPage;