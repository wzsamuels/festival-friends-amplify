import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ImageContext from "../../../context/ImageContext";
import {Festival} from "../../../models";
import Button from "../../common/Button/Button";

interface EventCardBaseProps {
  event: Festival
  onApprove: (id: string) => void
  onReject: (id: string) => void
}

const AdminEventCard = ({ event, onApprove, onReject}: EventCardBaseProps) => {
  const { getSignedURL } = useContext(ImageContext);
  const [eventImage, setFestivalImage] = useState("");
  useEffect(() => {
    const fetchSignedURL = async () => {
      const url = await getSignedURL(event.image, "public");
      setFestivalImage(url);
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
          {event.name} - {event.location}
        </div>

        <div>{event.startDate} - {event.endDate}</div>
        <div>{event.description}</div>
      </div>
      <div className='flex justify-center gap-4 mb-4'>
        <Button onClick={() => onReject(event.id)}>Reject</Button>
        <Button onClick={() => onApprove(event.id)}>Approve</Button>
      </div>
    </div>
  );
};

export default AdminEventCard;
