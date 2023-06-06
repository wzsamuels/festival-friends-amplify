import InputWrapper from "../../common/InputWrapper/InputWrapper";
import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import Select from "../../common/Select";
import states from "../../../data/states";
import TextArea from "../../common/TextArea";
import Button from "../../common/Button/Button";
import React, {useEffect, useState} from "react";
import useFilePreview from "../../../hooks/useFilePreview";
import {SubmitHandler, useForm} from "react-hook-form";
import {v4 as uuidv4} from "uuid";
import {API, Storage} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import {Festival, UserProfile} from "../../../models";
import {EventType} from "../../../API";
import getErrorMessage from "../../../lib/getErrorMessage";
import Header from "../../layout/Header";
import {useAuthenticator} from "@aws-amplify/ui-react";
import useProfileStore from "../../../stores/profileStore";
import { useSearchParams } from "react-router-dom";

interface EventInput {
  name: string;
  genre: string;
  startDate: string;
  endDate: string;
  city: string;
  state: string;
  address: string;
  description: string;
  type: EventType;
  url: string;
}

type EventPlan = "monthly" | "daily"
type FormState = "plan" | "details" | "success"

const MONTHLY_PRICE = "price_1NF7b9IHoFjkR3tBgIOyZIV2"
const DAILY_PRICE = "price_1NF70gIHoFjkR3tBDMNf67Cd"

const SubmitEventPage = () => {
  const { register, handleSubmit, reset, getValues } = useForm<EventInput>();
  const { selectedFile, setSelectedFile, preview } = useFilePreview();
  const [plan, setPlan] = useState<EventPlan>("monthly")
  const [formState, setFormState] = useState<FormState>("plan")
  const [success, setSuccess] = useState(false)
  const [sessionID, setSessionID] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
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

  const makePayment:SubmitHandler<EventInput> = async (data) => {
    if(!userProfile || !selectedFile) return;
    setSubmitting(true);

    try {

      const id = uuidv4();
      await Storage.put(`event-images/${id}`, selectedFile, {
        contentType: selectedFile.type,
      });

      const newEvent = await DataStore.save(
        new Festival({
          ...data,
          image: `event-images/${id}`,
          approved: false,
          hasPaid: false
        })
      );

      const response = await API.post('stripeAPI', '/checkout', {
        body: {
          price: plan === "monthly" ? MONTHLY_PRICE : DAILY_PRICE,
          email: userProfile.email,
          customerID: userProfile.customerID,
          eventID: newEvent.id,
        },
      });

      if(!userProfile.customerID) {
        const latestProfile = await DataStore.query(UserProfile, userProfile.id)
        if(!latestProfile) return;
        const updatedProfile =  await DataStore.save(UserProfile.copyOf(latestProfile, (updated) => {
          updated.customerID = response.customerID;
        }))
        setProfile(updatedProfile);
      }

      const updatedEvent = await DataStore.save(Festival.copyOf(newEvent, (updated) => {
        updated.customerID = response.customerID;
      }))

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
        <form onSubmit={handleSubmit(makePayment)} className='p-4 max-w-xl w-full'>
          <InputWrapper className='my-4'>
            <Label className="font-light uppercase">Name</Label>
            <Input {...register("name", {required: true})}/>
          </InputWrapper>
          <InputWrapper className='my-4'>
            <Label>Genre</Label>
            <Input {...register("genre", {required: true})} />
          </InputWrapper>
          <InputWrapper className='my-4'>
            <Label>Start date</Label>
            <Input type="date" {...register("startDate", {required: true})} />
          </InputWrapper>
          <InputWrapper className='my-4'>
            <Label>End date</Label>
            <Input type="date" {...register("endDate", {required: true})} />
          </InputWrapper>
          <InputWrapper className='my-4'>
            <Label>City</Label>
            <Input {...register("city", {required: true})} />
          </InputWrapper>
          <div className="flex flex-wrap my-4">
            <Label>State</Label>
            <Select
              {...register("state", { required: true })}
              name="state"
              defaultValue=""
            >
              <option value="" disabled>
                Select state
              </option>
              {states.map((state) => (
                <option key={state.code} value={state.name}>
                  {state.name}
                </option>
              ))}
            </Select>
          </div>
          <div className='flex flex-wrap my-4 items-center'>
            <Label>Address</Label>
            <Input {...register("address", {required: true})} />
          </div>
          <h2 className="my-4">Event image</h2>
          {
            preview ?
              <img src={preview} alt="preview" className="w-full h-full" />
              :
              <div className="w-full h-full text-center min-h-[24rem] bg-gray-500 relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl">No image selected</span>
              </div>
          }
          <div className="flex justify-center">
            <label
              htmlFor="upload-profile-image-photo"
              className="my-4 cursor-pointer flex justify-center px-4 py-2 uppercase font-light bg-green-950 text-white "
            >
              Select Event Image
            </label>
            <input
              type="file"
              id="upload-profile-image-photo"
              accept="image/png, image/jpeg"
              onChange={(e) =>
                e?.target?.files && setSelectedFile(e.target.files[0])
              }
              className="my-4 hidden"
            />
          </div>
          <div className='flex flex-wrap my-4 items-center'>
            <Label>Event description</Label>
            <TextArea {...register("description", {required: true})} />
          </div>
          <div className='flex flex-wrap my-4 items-center'>
            <Label>Event type</Label>
            <Select
              {...register("type", { required: true })}
              name="type"
              defaultValue=""
            >
              <option value="" disabled>
                Select event type
              </option>
              {Object.values(EventType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex justify-between my-4">
            <Button type="button" variation="outline" onClick={() => setFormState("plan")} className="mr-4">Back</Button>
            <Button type="submit" className="disabled:opacity-50" disabled={submitting}>{submitting ? "Submitting..." : " Submit"}</Button>
          </div>
        </form>
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