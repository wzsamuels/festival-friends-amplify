// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Festival, UserProfile, FestivalUserProfile } = initSchema(schema);

export {
  Festival,
  UserProfile,
  FestivalUserProfile
};