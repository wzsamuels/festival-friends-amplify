import Button from "../../common/Button/Button";
import React, {useEffect, useState} from "react";
import {SubmitHandler} from "react-hook-form";
import {v4 as uuidv4} from "uuid";
import {API, Storage} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import {Event, Profile} from "../../../models";
import getErrorMessage from "../../../lib/getErrorMessage";
import Header from "../../layout/Header";
import {useAuthenticator} from "@aws-amplify/ui-react";
import useProfileStore from "../../../stores/profileStore";
import { useSearchParams } from "react-router-dom";
import EventForm from "../AdminPage/EventForm";
import {EventInputs} from "../../../types";

type EventPlan = "monthly" | "daily"
type FormState = "plan" | "details" | "success"

const MONTHLY_PRICE = "price_1NF7b9IHoFjkR3tBgIOyZIV2"
const DAILY_PRICE = "price_1NF70gIHoFjkR3tBDMNf67Cd"

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
      alert(selectedFile.type);
      const key = `event-images/${id}.${selectedFile.type.split("/")[1]}`
      alert(key)
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
          price: plan === "monthly" ? MONTHLY_PRICE : DAILY_PRICE,
          email: userProfile.email,
          customerID: userProfile.customerID,
          eventID: newEvent.id,
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
      alert(getErrorMessage(e));
    } finally {
      setSubmitting(false);
    }
  }

  const createPortal = async () => {
    const response = await API.post('stripeAPI', '/create-payment-portal', {
      body: {
        customerID: userProfile?.customerID,
      },
    });
    console.log(response)
    window.location.href = response;
  }

  if(route !== 'authenticated') {
    return null;
  }

  if(sessionID) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Header/>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold">Thank you for your submission!</h1>
          <p className="text-xl">
            We will review your submission and get back to you as soon as possible.
          </p>
          <div className="mt-4">
            <Button variation="outline" onClick={() => createPortal()}>
              Manage Subscription
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const renderForm = () => {
    if (formState === "plan") {
      return (
        <div className="flex flex-wrap justify-center items-center gap-4 p-4 max-w-5xl w-full">
          <div
            className="border border-gray-300 p-4 shadow-xl w-full max-w-md"
          >
            <h2>Daily</h2>
            <div>$4.99 / billed daily</div>
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
            className="border border-gray-300 p-4 shadow-xl w-full max-w-md"
          >
            <div className="flex justify-between">
              <h2>Monthly</h2>
              <span>Most Popular</span>
            </div>
            <div>$89.82 / billed monthly</div>
            <div>40% Off Daily Billing!</div>
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