import React, {useState} from "react";
import { SubmitHandler } from "react-hook-form";
import Modal from "../../../common/Modal/Modal";
import { ModalProps } from "../../../../@types/modal";
import { DataStore } from "@aws-amplify/datastore";
import { Group, Event } from "../../../../models";
import { v4 as uuidv4 } from "uuid";
import { Storage } from "@aws-amplify/storage";
import getErrorMessage from "../../../../lib/getErrorMessage";
import {EventType} from "../../../../API";
import EventForm from "../../../ui/EventForm";
import {EventInputs} from "../../../../types";

interface CreateEventModalProps extends ModalProps {
  group: Group;
}

const CreateEventModal = ({isOpen, setIsOpen, group,}: CreateEventModalProps) => {
  const [submitting, setSubmitting] = useState(false);

  const handleCreateEvent: SubmitHandler<EventInputs> = async (data) => {
    setSubmitting(true);
    const { selectedFile, ...restData} = data;
    if (selectedFile) {
      try {
        const id = uuidv4();
        await Storage.put(`event-images/${id}`, selectedFile, {
          contentType: selectedFile.type,
        });
        await DataStore.save(
          new Event({
            ...restData,
            image: `event-images/${id}`,
            group: group,
            groupID: group.id,
            hasPaid: true,
            type: EventType.COLLEGE
          })
        );
      } catch (e) {
        console.log(getErrorMessage(e));
        alert(getErrorMessage(e));
      } finally {
        setIsOpen(false);
      }
    }
    setSubmitting(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className='max-w-2xl' title="New event">
      <EventForm onSubmit={handleCreateEvent} submitting={submitting}/>
    </Modal>
  );
};

export default CreateEventModal;
