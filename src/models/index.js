// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FriendshipStatus = {
  "REQUESTED": "REQUESTED",
  "ACCEPTED": "ACCEPTED"
};

const EventType = {
  "CONCERT": "CONCERT",
  "FESTIVAL": "FESTIVAL",
  "SPORT": "SPORT",
  "BUSINESS": "BUSINESS",
  "COLLEGE": "COLLEGE",
  "MUSIC": "MUSIC",
  "ALL": "ALL"
};

const { Message, EventProfile, Festival, UserProfile, Ride, RideUser, Photo, PhotoComment, Friendship, Conversation, CollegeGroup } = initSchema(schema);

export {
  Message,
  EventProfile,
  Festival,
  UserProfile,
  Ride,
  RideUser,
  Photo,
  PhotoComment,
  Friendship,
  Conversation,
  CollegeGroup,
  FriendshipStatus,
  EventType
};