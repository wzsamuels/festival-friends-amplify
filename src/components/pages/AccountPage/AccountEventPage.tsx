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
import {Link} from "react-router-dom";

const AccountEventPage = () => {
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

      await DataStore.delete(Event, eventID);
      setEvents(events => events.filter(event => event.id !== eventID))
      //setEvents(events => events.map(event => event.id === eventID ? {...event, cancelled: true} : event))
      setToastData({
        message: "Subscription Cancelled",
        type: "success"
      })
      setCancelling("");
    } catch (e) {
      console.log("Error canceling sub:", e)
      setToastData({
        message: "Error canceling subscription",
        type: "error"
      })
    } finally {
      setCancelling("")
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
    <div className="my-6 flex flex-col items-center justify-center">
      <Link to="/submit-event" className="my-4"><Button>Submit New Event</Button></Link>
      <div className="flex flex-wrap justify-center ">
        { events.length ? events.map(event =>
          <div className="m-4 shadow-xl rounded-xl p-4" key={event.id}>
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
          )
          :
          <div>
            <div>No events found</div>
          </div>
        }
      </div>
      {/*
      <Button onClick={deleteAllEvents}>Delete All Events</Button>
      <Button onClick={clearCustomerID}>Clear Customer ID</Button>
      */}
      { toastData && <Toast toastData={toastData} />}
    </div>
  )
}

export default AccountEventPage