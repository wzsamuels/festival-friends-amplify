import Button from "../../components/common/Button/Button";
import React, {useEffect, useState} from "react";
import {SubmitHandler} from "react-hook-form";
import {v4 as uuidv4} from "uuid";
import {Storage} from "@aws-amplify/storage";
import {API} from "@aws-amplify/api";
import {DataStore} from "@aws-amplify/datastore";
import {Event, Profile} from "../../models";
import getErrorMessage from "../../lib/getErrorMessage";
import Header from "../../components/layout/Header";
import {useAuthenticator} from "@aws-amplify/ui-react";
import useProfileStore from "../../stores/profileStore";
import {Link, useSearchParams} from "react-router-dom";
import EventForm from "../../components/ui/EventForm";
import {EventInputs} from "../../types";
import {Capacitor} from "@capacitor/core";
import {CheckIcon} from "@heroicons/react/24/solid";

type EventPlan = "monthly" | "daily"
type FormState = "plan" | "details" | "success"

const SubmitEventPage = () => {
  const [plan, setPlan] = useState<EventPlan>("monthly")
  const [formState, setFormState] = useState<FormState>("plan")
  const [sessionID, setSessionID] = useState("")
  const [searchParams] = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const { route } = useAuthenticator((context) => [context.route]);
  const userProfile = useProfileStore((state) => state.userProfile);
  const setProfile = useProfileStore((state) => state.setProfile);


  useEffect(() => {
    if(searchParams.get("success")) {
      const sessionID = searchParams.get("session_id");
      if(sessionID) {
        setSessionID(sessionID);
      }
    }
  }, [searchParams])

  const makePayment:SubmitHandler<EventInputs> = async (data) => {
    const { selectedFile, ...restData } = data;
    if(!userProfile || !selectedFile) return;
    setSubmitting(true);

    try {
      console.log("Creating event image...")
      const id = uuidv4();
      const key = `event-images/${id}.${selectedFile.type.split("/")[1]}`
      await Storage.put(key, selectedFile, {
        contentType: selectedFile.type,
      });

      console.log("Creating event...")
      const newEvent = await DataStore.save(
        new Event({
          ...restData,
          image: key,
          approved: false,
          hasPaid: false
        })
      );

      console.log("Creating payment...")
      const response = await API.post('stripe', '/checkout', {
        body: {
          price: plan === "monthly" ? import.meta.env.VITE_MONTHLY_PRICE : import.meta.env.VITE_DAILY_PRICE,
          email: userProfile.email,
          customerID: userProfile.customerID,
          eventID: newEvent.id,
          domain: import.meta.env.VITE_DOMAIN
        },
      });

      console.log("Updating user profile...")
      if(!userProfile.customerID) {
        const latestProfile = await DataStore.query(Profile, userProfile.id)
        if(!latestProfile) return;
        const updatedProfile =  await DataStore.save(Profile.copyOf(latestProfile, (updated) => {
          updated.customerID = response.customerID;
        }))
        setProfile(updatedProfile);
      }

      console.log("Updating event...")
      const updatedEvent = await DataStore.save(Event.copyOf(newEvent, (updated) => {
        updated.customerID = response.customerID;
      }))

      console.log("Redirecting to Stripe...")
      window.location.href = response.url;
    } catch (e) {
      console.log(getErrorMessage(e));
    } finally {
      setSubmitting(false);
    }
  }

  if(route !== 'authenticated') {
    return null;
  }

  if (Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === "android") {
    return (
      <>
        <Header />
        <p>We currently do not support submitting events on iOS or Android.</p>
        <p>Please visit <a href="https://eventfriends.app" target="_blank" rel="noreferrer">https://eventfriends.app</a> to submit your event.</p>
        <p>If you have any questions about the event submission process, please contact us at <a href="mailto:XXXXXXXXXXXXXXXXXXXXXX">placeholder@test.com</a></p>
        <p>Thank you for your patience!</p>
      </>
    )
  }

  if(sessionID) {
    return (
      <>
        <Header/>
        <div className="relative w-full h-full min-h-[calc(100vh-5rem)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl">
          <h1 className="text-4xl font-bold">Thank you for your submission!</h1>
          <p className="text-xl my-4">
            Your event has been submitted successfully! You can cancel your event at any time by visiting your <Link to="/account/events">account.</Link>
          </p>
          <p>Please note that your payment is reoccurring until you cancel the subscription. It is your responsible to cancel your subscription after your event has ended. Your event will be immediately published on our site, but we reserve the right to remove it if we find the content to be harmful to our community.</p>
          <Button
            className="mt-4 flex justify-center"
            onClick={() => {
              setSessionID("")
              setFormState("plan")
            }}
            >Submit Another Event</Button>
        </div>
        </div>
      </>
    )
  }

  const renderForm = () => {
    if (formState === "plan") {
      return (
        <>
          <h2 className='text-xl'>Have your event featured on Event Friends!</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 p-4 max-w-5xl w-full">
            <div
              className="border border-gray-300 p-4 shadow-xl w-full max-w-md flex flex-col h-full min-h-[17rem] justify-between"
            >
              <div>
                <h2 className="text-lg my-1">Daily Plan</h2>
                <div className="my-2">$4.99 / billed daily</div>
                <SellingPoints/>
              </div>
              <Button
                variation="outline"
                onClick={() => {
                  setPlan("daily")
                  setFormState("details")
                }}
              >
                Select Plan
              </Button>
            </div>
            <div
              className="border border-gray-300 p-4 shadow-xl w-full max-w-md flex flex-col h-full min-h-[17rem] justify-between"
            >
              <div>
                <div className="flex justify-between">
                  <h2 className='text-lg'>Monthly Plan</h2>
                  <span className='bg-lightYellow px-2 py-1 rounded-xl' >Most Popular!</span>
                </div>
                <div className="my-2">$89.82 / billed monthly</div>
                <span className="flex items-center my-2">
                  <CheckIcon className="mr-2 h-6 text-darkGreen"/>
                  <span className="bg-lightGreen px-2 py-1 rounded-xl">40% Off Daily Billing!</span>
                </span>
                <span className="flex items-center my-2">
                  <CheckIcon className="mr-2 h-6 text-darkGreen basis-[35px]"/>
                  <span className="bg-lightGreen px-2 py-1 rounded-xl">Boost your event! Monthly billed events appear before daily billed events.</span>
                </span>
                <SellingPoints/>
              </div>
              <Button
                onClick={() => {
                  setPlan("monthly")
                  setFormState("details")
                }}
              >
                Select Plan
              </Button>
            </div>
          </div>
        </>
      )
    }

    if(formState === "details") {
      return (
        <>
          <EventForm onSubmit={makePayment} submitting={submitting}/>
          <Button type="button" variation="outline" onClick={() => setFormState("plan")} className="mr-4">Back</Button>
        </>
      )
    }
  }

  return (
    <div>
      <Header />
      <h1 className="mt-4 text-xl md:text-2xl text-center">Submit Event</h1>
      <div className="p-4 flex flex-col items-center justify-center">
        {renderForm()}
      </div>
    </div>
  )
};

export default SubmitEventPage;

const SellingPoints = () => {
  return (
    <>
      <span className="flex items-center"><CheckIcon className="mr-2 h-6 text-darkGreen"/>Have your event featured on Event Friends!</span>
      <span className="flex items-center"><CheckIcon className="mr-2 h-6 text-darkGreen"/>Let users shared their interest in your event!</span>
      <span className="flex items-center"><CheckIcon className="mr-2 h-6 text-darkGreen"/>Let users purchase tickets to your event!</span>
    </>
  )
}