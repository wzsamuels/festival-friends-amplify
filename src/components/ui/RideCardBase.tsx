import React, { useEffect, useState } from "react";
import { Festival, Ride } from "../../models";
import dayjs from "dayjs";

interface RideCardBaseProps {
  ride: Ride;
}

const RideCardBase = ({ ride }: RideCardBaseProps) => {
  const [event, setEvent] = useState<Festival>();

  useEffect(() => {
    const getEvent = async () => {
      const event = await ride.event;
      setEvent(event);
    };
    getEvent();
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
