import Modal from "../../../common/Modal/Modal";
import React, {useState} from "react";
import {ModalProps} from "../../../../@types/modal";
import {SubmitHandler, useForm} from "react-hook-form";
import InputWrapper from "../../../common/InputWrapper/InputWrapper";
import Label from "../../../Label/Label";
import Input from "../../../Input/Input";
import {DataStore} from "aws-amplify";
import {Festival, UserProfile} from "../../../../models";
import Button from "../../../common/Button/Button";
import EventCardBase from "../../../ui/EventCardBase";

interface EventSearchInput {
  location: string;
  genre: string;

}

const EventSearchModal = ({isOpen, setIsOpen} : ModalProps) => {
  const [eventResults, setEventResults] = useState<Festival[]>([])
  const { register, handleSubmit, reset} = useForm<EventSearchInput>()

  const handleEventSearch: SubmitHandler<EventSearchInput> = async data => {
    const filteredData: { field: string; value: string; }[] = []
    for (const [key, value] of Object.entries(data)) {
      if(value) {
        filteredData.push({field: key, value: value})
      }
    }

    const criteria = (c: any) => {
      const query: any[] = [];
      filteredData.forEach((item) => {
        query.push(c[item.field].eq(item.value));
      });
      return query;
    };

    const eventResults = await DataStore.query(Festival, (c) => c.or(() => criteria(c)));
    setEventResults(eventResults)
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Search Festivals' className='max-w-4xl'>
      <div className='p-4'>
        <form onSubmit={handleSubmit(handleEventSearch)}>
          <InputWrapper className='mb-4'>
            <Label>Location</Label>
            <Input {...register('location')}/>
          </InputWrapper>
          <InputWrapper>
            <Label>Genre</Label>
            <Input {...register('genre')}/>
          </InputWrapper>
          <div className='flex justify-center mt-6'>
            <Button variation='outline' type='reset' className='mr-6' onClick={() => {setEventResults([]);}}>Reset</Button>
            <Button type='submit'>Search</Button>
          </div>

        </form>
        <div className='mt-4 flex flex-wrap justify-center'>
          {eventResults.map(event =>
            <EventCardBase festival={event} key={event.id}/>
            )}
        </div>
      </div>
    </Modal>
  )
}

export default EventSearchModal