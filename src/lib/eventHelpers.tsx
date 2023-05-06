import {EventProfile, Festival, UserProfile} from "../models";
import {DataStore} from "aws-amplify";

export const fetchEventAttendees = async (events: Festival[]): Promise<Map<string, UserProfile[]>> => {
  const eventAttendeesMap = new Map<string, UserProfile[]>();
  if (events) {

    for (const event of events) {
      const attendees = (
        await DataStore.query(EventProfile, (ep) => ep.eventID.eq(event.id))
      ).map((eventProfile: EventProfile) => eventProfile.userProfile);
      const attendeeProfiles = await Promise.all(
        attendees.map(async (attendee) => await attendee),
      );
      eventAttendeesMap.set(event.id, attendeeProfiles);
    }
  }
  return eventAttendeesMap
};

interface getAttendingFriendsProps {
  eventId: string
  eventAttendees: Map<string, UserProfile[]>
  friendProfiles: UserProfile[]
}

export const getAttendingFriends = ({eventId, eventAttendees, friendProfiles}: getAttendingFriendsProps): UserProfile[] => {
  const attendees = eventAttendees.get(eventId) || [];
  return friendProfiles.filter((friend) =>
    attendees.some((attendee) => attendee.id === friend.id),
  );
};