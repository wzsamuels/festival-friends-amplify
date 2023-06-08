import {Event, Ride, Profile} from "../../models";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import dayjs from "dayjs";
import useProfileStore from "../../stores/profileStore";
import useDataClearedStore from "../../stores/dataClearedStore";
import CustomAlert from "../common/Alert/Alert";
import {deleteRide, getPassengers, joinRide, leaveRide} from "../../services/rideServices";
import {getEventByRide} from "../../services/eventServices";

interface RideCardProps {
  ride: Ride;
  className?: string;
}

const RideCard = ({ ride, className }: RideCardProps) => {
  const [driverProfile, setDriverProfile] = useState<Profile>();
  const [passengers, setPassengerProfiles] = useState<Profile[]>();
  const [ridersCount, setRidersCount] = useState<number>(0);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [event, setEvent] = useState<Event | null | undefined>();
  const userProfile = useProfileStore((state) => state.userProfile);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);

  useEffect(() => {
    if(!dataCleared) return;
    const getRiders = async () => {
      const passengers = await getPassengers(ride);
      const driver = passengers.find((passenger) => ride.driverProfileID === passenger.id);
      setRidersCount(passengers.length);
      setDriverProfile(driver);
      setPassengerProfiles(passengers);
    };
    try {
      getRiders();
      getEventByRide(ride).then((event) => setEvent(event));
    } catch (e) {
      console.log("Error getting riders", e);
    }
  }, [ride]);

  const handleJoinRide = async () => {
    if (!userProfile || !passengers) return;
    await joinRide(ride, userProfile);
    setRidersCount(ridersCount + 1);
    setPassengerProfiles([...passengers, userProfile]);
  };

  const handleLeaveRide = async () => {
    if (!userProfile || !passengers) return;
    await leaveRide(ride, userProfile);
    setRidersCount(ridersCount - 1);
    setPassengerProfiles(passengers.filter((passenger) => passenger.id !== userProfile.id));
  }

  const renderButtons = () => {
    if(userProfile?.id === driverProfile?.id) {
      return (
        <Button onClick={() => setDeleteAlertOpen(true)}>Cancel Ride</Button>
      )
    }

    if(passengers?.find((passenger) => passenger.id === userProfile?.id)) {
      return (
        <Button onClick={handleLeaveRide}>Leave Ride</Button>
      )
    }

    if (ridersCount < ride.maxPassengers) {
      return (
        <Button onClick={handleJoinRide}>Join Ride</Button>
      );
    }
  };

  return (
    <div className={`flex flex-col shadow-xl p-4 rounded-lg ${className} relative`}>
      { event?.cancelled === true ? "Cancelled" : "Upcoming"}
      {
        event?.cancelled && <div className="absolute inset-0 bg-red-950 opacity-50 w-full h-full">Event Cancelled</div>
      }
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <h2>
            {ride.startPoint} to {ride.endPoint}
          </h2>
          <h3>
            Departure: {dayjs(ride.departureTime).format("MMMM D, YYYY h:mm A")}
          </h3>
        </div>
        <div className="flex-1">
          <h4>
            Created by:{" "}
            {driverProfile && (
              <Link
                to={`/friends/profile/${driverProfile.id}`}
                className="underline text-brandYellow"
              >
                {driverProfile?.firstName} {driverProfile?.lastName}
              </Link>
            )}
          </h4>
          <h5>
            Passengers: {ridersCount} / {ride.maxPassengers}
          </h5>
          <div>Passenger List:</div>
          {driverProfile && (
            <span>
              <Link
                className="underline text-brandYellow"
                to={`/friends/profile/${driverProfile.id}`}
              >
                {driverProfile.firstName} {driverProfile.lastName}
              </Link>
              {passengers?.length === 0 ? "" : `, `}
            </span>
          )}
          {passengers?.map((passenger, index) => (
            <span key={passenger.id}>
              <Link
                className="underline text-brandYellow"
                to={`/friends/profile/${passenger.id}`}
              >
                {passenger.firstName} {passenger.lastName}
              </Link>
              {index === passengers.length - 1 ? "" : `, `}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center m-4 gap-4">{renderButtons()}</div>
      <CustomAlert
        title="Alert Title"
        message="Cancel this ride? This action cannot be undone."
        isOpen={deleteAlertOpen}
        setIsOpen={setDeleteAlertOpen}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "OK",
            role: "confirm",
            handler: () => {
              deleteRide(
                ride.id,
              );
            },
          },
        ]}
      />
    </div>
  );
};

export default RideCard;
