import {create, SetState} from "zustand";
import {Friendship, Profile} from "../models";
import {DataStore} from "aws-amplify";

interface FriendStore {
  clearFriends: () => void;
  fetchFriends: (userProfile:  Profile) => void;
  friendUnsubscribe: () => void;
  loadingFriends: boolean;
  allFriendships: Friendship[];
  acceptedFriendProfiles: Profile[];
  incomingFriendProfiles: Profile[];
  outgoingFriendProfiles: Profile[];
  friendSubscription: any;
}

const useFriendStore = create<FriendStore>((set: SetState<FriendStore>, get) => ({
  loadingFriends: false,
  allFriendships: [] as Friendship[],
  acceptedFriendProfiles: [] as Profile[],
  incomingFriendProfiles: [] as Profile[],
  outgoingFriendProfiles: [] as Profile[],
  friendSubscription: null,
  clearFriends: () => set({acceptedFriendProfiles: [], incomingFriendProfiles: [], outgoingFriendProfiles: [], allFriendships: []}),
  fetchFriends: async (userProfile: Profile) => {
    set({ loadingFriends: true });

    const friendshipSub = DataStore.observeQuery(Friendship, (c) =>
      c.or((c) => [
        c.profileID.eq(userProfile.id),
        c.friendProfileID.eq(userProfile.id),
      ])
    ).subscribe(async ({items}) => {
      const profileID = userProfile.id;

      const acceptedFriends = [] as Profile[];
      const incomingFriendRequests = [] as Profile[];
      const outgoingFriendRequests = [] as Profile[];

      await Promise.all(
        items.map(async (friend) => {
          const relatedProfile =
            friend.profileID === profileID
              ? await friend.friendProfile
              : await friend.profile;

          if (friend.isAccepted) {
            acceptedFriends.push(relatedProfile as Profile);
          } else if (friend.friendProfileID === profileID) {
            incomingFriendRequests.push(relatedProfile as Profile);
          } else {
            outgoingFriendRequests.push(relatedProfile as Profile);
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
  friendUnsubscribe: () => {
    const friendSub = get().friendSubscription;
    if (friendSub) {
      friendSub.unsubscribe()
    }
  }
}));

export default useFriendStore;