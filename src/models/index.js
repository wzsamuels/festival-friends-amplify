// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

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

const { Profile, SocialMedia, PrivacySetting, Event, Ride, Photo, Friendship, Conversation, Message, Group, EventProfile, RideProfile } = initSchema(schema);

export {
  Profile,
  SocialMedia,
  PrivacySetting,
  Event,
  Ride,
  Photo,
  Friendship,
  Conversation,
  Message,
  Group,
  EventProfile,
  RideProfile,
  EventType,
  SocialMediaType
};