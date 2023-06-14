import Select from "../common/Select";
import states from "../../data/states";
import {EventType} from "../../models";
import TextArea from "../common/TextArea";
import Button from "../common/Button/Button";
import ImageUpload from "../common/ImageUpload";
import React, {useEffect, useState} from "react";
import useFilePreview from "../../hooks/useFilePreview";
import {SubmitHandler, useForm} from "react-hook-form";
import {EventInputs} from "../../types";
import { Event } from "../../models";
import {getEvent, getEventImageURL} from "../../services/eventServices";

interface EventFormProps {
  eventID?: string;
  onSubmit: SubmitHandler<EventInputs>;
  submitting: boolean;
  className?: string;
}

const EventForm = ({eventID, onSubmit, submitting, className} : EventFormProps) => {
  const [event, setEvent] = useState<Event>();
  const { preview, selectedFile, setSelectedFile } = useFilePreview();
  const { register, reset, handleSubmit, setValue, formState: { errors } } = useForm<EventInputs>();

  useEffect(() => {
    register("selectedFile",{ required: true});
  }, [])

  useEffect(() => {
    if(!eventID) return;

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
        ticketURL: event?.ticketURL,
        url: event?.url
      })
    } catch (e) {
      console.log("Error resetting form", e)
    }
  }, [event])

  useEffect(() => {
    setValue("selectedFile", selectedFile);
  }, [selectedFile]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`p-4 max-w-xl w-full ${className}`}>
      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">Name</label>
        <input
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0"
          {...register("name",  {required: true})}/>
      </div>
      {errors.name && <p className='text-red-500 text-sm'>This field is required</p>}
      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">Genre / Category</label>
        <input
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0"
          placeholder="Ex. Rock, Beach Trip, Business Conference"
          {...register("genre",  {required: true})}/>
      </div>
        {errors.genre && <p className='text-red-500 text-sm'>This field is required</p>}
      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">State</label>
        <Select
          {...register("state", { required: true })}
          name="state"
          defaultValue=""
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0 max-w-[10rem]"
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

      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">City</label>
        <input
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0"
          {...register("city",  {required: true})}/>
      </div>
      {errors.city && <p className='text-red-500 text-sm'>This field is required</p>}

      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">Address</label>
        <input
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0"
          {...register("address")}/>
      </div>

      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">Start Date</label>
        <input
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0 max-w-[10rem]"
          {...register("startDate",  {required: true})} type="date"/>
      </div>
      {errors.startDate && <p className='text-red-500 text-sm'>This field is required</p>}

      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">End Date</label>
        <input
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0 max-w-[10rem]"
          {...register("endDate",  {required: true})} type="date"/>
      </div>
      {errors.endDate && <p className='text-red-500 text-sm'>This field is required</p>}

      <h2 className="my-4">Event Image</h2>
      {
        preview || event?.image ?
          <img src={preview || getEventImageURL(event?.image) || ""} alt="Preview" className="w-full h-full" />
          :
          <div className="w-full h-full text-center min-h-[24rem] bg-gray-500 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl">No image selected</span>
          </div>
      }
      <div className="mt-6 flex justify-center w-full">
        <ImageUpload setSelectedFile={setSelectedFile}/>
      </div>
      {errors.selectedFile && <p className='text-red-500'>A Photo is required</p>}

      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">Description</label>
        <TextArea className="mt-2" {...register("description",  {required: true})}/>
      </div>

      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">Type</label>
        <Select
          {...register("type", { required: true })}
          name="type"
          defaultValue=""
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0 max-w-[10rem]"
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
      {errors.type && <p className='text-red-500 text-sm'>This field is required</p>}

      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">Website Link</label>
        <input
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0"
          {...register("url")}/>
      </div>
      <div className='flex flex-col sm:flex-row mt-4 mb-1'>
        <label className="sm:basis-[150px]">Ticket Link</label>
        <input
          className="border-b border-b-gray-400 flex-1 focus:border-b-brandYellow focus:outline-0 mt-2 sm:m-0"
          {...register("ticketURL")}/>
      </div>


      <div className='flex justify-center my-6'>
        <Button type="submit" className="disabled:opacity-50" disabled={submitting}>{submitting ? "Submitting..." : " Submit"}</Button>
      </div>
    </form>
  )
}

export default EventForm;