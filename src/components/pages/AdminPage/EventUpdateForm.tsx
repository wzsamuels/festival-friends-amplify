import React, {useContext, useEffect, useState} from "react";
import {EventType, Festival} from "../../../models";
import {SubmitHandler, useForm} from "react-hook-form";
import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import ImageUpload from "../../common/ImageUpload";
import Button from "../../common/Button/Button";
import {EventInputs, ToastData} from "../../../types";
import ImageContext from "../../../context/ImageContext";
import states from "../../../data/states";
import Select from "../../common/Select";
import {DataStore} from "@aws-amplify/datastore";
import TextArea from "../../common/TextArea";
import {getEvent} from "../../../services/eventServices";
import Toast from "../../common/Toast/Toast";
import {Storage} from "aws-amplify";
import {v4 as uuidv4} from "uuid";

const EventUpdateForm = ({eventID} : {eventID: string}) => {
  const [event, setEvent] = useState<Festival>()
  const [eventImage, setEventImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const { getSignedURL } = useContext(ImageContext);
  const { register, reset, handleSubmit, formState: { errors } } = useForm<EventInputs>();
  const [toastData, setToastData] = useState<ToastData | null>(null);

  useEffect(() =>{
    try {
      getEvent(eventID).then(event => setEvent(event as Festival))
    } catch(e) {
      console.log("Error getting event", e)
    }
  }, [eventID])


  const updateEvent: SubmitHandler<EventInputs> = async (data) => {
    if(!event) return;
    const originalEvent = await DataStore.query(Festival, event?.id);
    if(!originalEvent) return;
    let newImage = "";
    if(selectedFile) {
      const id = uuidv4();
      await Storage.remove(originalEvent.image);
      await Storage.put(`event-images/${id}`, selectedFile, {
        level: "public",
        contentType: selectedFile.type
      })
      newImage = `event-images/${id}`;
    }
    await DataStore.save(Festival.copyOf(originalEvent, updatedEvent => {
      updatedEvent.name = data.name;
      updatedEvent.genre = data.genre;
      updatedEvent.location = data.location;
      updatedEvent.state = data.state;
      updatedEvent.city = data.city;
      updatedEvent.address = data.address;
      updatedEvent.startDate = data.startDate;
      updatedEvent.endDate = data.endDate;
      updatedEvent.type = data.type;
      updatedEvent.description = data.description;
      updatedEvent.url = data.url;
      newImage && (updatedEvent.image = newImage);
    }))
    setToastData({
      type: "success",
      message: "Event updated!"
    })
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

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


  return (
    <form onSubmit={handleSubmit(updateEvent)}>
      <div className='flex flex-wrap my-4'>
        <Label>Name</Label>
        <Input {...register("name",  {required: true})}/>
      </div>
      <div className='flex flex-wrap my-4'>
        <Label>Genre</Label>
        <Input {...register("genre",  {required: true})}/>
      </div>
      <div className='flex flex-wrap my-4'>
        <Label>Location</Label>
        <Input {...register("location")}/>
      </div>
      <div className='flex flex-wrap my-4'>
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
      <div className='flex flex-wrap my-4'>
        <Label>City</Label>
        <Input {...register("city",  {required: true})}/>
      </div>
      <div className='flex flex-wrap my-4'>
        <Label>Address</Label>
        <Input {...register("address",  {required: true})}/>
      </div>
      <div className='flex flex-wrap my-4'>
        <Label>Start Date</Label>
        <Input {...register("startDate",  {required: true})} type="date"/>
      </div>
      <div className='flex flex-wrap my-4'>
        <Label>End Date</Label>
        <Input {...register("endDate",  {required: true})} type="date"/>
      </div>
      <div className='flex flex-wrap my-4'>
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
      <div className='flex flex-wrap my-4'>
        <Label>Description</Label>
        <TextArea {...register("description",  {required: true})}/>
      </div>
      <div className='flex flex-wrap my-4'>
        <Label>URL</Label>
        <Input {...register("url")}/>
      </div>
        <div className="flex flex-col items-center justify-center w-full p-4">
          <div className='max-w-xl'>
            <img className=" rounded-full" src={preview || eventImage} alt="Preview" />
          </div>
          <div className="mt-6 flex justify-center w-full">
            {
              preview ?
                <Button type="button" onClick={() => setSelectedFile(null)}>Cancel</Button>
                :
                <ImageUpload setSelectedFile={setSelectedFile}/>
            }
          </div>
        </div>
      <Button type="submit">Update Event</Button>
      {toastData &&
        <Toast toastData={toastData}/>
      }
    </form>
  )
}

export default EventUpdateForm