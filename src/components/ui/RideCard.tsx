import {Ride, RideUser, UserProfile} from "../../models";
import React, {useEffect, useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import FriendCard from "./FriendCard";
import {Link} from "react-router-dom";
import Button from "../common/Button/Button";
import {useUserProfileStore} from "../../stores/friendProfilesStore";

interface RideCardProps {
  ride: Ride
}

const RideCard = ({ride} : RideCardProps) => {
  const [driverProfile, setDriverProfile] = useState<UserProfile>()
  const [passengerProfiles, setPassengerProfiles] = useState<UserProfile[]>()
  const [ridersCount, setRidersCount] = useState<number>(0)
  const { userProfile } = useUserProfileStore();

  useEffect(() => {
    const getRiders = async () => {
      const rideUsers = await DataStore.query(RideUser, c => c.rideID.eq(ride.id))
      const driverUser = rideUsers.find(user => user.isDriver === true)
      const driverProfile = await driverUser?.userProfile
      const riderUsers = rideUsers.filter(user => user.isDriver === false)
      const riderProfiles = await Promise.all(riderUsers.map(async user => await user.userProfile))
      setRidersCount(rideUsers.length)
      setDriverProfile(driverProfile)
      setPassengerProfiles(riderProfiles);
    }
    getRiders();
  }, [ride])

  const handleJoinRide = async () => {
    if (userProfile && passengerProfiles) {
      await DataStore.save(new RideUser({
        isDriver: false,
        rideID: ride.id,
        ride: ride,
        userProfileID: userProfile.id,
        userProfile: userProfile
      }))
      setRidersCount(ridersCount + 1)
      setPassengerProfiles([...passengerProfiles, userProfile])
    } else {
      alert('Please log in to join the ride')
    }
  }

  const renderButtons = () => {
    const canJoin = (userProfile?.id !== driverProfile?.id && ridersCount < ride.maxPassengers && passengerProfiles?.find(passenger => passenger.id === userProfile?.id) === undefined)
    return <Button  className='mr-4 mt-4' disabled={!canJoin} onClick={handleJoinRide}>Join Ride</Button>
  }

  return (
    <div className='flex flex-col shadow-xl p-4 rounded-lg'>
      <div className='flex  gap-4'>
        <div className='flex flex-col'>
          <h2>{ride.startPoint} to {ride.endPoint}</h2>
          <h3>Date: {ride.departureTime}</h3>
        </div>
        <div>
          <h4>
            Created by: {driverProfile && <Link to={`/friends/profile/${driverProfile.id}`} className='underline text-green-950'>{driverProfile?.firstName} {driverProfile?.lastName}</Link>}
          </h4>
          <h5>Passengers: {ridersCount} / {ride.maxPassengers}</h5>
          <div>Passenger List:</div>
          { driverProfile && <span><Link className='underline text-green-950' to={`/friends/profile/${driverProfile.id}`}>{driverProfile.firstName} {driverProfile.lastName}</Link>{passengerProfiles?.length  === 0 ? '' : `, `}</span>}
          {passengerProfiles?.map((passenger, index) =>
            <span key={passenger.id}><Link className='underline text-green-950' to={`/friends/profile/${passenger.id}`}>{passenger.firstName} {passenger.lastName}</Link>{index === passengerProfiles.length - 1 ? '' : `, `}</span>
            )}
        </div>
      </div>
      <div className='flex justify-center'>
        {renderButtons()}
      </div>
    </div>
  )
}

export default RideCard