import {DataStore} from "aws-amplify";
import {Event, Ride, Profile, EventProfile} from "../models";

export const getEvent = async (eventId: string) => {
  try {
    return await DataStore.query(Event, eventId);
  } catch (error) {
    console.log("Error getting event", error)
    return null;
  }
}

export const getEventByRide = async (ride: Ride) => {
  try {
    return await DataStore.query(Event, ride.eventID)
  } catch (e) {
    console.log("Error getting event by ride")
    return null;
  }
}

export const joinEvent = async (event: Event, profile: Profile) => {
  try {
    return await DataStore.save(
      new EventProfile({
        event: event,
        profile: profile
      }
    ));
  } catch (e) {
    console.log("Error joining event", e)
    return null;
  }
}

export const leaveEvent = async (event: Event, profile: Profile) => {
  try {
    return await DataStore.delete(EventProfile, c => c.and( c => [
      c.eventId.eq(event.id),
      c.profileId.eq(profile.id)
    ]))
  } catch (e) {
    console.log("Error leaving event", e)
    return null;
  }
}

export const getEventsByProfile = async (profile: Profile) => {
  try {
    return await DataStore.query(Event, c => c.attendees.event.id.eq(profile.id))
  } catch (error) {
    console.log("Error getting events by profile", error)
    return [];
  }
}

export const getAllEvents = async () => {
  try {
    return await DataStore.query(Event);
  } catch (error) {
    console.log("Error getting all events", error)
    return [];
  }
}

export const createEvent = async (event: Event) => {
  try {
    return await DataStore.save(event);
  } catch (error) {
    console.log("Error creating event", error)
    return null;
  }
}

export const getAttendees = async (eventId: string) => {
  try {
    return await DataStore.query(Profile, c => c.events.event.id.eq(eventId))
  } catch (error) {
    console.log("Error getting event attendees", error)
    return [];
  }
}