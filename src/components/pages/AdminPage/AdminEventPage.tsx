import React, {useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {Festival} from "../../../models";
import {FestivalCreateForm} from "../../../ui-components";
import AdminEventCard from "./AdminEventCard";
import Select from "../../common/Select";
import EventUpdateForm from "./EventUpdateForm";
import useDataClearedStore from "../../../stores/dataClearedStore";

export const loader = async () => {
  return await DataStore.query(Festival);
}

const AdminEventPage = () => {
  //const eventData = useLoaderData() as Festival[];
  const [events, setEvents] = useState<Festival[]>([]);
  const [unapprovedEvents, setUnapprovedEvents] = useState<Festival[]>([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const dataCleared = useDataClearedStore(state => state.dataCleared);

  useEffect(() => {
    if(!dataCleared) return;

    try {
      const eventSub = DataStore.observeQuery(Festival)
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
    const latestEvent = await DataStore.query(Festival, eventID)
    if(!latestEvent) return;
    await DataStore.save(Festival.copyOf(latestEvent, updated => {
      updated.approved = true
    }))

    setUnapprovedEvents(state => state.filter(event => event.id !== eventID))
  }

  const handleEventRejected = async (eventID: string) => {
    await DataStore.delete(Festival, eventID);
    setUnapprovedEvents(state => state.filter(event => event.id !== eventID))
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
        <FestivalCreateForm />
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
        { selectedEvent && <EventUpdateForm eventID={selectedEvent} />}
      </section>

    </>
  )
}

export default AdminEventPage;