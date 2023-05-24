import {EventProfile, Festival, UserProfile} from "../models";
import {DataStore} from "aws-amplify";

export const createEventProfile = async (event: Festival, profile: UserProfile) => {
  return await DataStore.save(
    new EventProfile({
      userProfile: profile,
      userProfileID: profile.id,
      event: event,
      eventID: event.id
  }))
}

export const deleteEventProfile = async (eventProfile:  EventProfile) => {
  const eventProfileToDelete = await DataStore.query(EventProfile, eventProfile.id)

  if(eventProfileToDelete) {
    console.log("Deleting event profile")
    await DataStore.delete(eventProfileToDelete)
  }
}

export const getEventProfile = async (eventID: string, profileID: string) => {
  const eventProfile = await DataStore.query(EventProfile, c => c.and( c => [
    c.eventID.eq(eventID),
    c.userProfileID.eq(profileID)
  ]));
  return eventProfile[0];
}