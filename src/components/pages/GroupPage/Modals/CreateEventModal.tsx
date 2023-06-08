import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../../common/Modal/Modal";
import { ModalProps } from "../../../../@types/modal";
import InputWrapper from "../../../common/InputWrapper/InputWrapper";
import Label from "../../../common/Label/Label";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import { DataStore } from "@aws-amplify/datastore";
import { Group, Event } from "../../../../models";
import { v4 as uuidv4 } from "uuid";
import { Storage } from "aws-amplify";
import getErrorMessage from "../../../../lib/getErrorMessage";
import TextArea from "../../../common/TextArea";
import {EventType} from "../../../../API";
import Select from "../../../common/Select";
import states from "../../../../data/states";
import useFilePreview from "../../../../hooks/useFilePreview";

interface EventInput {
  name: string;
  genre: string;
  startDate: string;
  endDate: string;
  city: string;
  state: string;
  address: string;
  description: string;
}

interface CreateEventModalProps extends ModalProps {
  group: Group;
}

const CreateEventModal = ({
  isOpen,
  setIsOpen,
  group,
}: CreateEventModalProps) => {
  const { register, handleSubmit, reset } = useForm<EventInput>();
  const { selectedFile, setSelectedFile, preview } = useFilePreview();

  const handleCreateEvent: SubmitHandler<EventInput> = async (data) => {
    if (selectedFile) {
      try {
        const id = uuidv4();
        await Storage.put(`event-images/${id}`, selectedFile, {
          contentType: selectedFile.type,
        });
        await DataStore.save(
          new Event({
            ...data,
            image: `event-images/${id}`,
            group: group,
            groupID: group.id,
            approved: false,
            type: EventType.COLLEGE
          })
        );
      } catch (e) {
        console.log(getErrorMessage(e));
        alert(getErrorMessage(e));
      } finally {
        setIsOpen(false);
        setSelectedFile(null);
        reset();
      }
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className='max-w-2xl' title="New event">
      <form onSubmit={handleSubmit(handleCreateEvent)} className='p-4 '>
        <InputWrapper className='my-4'>
          <Label>Name</Label>
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
        <InputWrapper className='my-4'>
          <Label>Address</Label>
          <Input {...register("address", {required: true})} />
        </InputWrapper>
        <InputWrapper className='my-4'>
          <Label>Event description</Label>
          <TextArea {...register("description", {required: true})} />
        </InputWrapper>
        {preview && <img src={preview} alt="preview" className="w-full" />}
        <div className="flex justify-center">
          <label
            htmlFor="upload-profile-image-photo"
            className="my-4 cursor-pointer flex justify-center px-4 py-2 uppercase font-light bg-brandYellow text-white "
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
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  );
};

export default CreateEventModal;
