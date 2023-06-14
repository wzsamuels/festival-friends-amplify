import { Link } from "react-router-dom";
import React from "react";
import { Event } from "../../models";
import {getEventImageURL} from "../../services/eventServices";

interface EventCardBaseProps {
  event: Event
  className?: string
}

const EventCardBase = ({ event, className }: EventCardBaseProps) => {

  return (
    <div className={`rounded-xl shadow-md w-full max-w-[350px] bg-light-default ${className}`}>
      <Link className="relative" to={`/events/${event.id}`}>
        <div className="w-full max-w-[350px] min-h-[350px] h-full max-h-[350px] object-cover flex items-center justify-center">
          {event.image ? (
            <img
              className="w-full h-full"
              src={getEventImageURL(event.image)}
              alt={event.name}
            />
          ) : null}
        </div>
        <div className=" bottom-4 left-4 rounded-xl z-10 w-full p-4 font-bold ">
          <div className="bold min-h-[3rem]">
            {event.name} - {event.startDate}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCardBase;
