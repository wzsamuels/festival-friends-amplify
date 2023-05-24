import Modal from "../../../common/Modal/Modal";
import React, { useState } from "react";
import { ModalProps } from "../../../../@types/modal";
import { SubmitHandler, useForm } from "react-hook-form";
import InputWrapper from "../../../common/InputWrapper/InputWrapper";
import Label from "../../../common/Label/Label";
import Input from "../../../common/Input/Input";
import { Festival } from "../../../../models";
import Button from "../../../common/Button/Button";
import EventCardBase from "../../../ui/EventCardBase";
import useEventStore from "../../../../stores/eventStore";

interface EventSearchInput {
  location: string;
  genre: string;
  MUSIC: boolean;
  SPORT: boolean;
  BUSINESS: boolean;
  TRAVEL: boolean;
}

const EventSearchModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const [eventResults, setEventResults] = useState<Festival[]>([]);
  const events = useEventStore(state => state.events);
  const { register, handleSubmit } = useForm<EventSearchInput>();

  const handleEventSearch: SubmitHandler<EventSearchInput> = async (data) => {
    console.log(data);

    Object.keys(data).forEach(key => {
      const typedKey = key as keyof EventSearchInput;
      if (data[typedKey] === false || data[typedKey] === '') {
        delete data[typedKey];
      }
    });

    console.log(data);

    const eventResults = events.filter(event =>
      // Check if location is included in the search criteria and if it matches the event's location.
      (!data['location'] || event.location.includes(data['location'])) &&
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
      title="Search Festivals"
      className="max-w-4xl"
    >
      <div className='flex flex-col items-center justify-center'>
        <form className="p-4 w-full max-w-md" onSubmit={handleSubmit(handleEventSearch)}>
          <InputWrapper className="mb-4">
            <Label>Location</Label>
            <Input {...register("location")} />
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
        <div className="mt-4 flex flex-wrap justify-center">
          {eventResults.map((event) => (
            <EventCardBase className='my-4 md:m-4' festival={event} key={event.id} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default EventSearchModal;
