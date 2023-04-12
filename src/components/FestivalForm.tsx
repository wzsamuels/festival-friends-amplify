import {SubmitHandler, useForm} from "react-hook-form";
import {DataStore} from "@aws-amplify/datastore";
import {Festival} from "../models";
import React from "react";

type FestivalInputs = {
  name: string,
  genre: string,
  image: string,
  location: string,
  startDate: string,
  endDate: string
}

const FestivalForm = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FestivalInputs>();
  const saveFestival: SubmitHandler<FestivalInputs> = async (data) => {
    console.log("Creating festival from data:", data)
    try {
      const newFest = await DataStore.save(
        new Festival({
          "name": data.name,
          "genre": data.genre,
          "image": data.image,
          "location": data.location,
          "startDate": data.startDate,
          "endDate": data.endDate,
          "userIDs": []
        })
      );
      console.log(newFest);
    } catch(err) {
      console.error("Error saving festival:", err)
    }
  }

  return (
    <form className='w-full max-w-2xl my-4 p-4' onSubmit={handleSubmit(saveFestival)}>
      <h2 className='my-4 text-xl'>Add Festival</h2>
      <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
        <label className='basis-[200px] shrink-0'>Name</label>
        <input className='px-4 py-2 border border-black flex-1' {...register("name", { required: true })} />
      </div>
      <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
        <label className='basis-[200px] shrink-0'>Genre</label>
        <input className='px-4 py-2 border border-black flex-1' {...register("genre", { required: true })} />
      </div>
      <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
        <label className='basis-[200px] shrink-0'>Image</label>
        <input className='px-4 py-2 border border-black flex-1' {...register("image", { required: true })} />
      </div>
      <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
        <label className='basis-[200px] shrink-0'>Location</label>
        <input className='px-4 py-2 border border-black flex-1' {...register("location", { required: true })} />
      </div>
      <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
        <label className='basis-[200px] shrink-0'>Start Date</label>
        <input type='date' className='px-4 py-2 border border-black flex-1' {...register("startDate", { required: true })} />
      </div>
      <div className='flex my-4 items-center [&>*]:mx-2 w-full justify-between flex-wrap'>
        <label className='basis-[200px] shrink-0'>End Date</label>
        <input type='date' className='px-4 py-2 border border-black flex-1' {...register("endDate", { required: true })} />
      </div>
      <div className='flex justify-center w-full my-6'>
        <input type='submit' className='px-4 py-2 border border-black rounded-xl  hover:bg-gray-500 hover:text-white'/>
      </div>
    </form>
  )
}

export default FestivalForm