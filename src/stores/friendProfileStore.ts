import {create, SetState} from "zustand";
import {Friendship, UserProfile} from "../models";
import {API, graphqlOperation, GraphQLResult} from "@aws-amplify/api";
import { listFriendships } from "../graphql/queries";
import {DataStore} from "aws-amplify";

type GraphQLResultExtended = GraphQLResult & {
  data: {
    listFriendships: {
      items: Friendship[];
    };
  };
  errors?: { message: string }[]
};

interface FriendStore {
  clearFriends: () => void;
  fetchFriends: (userProfile:  UserProfile) => void;
  loadingFriends: boolean;
  allFriendships: Friendship[];
  acceptedFriendProfiles: UserProfile[];
  incomingFriendProfiles: UserProfile[];
  outgoingFriendProfiles: UserProfile[];
}

const useFriendStore = create<FriendStore>((set: SetState<FriendStore>) => ({
  loadingFriends: false,
  allFriendships: [] as Friendship[],
  acceptedFriendProfiles: [] as UserProfile[],
  incomingFriendProfiles: [] as UserProfile[],
  outgoingFriendProfiles: [] as UserProfile[],
  clearFriends: () => set({acceptedFriendProfiles: [], incomingFriendProfiles: [], outgoingFriendProfiles: [], allFriendships: []}),
  fetchFriends: async (userProfile: UserProfile) => {
    set({ loadingFriends: true });
    /*
    const graphqlData = await API.graphql(graphqlOperation(listFriendships, {
      filter: {
        or: [
          { userProfileID: { eq: userProfile.id } },
          { friendProfileID: { eq: userProfile.id } },
        ],
        and: [
          { isAccepted: { eq: true } }
        ]
      }
    })) as GraphQLResultExtended;
    const items = graphqlData.data.listFriendships.items;
     */
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

    return () => {
      friendshipSub.unsubscribe();
    };
  }

}));

export default useFriendStore;