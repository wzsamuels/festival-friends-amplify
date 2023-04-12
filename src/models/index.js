// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Conversation, FriendsList, Festival, UserProfile, Message } = initSchema(schema);

export {
  Conversation,
  FriendsList,
  Festival,
  UserProfile,
  Message
};