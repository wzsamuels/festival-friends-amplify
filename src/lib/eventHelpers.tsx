import { EventProfile, Event, Profile } from "../models";
import { DataStore } from "aws-amplify";

export const fetchEventAttendees = async (
  events: Event[]
): Promise<Map<string, Profile[]>> => {
  const eventAttendeesMap = new Map<string, Profile[]>();
  if (events) {
    try {
      for (const event of events) {
        const attendees = (
          await DataStore.query(EventProfile, (ep) => ep.eventId.eq(event.id))
        ).map((eventProfile: EventProfile) => eventProfile.profile);
        const attendeeProfiles = await Promise.all(
          attendees.map(async (attendee) => await attendee)
        );
        eventAttendeesMap.set(event.id, attendeeProfiles as Profile[]);
      }
    } catch (e) {
      console.log("Error fetching event attendees: ", e)
    }
  }
  return eventAttendeesMap;
};

interface getAttendingFriendsProps {
  eventId: string;
  eventAttendees: Map<string, Profile[]>;
  friendProfiles: Profile[];
}

export const getAttendingFriends = ({
  eventId,
  eventAttendees,
  friendProfiles,
}: getAttendingFriendsProps): Profile[] => {
  const attendees = eventAttendees.get(eventId) || [];
  return friendProfiles.filter((friend) =>
    attendees.some((attendee) => attendee.id === friend.id)
  );
};
