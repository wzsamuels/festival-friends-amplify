import {DataStore} from "aws-amplify";
import {Conversation, UserProfile} from "../models";

export const createConversation = async (userProfile: UserProfile, friendProfile: UserProfile) => {
  try {
    const existingConversations = await DataStore.query(Conversation, (c) =>
      c.or(c => [
        c.and((c) => [
          c.userProfileID.eq(userProfile?.id),
          c.friendProfileID.eq(friendProfile.id),
        ]),
        c.and((c) => [
          c.userProfileID.eq(friendProfile.id),
          c.friendProfileID.eq(userProfile?.id),
        ])
      ]))

    if(existingConversations.length > 0) {
      return existingConversations[0];
    }

    return await DataStore.save(
      new Conversation({
        userProfileID: userProfile?.id,
        friendProfileID: friendProfile.id,
        messages: [],
        userProfile: userProfile,
        friendProfile: friendProfile,
      })
    );
  } catch (e) {
    console.log("Error creating conversation", e);
  }
}