// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Conversation, FriendsList, Festival, UserProfile } = initSchema(schema);

export {
  Message,
  Conversation,
  FriendsList,
  Festival,
  UserProfile
};