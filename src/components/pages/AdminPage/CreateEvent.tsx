import React, {useState} from "react";
import {SubmitHandler} from "react-hook-form";
import {EventInputs, ToastData} from "../../../types";
import {createEvent} from "../../../services/eventServices";
import EventForm from "./EventForm";
import Toast from "../../common/Toast/Toast";

const CreateEvent = () => {
  const [submitting, setSubmitting] = useState(false);
  const [toastData, setToastData] = useState<ToastData | null>(null);

  const handleEventCreate: SubmitHandler<EventInputs> = async (data) => {
    setSubmitting(true);
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
    setSubmitting(false);
  }

  return (
    <>
      <h1 className="text-xl md:text-2xl">Create Event</h1>
      <EventForm onSubmit={handleEventCreate} submitting={submitting}/>
      {toastData &&
        <Toast toastData={toastData}/>
      }
    </>
  )
}

export default CreateEvent;