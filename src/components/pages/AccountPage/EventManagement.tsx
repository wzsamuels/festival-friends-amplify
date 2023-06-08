import {useEffect, useState} from "react";
import {Event, Profile} from "../../../models";
import {getUserEvents} from "../../../services/profileServices";
import useProfileStore from "../../../stores/profileStore";
import React from "react";
import Button from "../../common/Button/Button";
import {API} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import {ToastData} from "../../../types";
import Toast from "../../common/Toast/Toast";

const EventManagement = () => {
  const [events, setEvents] = useState<Event[]>([])
  const userProfile = useProfileStore(state => state.userProfile)
  const setProfile = useProfileStore(state => state.setProfile)
  const [cancelling, setCancelling] = useState("")
  const [toastData, setToastData] = useState<ToastData>()

  useEffect(() => {
    getUserEvents(userProfile).then(events => setEvents(events))
  }, [userProfile])

  const cancelSubscription = async (subscriptionID: string | null | undefined, eventID: string) => {
    if(!subscriptionID) {
      alert('No subscription ID found')
      return
    }
    setCancelling(eventID)
    try {
      const response = await API.post('stripe', '/cancelSubscription', {
        body: {
          subscriptionID: subscriptionID
        },
      });
      console.log(response)
      //setEvents(events => events.filter(event => event.subID !== subID))
      setEvents(events => events.map(event => event.id === eventID ? {...event, cancelled: true} : event))
      setCancelling("")
      setToastData({
        message: "Subscription Cancelled",
        type: "success"
      })
      setCancelling("");
    } catch (e) {
      console.log("Error canceling sub:", e)
    }
  }

  const deleteAllEvents = async () => {
    events.map(async (event) => await DataStore.delete(event))
    setEvents([]);
  }

  const clearCustomerID = async () => {
    const latestProfile = await DataStore.query(Profile, userProfile?.id as string)
    const updatedProfile = await DataStore.save(Profile.copyOf(latestProfile as Profile, updated => {
      updated.customerID = ""
    }))
    setProfile(updatedProfile)
  }

  const renderButtonText = (event: Event) => {
    if (cancelling === event.id) {
      return "Cancelling subscription..."
    }
    if(event.cancelled) {
      return "Subscription Cancelled"
    }
    else {
      return "Cancel Subscription"
    }
  }

  return (
    <div>
      { events.map(event =>
        <div key={event.id}>
          <div>Event: {event.name}</div>
          <div>Event SubID: {event.subscriptionID}</div>
          <div>Event CustomerID: {event.customerID}</div>
          {event.cancelled && <div className="text-red-500">Event Cancelled</div>}
          <Button
            disabled={cancelling === event.id || event.cancelled}
            className="disabled:opacity-50"
            onClick={() => cancelSubscription(event.subscriptionID, event.id)}
          >
            {renderButtonText(event)}
          </Button>
        </div>
      )}
      <Button onClick={deleteAllEvents}>Delete All Events</Button>
      <Button onClick={clearCustomerID}>Clear Customer ID</Button>
      { toastData && <Toast toastData={toastData} />}
    </div>
  )
}

export default EventManagement