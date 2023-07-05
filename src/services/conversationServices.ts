import { DataStore} from "@aws-amplify/datastore";
import {Conversation, Profile} from "../models";
import getErrorMessage from "../lib/getErrorMessage";

export const createConversation = async (userProfile: Profile, friendProfile: Profile) => {
  try {
    // Check for existing conversation between the two users
    const existingConversations = await DataStore.query(Conversation, (c) =>
      c.or(c => [
        c.and((c) => [
          c.profileID.eq(userProfile?.id),
          c.friendProfileID.eq(friendProfile.id),
        ]),
        c.and((c) => [
          c.profileID.eq(friendProfile.id),
          c.friendProfileID.eq(userProfile?.id),
        ])
      ]))

    // Return the existing conversation if it exists
    if(existingConversations.length > 0) {
      return existingConversations[0];
    }

    // Create a new conversation otherwise
    return await DataStore.save(
      new Conversation({
        profileID: userProfile?.id,
        friendProfileID: friendProfile.id,
        messages: [],
        profile : userProfile,
        friendProfile: friendProfile,
      })
    );
  } catch (e) {
    throw new Error(`Error creating conversation: ${getErrorMessage(e)}`);
  }
}