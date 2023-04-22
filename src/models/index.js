// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FriendshipStatus = {
  "REQUESTED": "REQUESTED",
  "ACCEPTED": "ACCEPTED"
};

const { Message, Festival, UserProfile, Photo, PhotoComment, Friendship, EventProfile, Conversation } = initSchema(schema);

export {
  Message,
  Festival,
  UserProfile,
  Photo,
  PhotoComment,
  Friendship,
  EventProfile,
  Conversation,
  FriendshipStatus
};