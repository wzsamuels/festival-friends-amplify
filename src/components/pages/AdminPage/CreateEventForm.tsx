import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import Select from "../../common/Select";
import states from "../../../data/states";
import {EventType} from "../../../models";
import TextArea from "../../common/TextArea";
import Button from "../../common/Button/Button";
import ImageUpload from "../../common/ImageUpload";
import Toast from "../../common/Toast/Toast";
import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {EventInputs, ToastData} from "../../../types";

const CreateEventForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm<EventInputs>();
  const [eventImage, setEventImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [toastData, setToastData] = useState<ToastData | null>(null);

  const createEvent: SubmitHandler<EventInputs> = async (data) => {

  }
  return (
    <form onSubmit={handleSubmit(createEvent)}>
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

export default CreateEventForm;