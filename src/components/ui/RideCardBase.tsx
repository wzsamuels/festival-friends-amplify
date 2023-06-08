import React, { useEffect, useState } from "react";
import { Event, Ride } from "../../models";
import dayjs from "dayjs";

interface RideCardBaseProps {
  ride: Ride;
}

const RideCardBase = ({ ride }: RideCardBaseProps) => {
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    const getEvent = async () => {
      return ride.event;
    };
    try {
      getEvent()
        .then((event) => setEvent(event));
    } catch (e) {
      console.log("Error getting event: ", e);
      setEvent(undefined);
    }
  }, [ride]);

  return (
    <div key={ride.id}>
      From {ride.startPoint} to {ride.endPoint} on{" "}
      {dayjs(ride.departureTime).format("MMMM D, YYYY h:mm A")} for{" "}
      {event?.name}
    </div>
  );
};

export default RideCardBase;
