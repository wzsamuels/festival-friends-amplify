import React, {useState} from "react";
import { SubmitHandler } from "react-hook-form";
import Modal from "../../../common/Modal/Modal";
import { ModalProps } from "../../../../@types/modal";
import { DataStore } from "@aws-amplify/datastore";
import { Group, Event } from "../../../../models";
import { v4 as uuidv4 } from "uuid";
import { Storage } from "@aws-amplify/storage";
import getErrorMessage from "../../../../lib/getErrorMessage";
import EventForm from "../../../ui/EventForm";
import {EventInputs} from "../../../../types";
import {API} from "@aws-amplify/api";
import Button from "../../../common/Button/Button";

interface CreateEventModalProps extends ModalProps {
  group: Group;
}

const CreateEventModal = ({isOpen, setIsOpen, group,}: CreateEventModalProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateEvent: SubmitHandler<EventInputs> = async (data) => {
    setSubmitting(true);
    const { selectedFile, ...restData} = data;
    if (selectedFile) {
      try {
        const id = uuidv4();
        await Storage.put(`event-images/${id}`, selectedFile, {
          contentType: selectedFile.type,
        });
        const newEvent = await DataStore.save(
          new Event({
            ...restData,
            image: `event-images/${id}`,
            group: group,
            groupID: group.id,
            hasPaid: true,
            collegeEvent: true
          })
        );
        const apiResponse = await API.post("email", "/", {
          body: {
            subject: "A new university event has been posted!",
            toAddress: ["gabrielle@eventfriends.app", "contact@twinsilverdesign.com"],
            emailBody: `
                         <html lang="en">
                          <body>
                            <h2>Event Details</h2>                     
                            <p>Name: ${newEvent.name}</p>
                            <p>Date: ${newEvent.startDate} - ${newEvent.endDate}</p>
                            <p>Genre: ${newEvent.genre}</p>
                            <p>City: ${newEvent.city}</p>
                            <p>State: ${newEvent.state}</p>
                            <p>Description: ${newEvent.description}</p>
                            <p>Website: ${newEvent.url}</p>
                            <p>Visit <a href="https://eventfriends.app/admin">https://eventfriends.app/admin</a> to manage events.</p>
                          </body>
                        </html>
                        `
          }
        })
        console.log("API Response: ", apiResponse);
        setSubmitted(true);
      } catch (e) {
        console.log(getErrorMessage(e));
        setErrorMessage(getErrorMessage(e));
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className='max-w-2xl' title="New event">
      <div className="p-4">
      {
        submitted ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl my-4">Event created!</h1>
            <Button onClick={() => setSubmitted(false)}>Submit another event</Button>
          </div>
          ) : (
            <>
              <p>Please refrain from posting any event that promotes illegal activities, hate, or violence. We reserve the right to remove any event found to be harmful to our community.</p>
              <EventForm onSubmit={handleCreateEvent} submitting={submitting}/>
            </>
      )}
      {errorMessage && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}
      </div>
    </Modal>
  );
};

export default CreateEventModal;
