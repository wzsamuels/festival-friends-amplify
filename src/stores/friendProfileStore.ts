import {create, SetState} from "zustand";
import {Friendship, UserProfile} from "../models";
import {DataStore} from "aws-amplify";

interface FriendStore {
  clearFriends: () => void;
  fetchFriends: (userProfile:  UserProfile) => void;
  friendUnsubscribe: () => void;
  loadingFriends: boolean;
  allFriendships: Friendship[];
  acceptedFriendProfiles: UserProfile[];
  incomingFriendProfiles: UserProfile[];
  outgoingFriendProfiles: UserProfile[];
  friendSubscription: any;
}

const useFriendStore = create<FriendStore>((set: SetState<FriendStore>, get) => ({
  loadingFriends: false,
  allFriendships: [] as Friendship[],
  acceptedFriendProfiles: [] as UserProfile[],
  incomingFriendProfiles: [] as UserProfile[],
  outgoingFriendProfiles: [] as UserProfile[],
  friendSubscription: null,
  clearFriends: () => set({acceptedFriendProfiles: [], incomingFriendProfiles: [], outgoingFriendProfiles: [], allFriendships: []}),
  fetchFriends: async (userProfile: UserProfile) => {
    set({ loadingFriends: true });

    const friendshipSub = DataStore.observeQuery(Friendship, (c) =>
      c.or((c) => [
        c.userProfileID.eq(userProfile.id),
        c.friendProfileID.eq(userProfile.id),
      ])
    ).subscribe(async ({items}) => {
      const profileID = userProfile.id;

      const acceptedFriends = [] as UserProfile[];
      const incomingFriendRequests = [] as UserProfile[];
      const outgoingFriendRequests = [] as UserProfile[];

      await Promise.all(
        items.map(async (friend) => {
          const relatedProfile =
            friend.userProfileID === profileID
              ? await friend.friendProfile
              : await friend.userProfile;

          if (friend.isAccepted) {
            acceptedFriends.push(relatedProfile as UserProfile);
          } else if (friend.friendProfileID === profileID) {
            incomingFriendRequests.push(relatedProfile as UserProfile);
          } else {
            outgoingFriendRequests.push(relatedProfile as UserProfile);
          }
        })
      );

      set({ allFriendships: items });
      set({ acceptedFriendProfiles: acceptedFriends });
      set({ incomingFriendProfiles: incomingFriendRequests });
      set({ outgoingFriendProfiles: outgoingFriendRequests });
      set({ loadingFriends: false });
    });
    set({ friendSubscription: friendshipSub });
  },
  friendUnsubscribe: () => get().friendSubscription.unsubscribe()
}));

export default useFriendStore;