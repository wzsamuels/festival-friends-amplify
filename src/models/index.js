// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FriendshipStatus = {
  "REQUESTED": "REQUESTED",
  "ACCEPTED": "ACCEPTED"
};

const EventType = {
  "SPORT": "SPORT",
  "BUSINESS": "BUSINESS",
  "COLLEGE": "COLLEGE",
  "MUSIC": "MUSIC",
  "ALL": "ALL",
  "TRAVEL": "TRAVEL"
};

const SocialMediaType = {
  "FACEBOOK": "FACEBOOK",
  "TWITTER": "TWITTER",
  "INSTAGRAM": "INSTAGRAM"
};

const { Message, EventProfile, Festival, UserProfile, SocialMedia, PrivacySetting, Ride, RideUser, Photo, PhotoComment, Friendship, Conversation, CollegeGroup } = initSchema(schema);

export {
  Message,
  EventProfile,
  Festival,
  UserProfile,
  SocialMedia,
  PrivacySetting,
  Ride,
  RideUser,
  Photo,
  PhotoComment,
  Friendship,
  Conversation,
  CollegeGroup,
  FriendshipStatus,
  EventType,
  SocialMediaType
};