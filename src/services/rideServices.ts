import {DataStore} from "aws-amplify";
import {Profile, Ride, RideProfile} from "../models";

export const getRidesByEvent  = async (eventID: string) => {
  try {
    return await DataStore.query(Ride, c => c.eventID.eq(eventID));
  } catch (e) {
    console.log("Error getting rides: ", e);
    return [];
  }
}

export const getRidesByProfile = async (profile: Profile) => {
  try {
    return await DataStore.query(Ride, c => c.passengers.profile.id.eq(profile.id));
  } catch (e) {
    console.log("Error getting rides: ", e);
    return [];
  }
}

export const getPassengers = async (ride: Ride) => {
  try {
    return await DataStore.query(Profile, c => c.rides.ride.id.eq(ride.id));
  } catch (e) {
    console.log("Error getting riders: ", e);
    return [];
  }
}

export const deleteRide = async (id: string) => {
  try {

   // const rideUsers =  await DataStore.query(RideUser, c => c.rideID.eq(id));
   // rideUsers.map(async (rideUser) => await DataStore.delete(rideUser));

    const originalRide = await DataStore.query(Ride, id);

    if(!originalRide) {
      console.log("Ride not found:  ", id);
      return;
    }
    await DataStore.delete(originalRide);
  } catch (e) {
    console.log("Error deleting ride: ", e);
  }
}

export const leaveRide = async (ride: Ride, profile: Profile | null) => {
  if(!profile || !ride) return;

  try {
    await DataStore.delete(RideProfile, c => c.and( c => [
      c.rideId.eq(ride.id),
      c.profileId.eq(profile.id)
    ]));
  } catch (e) {
    console.log("Error leaving ride: ", e);
  }
}

export const joinRide = async (ride: Ride, profile: Profile) => {
  if(!profile || !ride) return;

  try {
    await DataStore.save(
      new RideProfile({
        profile: profile,
        ride: ride
      })
    );
  } catch (e) {
    console.log("Error joining ride: ", e);
  }
}