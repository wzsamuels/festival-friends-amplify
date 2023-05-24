import {Conversation, UserProfile} from "../models";
import {create, SetState} from "zustand";
import {DataStore} from "@aws-amplify/datastore";
import getErrorMessage from "../lib/getErrorMessage";

interface ConversationStore {
  conversations: Conversation[];
  //addConversation(conversation: Conversation): void
  clearConversations: () => void;
  fetchConversations: (userProfile: UserProfile) => void;
  loadingConversations: boolean;
}

const useConversationStore = create<ConversationStore>((set: SetState<ConversationStore>) => ({
  conversations: [],
  loadingConversations: false,
  clearConversations: () => set({conversations: []}),
  fetchConversations: (userProfile: UserProfile) => {
    set({loadingConversations: true})
    console.log("Fetching conversations for user", userProfile.id)
    try {
      const conversationsSub = DataStore.observeQuery(Conversation, (c) =>
        c.or((c) => [
          c.userProfileID.eq(userProfile.id),
          c.friendProfileID.eq(userProfile.id),
        ])
      ).subscribe(({items}) => {
        console.log("Conversations", items);
        set({conversations: items})
      })
      return () => conversationsSub.unsubscribe();
    } catch (e) {
      console.log("Error fetching conversations", getErrorMessage(e))
    }
  }
}))

export default useConversationStore;