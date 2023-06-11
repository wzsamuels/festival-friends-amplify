import React, { useContext, useEffect, useState } from "react";
import ImageContext from "../../../context/ImageContext";
import {Event} from "../../../models";
import Button from "../../common/Button/Button";

interface EventCardBaseProps {
  event: Event
  onApprove: (id: string) => void
  onReject: (id: string) => void
}

const AdminEventCard = ({ event, onApprove, onReject}: EventCardBaseProps) => {
  const { getSignedURL } = useContext(ImageContext);
  const [eventImage, setEventImage] = useState("");
  useEffect(() => {
    const fetchSignedURL = async () => {
      const url = await getSignedURL(event.image, "public");
      setEventImage(url);
    };

    fetchSignedURL();
  }, [event.image, getSignedURL]);

  return (
    <div className={`rounded-xl shadow-md w-full max-w-[350px] bg-light-default`}>
      <div className="w-full max-w-[350px] min-h-[350px] h-full max-h-[350px] object-cover flex items-center justify-center">
        {eventImage ? (
          <img
            className="w-full h-full"
            src={eventImage}
            alt={event.name}
          />
        ) : null}
      </div>
      <div className=" bottom-4 left-4 rounded-xl z-10 w-full p-4 font-bold ">
        <div className="bold min-h-[3rem]">
          {event.name}
        </div>
        <div>
          <p>{event.city}, {event.state}</p>
          <p>{event.address}</p>
          <p>{event.startDate} - {event.endDate}</p>
          <p>{event.genre}</p>
          <p>{event.type}</p>
          <p>{event.description}</p>
          <p>{event.url}</p>
          <p>{event.ticketURL}</p>
        </div>
      </div>
      <div className='flex justify-center gap-4 mb-4'>
        <Button onClick={() => onReject(event.id)}>Reject</Button>
        <Button onClick={() => onApprove(event.id)}>Approve</Button>
      </div>
    </div>
  );
};

export default AdminEventCard;
