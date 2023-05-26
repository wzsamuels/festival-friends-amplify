import {DataStore} from "aws-amplify";
import {Festival} from "../models";

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