import {DataStore} from "aws-amplify";
import {Festival, UserProfile} from "../models";

export const getEvent = async (eventId: string) => {
  try {
    return await DataStore.query(Festival, eventId);
  } catch (error) {
    console.log("Error getting event", error)
    return null;
  }
}

export const getAllEvents = async () => {
  try {
    return await DataStore.query(Festival);
  } catch (error) {
    console.log("Error getting all events", error)
    return [];
  }
}

export const createEvent = async (event: Festival) => {
  try {
    return await DataStore.save(event);
  } catch (error) {
    console.log("Error creating event", error)
    return null;
  }
}

export const getEventAttendeeProfiles = async (eventId: string) => {

  try {
    const event = await getEvent(eventId);
    if(!event) return [];
    const attendeeProfiles: UserProfile[] = [];
    for await (const attendee of event.attendees) {
      const profile = await attendee.userProfile;
      attendeeProfiles.push(profile as UserProfile);
    }
    return attendeeProfiles;
  } catch (error) {
    console.log("Error getting event attendees", error)
    return [];
  }
}