import Modal from "../../../components/common/Modal/Modal";
import React, { useState } from "react";
import { ModalProps } from "../../../@types/modal";
import { SubmitHandler, useForm } from "react-hook-form";
import InputWrapper from "../../../components/common/InputWrapper/InputWrapper";
import Label from "../../../components/common/Label/Label";
import Input from "../../../components/common/Input/Input";
import { Event } from "../../../models";
import Button from "../../../components/common/Button/Button";
import EventCard from "../../../components/ui/EventCard";
import {useQuery} from "react-query";
import {getPublicEvents} from "../../../services/eventServices";

interface EventSearchInput {
  state: string;
  city: string;
  genre: string;
  MUSIC: boolean;
  SPORT: boolean;
  BUSINESS: boolean;
  TRAVEL: boolean;
}

const EventSearchModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const [eventResults, setEventResults] = useState<Event[]>([]);
  const { data, isLoading, isError } = useQuery('publicEvents', getPublicEvents);
  const events = data as Event[];
  const { register, handleSubmit } = useForm<EventSearchInput>();

  const handleEventSearch: SubmitHandler<EventSearchInput> = async (data) => {
    console.log(data);

    Object.keys(data).forEach(key => {
      const typedKey = key as keyof EventSearchInput;
      if (data[typedKey] === false || data[typedKey] === '') {
        delete data[typedKey];
      }
    });

    const eventResults = events.filter(event =>
      // Check if location is included in the search criteria and if it matches the event's location.
      (!data['state'] || (event?.state && event.state.includes(data['state']))) &&
      (!data['city'] || (event.city && event.city.includes(data['city']))) &&
      // Check if genre is included in the search criteria and if it matches the event's genre.
      (!data['genre'] || event.genre.includes(data['genre'])) &&
      // Check if one of the event types is selected and if it matches the event's type.
      (data['MUSIC'] || data['SPORT'] || data['BUSINESS'] || data['TRAVEL'] ?
        (data['MUSIC'] && event.type === 'MUSIC') ||
        (data['SPORT'] && event.type === 'SPORT') ||
        (data['BUSINESS'] && event.type === 'BUSINESS') ||
        (data['TRAVEL'] && event.type === 'TRAVEL')
        : true)
    );

    setEventResults(eventResults);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Search Events"
      className="max-w-4xl"
    >
      <div className='flex flex-col items-center justify-center'>
        <form className="p-4 w-full max-w-md" onSubmit={handleSubmit(handleEventSearch)}>
          <InputWrapper className="mb-4">
            <Label>City</Label>
            <Input {...register("city")} />
          </InputWrapper>
          <InputWrapper className="mb-4">
            <Label>State</Label>
            <Input {...register("state")} />
          </InputWrapper>
          <InputWrapper className='mb-4'>
            <Label>Genre / Category</Label>
            <Input placeholder="Ex. Rock / Baseball / Medical Trade Show" {...register("genre")} />
          </InputWrapper>
          <div className='flex flex-wrap items-center justify-between w-full'>
            <div className='flex items-center  flex-1 mx-4'>
              <label>Music</label>
              <input type='checkbox' className='mx-2' {...register("MUSIC")}/>
            </div>
            <div className='flex items-center flex-1 mx-4'>
              <label>Sports</label>
              <input type='checkbox' className='mx-2' {...register("SPORT")}/>
            </div>
            <div className='flex items-center flex-1 mx-4'>
              <label>Business</label>
              <input type='checkbox' className='mx-2' {...register("BUSINESS")}/>
            </div>
            <div className='flex items-center  flex-1 mx-4'>
              <label>Travel</label>
              <input type='checkbox' className='mx-2' {...register("TRAVEL")}/>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button
              variation="outline"
              type="reset"
              className="mr-6"
              onClick={() => {
                setEventResults([]);
              }}
            >
              Reset
            </Button>
            <Button type="submit">Search</Button>
          </div>
        </form>
        <div className="grid gap-0 sm:gap-2 md:gap-4 justify-items-center grid-cols-1 md:grid-cols-2 items-center">
          {eventResults.map((event) => (
            <EventCard className='m-4' event={event} key={event.id} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default EventSearchModal;
