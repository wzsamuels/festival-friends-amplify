import AdminEventCard from "../AdminEventCard";
import React, {useEffect, useState} from "react";
import {Event} from "../../../../models";
import useDataClearedStore from "../../../../stores/dataClearedStore";
import {approveEvent, getAllEvents, rejectEvent} from "../../../../services/eventServices";

const ApproveEventPage = () => {
  const [unapprovedEvents, setUnapprovedEvents] = useState<Event[]>([]);
  const dataCleared = useDataClearedStore(state => state.dataCleared);

  useEffect(() => {
    if(!dataCleared) return;

    try {
      getAllEvents().then(events => setUnapprovedEvents(events.filter(event => !event.approved)));
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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl text-center my-4">Events Needing Approval</h1>
        { unapprovedEvents.length > 0 ?
          <div className='flex flex-wrap gap-4 w-full'>
            {
              unapprovedEvents.map(event =>
                <AdminEventCard key={event.id} event={event} onApprove={handleEventApproved} onReject={handleEventRejected} />)
            }
          </div>
          :
          <h1 className="text-lg md:text-xl text-center my-4">No events to approve</h1>
        }
      </div>
  );
}

export default ApproveEventPage;