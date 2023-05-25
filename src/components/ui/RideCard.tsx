import { Ride, RideUser, UserProfile } from "../../models";
import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import dayjs from "dayjs";
import useProfileStore from "../../stores/profileStore";
import useDataClearedStore from "../../stores/dataClearedStore";

interface RideCardProps {
  ride: Ride;
  className?: string;
}

const RideCard = ({ ride, className }: RideCardProps) => {
  const [driverProfile, setDriverProfile] = useState<UserProfile>();
  const [passengerProfiles, setPassengerProfiles] = useState<UserProfile[]>();
  const [ridersCount, setRidersCount] = useState<number>(0);
  const userProfile = useProfileStore((state) => state.userProfile);
  const dataCleared = useDataClearedStore((state) => state.dataCleared);

  useEffect(() => {
    if(!dataCleared) return;
    const getRiders = async () => {
      const rideUsers = await DataStore.query(RideUser, (c) =>
        c.rideID.eq(ride.id)
      );
      const driverUser = rideUsers.find((user) => user.isDriver === true);
      const driverProfile = await driverUser?.userProfile;
      const riderUsers = rideUsers.filter((user) => user.isDriver === false);
      const riderProfiles = await Promise.all(
        riderUsers.map(async (user) => await user.userProfile)
      );
      setRidersCount(rideUsers.length);
      setDriverProfile(driverProfile);
      setPassengerProfiles(riderProfiles);
    };
    try {
      getRiders();
    } catch (e) {
      console.log("Error getting riders", e);
    }
  }, [ride]);

  const handleJoinRide = async () => {
    if (userProfile && passengerProfiles) {
      await DataStore.save(
        new RideUser({
          isDriver: false,
          rideID: ride.id,
          ride: ride,
          userProfileID: userProfile.id,
          userProfile: userProfile,
        })
      );
      setRidersCount(ridersCount + 1);
      setPassengerProfiles([...passengerProfiles, userProfile]);
    } else {
      alert("Please log in to join the ride");
    }
  };

  const renderButtons = () => {
    const canJoin =
      userProfile?.id !== driverProfile?.id &&
      ridersCount < ride.maxPassengers &&
      passengerProfiles?.find(
        (passenger) => passenger.id === userProfile?.id
      ) === undefined;
    return (
      <Button
        className="mr-4 mt-4"
        disabled={!canJoin}
        onClick={handleJoinRide}
      >
        Join Ride
      </Button>
    );
  };

  return (
    <div className={`flex flex-col shadow-xl p-4 rounded-lg ${className}`}>
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
                className="underline text-green-950"
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
                className="underline text-green-950"
                to={`/friends/profile/${driverProfile.id}`}
              >
                {driverProfile.firstName} {driverProfile.lastName}
              </Link>
              {passengerProfiles?.length === 0 ? "" : `, `}
            </span>
          )}
          {passengerProfiles?.map((passenger, index) => (
            <span key={passenger.id}>
              <Link
                className="underline text-green-950"
                to={`/friends/profile/${passenger.id}`}
              >
                {passenger.firstName} {passenger.lastName}
              </Link>
              {index === passengerProfiles.length - 1 ? "" : `, `}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center">{renderButtons()}</div>
    </div>
  );
};

export default RideCard;
