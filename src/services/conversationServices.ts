import {DataStore} from "aws-amplify";
import {Conversation, Profile} from "../models";

export const createConversation = async (userProfile: Profile, friendProfile: Profile) => {
  try {
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

    if(existingConversations.length > 0) {
      return existingConversations[0];
    }

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
    console.log("Error creating conversation", e);
  }
}