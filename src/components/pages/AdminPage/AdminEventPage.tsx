import React, {useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {Event} from "../../../models";
import AdminEventCard from "./AdminEventCard";
import useDataClearedStore from "../../../stores/dataClearedStore";
import {approveEvent, rejectEvent} from "../../../services/eventServices";
import CreateEvent from "./CreateEvent";
import UpdateEvent from "./UpdateEvent";

export const loader = async () => {
  return await DataStore.query(Event);
}

const AdminEventPage = () => {
  //const eventData = useLoaderData() as Event[];
  const [events, setEvents] = useState<Event[]>([]);
  const [unapprovedEvents, setUnapprovedEvents] = useState<Event[]>([]);

  const dataCleared = useDataClearedStore(state => state.dataCleared);

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
        <CreateEvent/>
      </section>
      <section className="w-full max-w-xl my-8 mx-auto flex flex-col items-center">
        <UpdateEvent events={events}/>
      </section>
    </>
  )
}

export default AdminEventPage;