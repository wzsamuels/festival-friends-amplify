import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Modal from "../../../common/Modal/Modal";
import {ModalProps} from "../../../../@types/modal";
import InputWrapper from "../../../common/InputWrapper/InputWrapper";
import Label from "../../../common/Label/Label";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import {DataStore} from "@aws-amplify/datastore";
import {CollegeGroup, Festival} from "../../../../models";
import {v4 as uuidv4} from "uuid";
import {Storage} from "aws-amplify";
import getErrorMessage from "../../../../lib/getErrorMessage";

interface EventInput {
  eventName: string;
  eventGenre: string;
  eventStartDate: string;
  eventEndDate: string;
  eventLocation: string;
  eventDescription: string;
}

interface CreateEventModalProps extends ModalProps {
  group: CollegeGroup;
}

const CreateEventModal = ({isOpen, setIsOpen, group} : CreateEventModalProps) => {
  const { register, handleSubmit, reset } = useForm<EventInput>()
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  const handleCreateEvent: SubmitHandler<EventInput> = async (data) => {

    if (selectedFile) {
      try {
        const id = uuidv4();
        await Storage.put(`event-images/${id}`, selectedFile, {contentType: selectedFile.type});
        await DataStore.save(new Festival({
          name: data.eventName,
          genre: data.eventGenre,
          startDate: data.eventStartDate,
          endDate: data.eventEndDate,
          location: data.eventLocation,
          description: data.eventDescription,
          image: `event-images/${id}`,
          group: group,
          groupID: group.id,
        }))
      } catch (e) {
        console.log(getErrorMessage(e))
        alert(getErrorMessage(e))
      } finally {
        setIsOpen(false);
        setSelectedFile(null);
        setPreview(null);
        reset();
      }
    }
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(handleCreateEvent)}>
        <InputWrapper>
          <Label>Event name</Label>
          <Input {...register('eventName')} />
        </InputWrapper>
        <InputWrapper>
          <Label>Event genre</Label>
          <Input {...register('eventGenre')} />
        </InputWrapper>
        <InputWrapper>
          <Label>Event start date</Label>
          <Input type='date' {...register('eventStartDate')} />
        </InputWrapper>
        <InputWrapper>
          <Label>Event end date</Label>
          <Input type='date' {...register('eventEndDate')} />
        </InputWrapper>
        <InputWrapper>
          <Label>Event location</Label>
          <Input {...register('eventLocation')} />
        </InputWrapper>
        <InputWrapper>
          <Label>Event description</Label>
          <Input {...register('eventDescription')} />
        </InputWrapper>
        {preview && <img src={preview} alt="preview" className='w-full' />}
        <div className='flex justify-center'>

          <label
            htmlFor='upload-profile-image-photo'
            className='my-4 cursor-pointer flex justify-center px-4 py-2 uppercase font-light bg-green-950 text-white '>
            Select Event Image
          </label>
          <input
            type='file'
            id='upload-profile-image-photo'
            accept="image/png, image/jpeg"
            onChange={e => e?.target?.files && setSelectedFile(e.target.files[0])}
            className='my-4 hidden'
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Modal>
  )
}

export default CreateEventModal;