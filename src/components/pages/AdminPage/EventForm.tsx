import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import Select from "../../common/Select";
import states from "../../../data/states";
import {EventType} from "../../../models";
import TextArea from "../../common/TextArea";
import Button from "../../common/Button/Button";
import ImageUpload from "../../common/ImageUpload";
import React, {useContext, useEffect, useState} from "react";
import useFilePreview from "../../../hooks/useFilePreview";
import {SubmitHandler, useForm} from "react-hook-form";
import {EventInputs} from "../../../types";
import { Event } from "../../../models";
import ImageContext from "../../../context/ImageContext";
import {getEvent} from "../../../services/eventServices";

interface EventFormProps {
  eventID: string;
  onSubmit: SubmitHandler<EventInputs>
}

const eventTypes = ["SPORT", "BUSINESS", "MUSIC", "TRAVEL", "COLLEGE"];

const EventForm = ({eventID, onSubmit} : EventFormProps) => {
  const [event, setEvent] = useState<Event>();
  const [eventImage, setEventImage] = useState("");
  const { preview, selectedFile, setSelectedFile } = useFilePreview();
  const { register, reset, handleSubmit, setValue, formState: { errors } } = useForm<EventInputs>();
  const { getSignedURL } = useContext(ImageContext);

  console.log(Object.values(EventType))

  useEffect(() => {
    register("selectedFile",{ required: true});
  }, [])

  useEffect(() =>{
    try {
      getEvent(eventID).then(event => setEvent(event as Event))
    } catch(e) {
      console.log("Error getting event", e)
    }
  }, [eventID])

  useEffect(() => {
    if(!event) return;

    try {
      reset({
        name: event?.name,
        genre: event?.genre,
        state: event?.state || "",
        city: event?.city || "",
        address: event?.address || "",
        startDate: event?.startDate,
        endDate: event?.endDate,
        type: event?.type as EventType,
        description: event?.description,
        url: event?.url
      })
    } catch (e) {
      console.log("Error resetting form", e)
    }

    try {
      getSignedURL(event.image, "public").then(url => setEventImage(url));
    } catch(e) {
      console.log("Error getting signed URL", e)
    }
  }, [event])

  useEffect(() => {
    setValue("selectedFile", selectedFile);
  }, [selectedFile]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-4 max-w-xl w-full'>
      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>Name</Label>
        <Input {...register("name",  {required: true})}/>
      </div>
      {errors.name && <p className='text-red-500 text-sm'>This field is required</p>}
      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>Genre / Category</Label>
        <Input
          placeholder="Ex. Rock, Beach Trip, Business Conference"
          {...register("genre",  {required: true})}/>
      </div>
        {errors.genre && <p className='text-red-500 text-sm'>This field is required</p>}
      <div className='flex flex-wrap mt-4 mb-1'>
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
      {errors.state && <p className='text-red-500 text-sm'>This field is required</p>}
      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>City</Label>
        <Input {...register("city",  {required: true})}/>
      </div>
      {errors.city && <p className='text-red-500 text-sm'>This field is required</p>}
      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>Address</Label>
        <Input {...register("address")}/>
      </div>
      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>Start Date</Label>
        <Input {...register("startDate",  {required: true})} type="date"/>
      </div>
      {errors.startDate && <p className='text-red-500 text-sm'>This field is required</p>}

      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>End Date</Label>
        <Input {...register("endDate",  {required: true})} type="date"/>
      </div>
      {errors.endDate && <p className='text-red-500 text-sm'>This field is required</p>}

      <h2 className="my-4">Event Image</h2>
          {
            preview || eventImage ?
              <img src={preview || eventImage || ""} alt="Preview" className="w-full h-full" />
              :
              <div className="w-full h-full text-center min-h-[24rem] bg-gray-500 relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl">No image selected</span>
              </div>
          }
        <div className="mt-6 flex justify-center w-full">
          <ImageUpload setSelectedFile={setSelectedFile}/>
        </div>
        {errors.selectedFile && <p className='text-red-500'>A Photo is required</p>}

      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>Description</Label>
        <TextArea {...register("description",  {required: true})}/>
      </div>

      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>Type</Label>
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
      <div className='flex flex-wrap mt-4 mb-1'>
        <Label>Website</Label>
        <Input {...register("url")}/>
      </div>
      <div className='flex justify-center my-6'>
        <Button type="submit">Create New Event</Button>
      </div>
    </form>
  )
}

export default EventForm;