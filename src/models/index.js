// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Conversation, Friends, Festival, UserProfile } = initSchema(schema);

export {
  Message,
  Conversation,
  Friends,
  Festival,
  UserProfile
};