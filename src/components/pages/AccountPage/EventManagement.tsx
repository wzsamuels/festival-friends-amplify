import {useEffect, useState} from "react";
import {Festival, UserProfile} from "../../../models";
import {getUserEvents} from "../../../services/profileServices";
import useProfileStore from "../../../stores/profileStore";
import React from "react";
import Button from "../../common/Button/Button";
import {API} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import Modal from "../../common/Modal/Modal";
import {ToastData} from "../../../types";
import Spinner from "../../common/Spinner/Spinner";

const EventManagement = () => {
  const [events, setEvents] = useState<Festival[]>([])
  const userProfile = useProfileStore(state => state.userProfile)
  const setProfile = useProfileStore(state => state.setProfile)
  const [cancelling, setCancelling] = useState("")
  const [toastData, setToastData] = useState<ToastData>()

  useEffect(() => {
    getUserEvents(userProfile).then(events => setEvents(events))
  }, [userProfile])

  const cancelSubscription = async (subID: string | null | undefined, eventID: string) => {
    if(!subID) {
      alert('No subscription ID found')
      return
    }
    try {
      const response = await API.post('stripeAPI', '/cancel-subscription', {
        body: {
          subID: subID
        },
      });
      console.log(response)
      setEvents(events => events.filter(event => event.subID !== subID))
    } catch (e) {
      console.log("Error canceling sub:", e)
    }
  }

  const deleteAllEvents = async () => {
    events.map(async (event) => await DataStore.delete(event))
    setEvents([]);
  }

  const clearCustomerID = async () => {
    const latestProfile = await DataStore.query(UserProfile, userProfile?.id as string)
    const updatedProfile = await DataStore.save(UserProfile.copyOf(latestProfile as UserProfile, updated => {
      updated.customerID = ""
    }))
    setProfile(updatedProfile)
  }

  return (
    <div>
      { events.map(event =>
        <div key={event.id}>
          <div>Event: {event.name}</div>
          <div>Event SubID: {event.subID}</div>
          <div>Event CustomerID: {event.customerID}</div>
          <Button
            disabled={cancelling === event.id}
            className="disabled:opacity-50"
            onClick={() => cancelSubscription(event.subID, event.id)}
          >
            {cancelling === event.id ? <span>Cancelling subscription... <Spinner/></span> : "Cancel Subscription"}
          </Button>
        </div>
      )}
      <Button onClick={deleteAllEvents}>Delete All Events</Button>
      <Button onClick={clearCustomerID}>Clear Customer ID</Button>
    </div>
  )
}

export default EventManagement