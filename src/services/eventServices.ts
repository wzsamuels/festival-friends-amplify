import {DataStore} from "@aws-amplify/datastore";
import {Storage} from "@aws-amplify/storage";
import {Event, Ride, Profile, EventProfile, RideProfile} from "../models";
import {EventInputs} from "../types";
import {v4 as uuidv4} from "uuid";
import {API} from "@aws-amplify/api";
import {graphqlOperation} from "aws-amplify";
import {listEvents} from "../graphql/queries";

export const getEvent = async (eventId: string) => {
  try {
    return await DataStore.query(Event, eventId);
  } catch (error) {
    console.log("Error getting event", error)
    return null;
  }
}

export const getEventImageURL = (eventImage: string | null | undefined) => {
  if(!eventImage) return "";
  return `${import.meta.env.VITE_CLOUDINARY_URL}/public/${eventImage}${import.meta.env.VITE_CLOUDINARY_TRANSFORM}`
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
    return await DataStore.query(Event, c => c.attendees.profile.id.eq(profile.id))
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

export const getPublicEvents = async () => {
  console.log("Fetching events...");

  // Only fetch public events that are paid for, not cancelled, not a group event, and aren't in the past
  const eventData = await API.graphql(graphqlOperation(listEvents, { filter: {
      and: [
        { cancelled: { eq: false } },
        { hasPaid: { eq: true } },
        { collegeEvent: { eq: false } },
        { endDate: { ge: new Date().toISOString()}}
      ]
    }}));
  if ("data" in eventData) {
    const events = eventData.data.listEvents.items;
    console.log("Events in store", events);
    return(events);
  } else if ("errors" in eventData) {
    throw new Error(`Error fetching public events: ${eventData.errors}`);
  }
}

export const createEvent = async (data: EventInputs, extraData?: any) => {
  try {
    const {selectedFile, ...restData} = data;
    if(!selectedFile) return null;
    const id = uuidv4();
    await Storage.put(`event-images/${id}`, selectedFile, {
      level: "public",
      contentType: selectedFile.type
    })
    const newImage = `event-images/${id}`;
    return await DataStore.save(
      new Event({
        ...restData,
        ...(extraData && {...extraData}),
        image: newImage,
      }
    ));
  } catch (error) {
    console.log("Error creating event", error)
    return null;
  }
}

export const updateEvent = async (eventID: string, data: EventInputs) => {
  try {
    const latestEvent = await DataStore.query(Event, eventID);
    if (!latestEvent) return null

    const {selectedFile} = data;
    let newImage = "";
    if (selectedFile) {
      const id = uuidv4();
      await Storage.remove(latestEvent.image);
      await Storage.put(`event-images/${id}`, selectedFile, {
        level: "public",
        contentType: selectedFile.type
      })
      newImage = `event-images/${id}`;
    }
    return await DataStore.save(Event.copyOf(latestEvent, updatedEvent => {
      updatedEvent.name = data.name;
      updatedEvent.genre = data.genre;
      updatedEvent.state = data.state;
      updatedEvent.city = data.city;
      updatedEvent.address = data.address;
      updatedEvent.startDate = data.startDate;
      updatedEvent.endDate = data.endDate;
      updatedEvent.type = data.type;
      updatedEvent.description = data.description;
      updatedEvent.url = data.url;
      updatedEvent.ticketURL = data.ticketURL;
      newImage && (updatedEvent.image = newImage);
    }))
  } catch (e) {
    console.log("Error updating event", e)
    return null;
  }
}

export const approveEvent = async (eventID: string) => {
  try {
    const latestEvent = await DataStore.query(Event, eventID)
    if(!latestEvent) return;
    const updatedEvent = await DataStore.save(Event.copyOf(latestEvent, updated => {
      updated.approved = true
    }))
    console.log("Event approved:", updatedEvent);
    return updatedEvent;
  } catch (e) {
    console.log("Error approving event", e)
  }
}

export const getAttendees = async (eventID: string) => {
  try {
    return await DataStore.query(Profile, c => c.events.event.id.eq(eventID))
  } catch (error) {
    console.log("Error getting event attendees", error)
    return [];
  }
}

export const deleteEvent = async (eventID: string) => {
  try {
    const latestEvent = await DataStore.query(Event, eventID);
    await Storage.remove(latestEvent?.image || "");
    await DataStore.delete(EventProfile, c => c.eventId.eq(eventID))
    const rides = await DataStore.query(Ride, c => c.eventID.eq(eventID))
    for (const ride of rides) {
      await DataStore.delete(RideProfile, c => c.rideId.eq(ride.id))
      await DataStore.delete(Ride, ride.id)
    }
    const deletedEvent = await DataStore.delete(Event, eventID);
    console.log("Event deleted:", deletedEvent);
    return deletedEvent;
  } catch (e) {
    console.log("Error deleting event", e)
    return null;
  }
}