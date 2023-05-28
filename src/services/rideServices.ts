import {DataStore} from "aws-amplify";
import {Ride, RideUser, UserProfile} from "../models";

export const getRidesByEvent  = async (eventID: string) => {
  try {
    return await DataStore.query(Ride, c => c.eventID.eq(eventID));
  } catch (e) {
    console.log("Error getting rides: ", e);
    return [];
  }
}

export const getRidesByProfile = async (profile: UserProfile) => {
  try {
    const rideUsers = await profile.rides.toArray();
    return await Promise.all(
      rideUsers.map(async (rideUser) => await rideUser.ride)
    );
  } catch (e) {
    console.log("Error getting rides: ", e);
    return [];
  }
}

export const getRidersByEvent = async (ride:  Ride) => {
  try {
    return await DataStore.query(RideUser, c => c.rideID.eq(ride.id));
  } catch (e) {
    console.log("Error getting riders: ", e);
    return [];
  }
}

export const deleteRide = async (id: string) => {
  try {

    const rideUsers =  await DataStore.query(RideUser, c => c.rideID.eq(id));
    rideUsers.map(async (rideUser) => await DataStore.delete(rideUser));

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

export const leaveRide = async (ride: Ride, profile: UserProfile | null) => {
  if(!profile || !ride) return;

  try {
    await DataStore.delete(RideUser, c => c.and( c => [
      c.rideID.eq(ride.id),
      c.userProfileID.eq(profile.id)
    ]));
  } catch (e) {
    console.log("Error leaving ride: ", e);
  }
}

export const joinRide = async (ride: Ride, profile: UserProfile) => {
  if(!profile || !ride) return;

  try {
    await DataStore.save(
      new RideUser({
        isDriver: false,
        rideID: ride.id,
        ride: ride,
        userProfileID: profile.id,
        userProfile: profile,
      })
    );
  } catch (e) {
    console.log("Error joining ride: ", e);
  }
}