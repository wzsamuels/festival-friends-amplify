import create from "zustand";
import { combine } from "zustand/middleware";
import { DataStore } from "@aws-amplify/datastore";
import { UserProfile, Friendship } from "../models";

const friendProfilesStore = create(
  combine(
    {
      userProfile: null as UserProfile | null,
      friendProfiles: [] as UserProfile[],
      loadingUserProfile: true,
      loadingFriendProfiles: true,
    },
    (set) => ({
      fetchAndObserveUserProfile: async (username: string, route: string) => {
        console.log("fetchAndObserveUserProfile called\nRoute :", route, "\nUsername: ", username);

        if (route !== "authenticated") {
          set({ loadingUserProfile: false, loadingFriendProfiles: false });
          return;
        }

        set({ loadingUserProfile: true });

        await DataStore.start();
        let userProfiles = [] as UserProfile[];
        try {
          userProfiles = await DataStore.query(UserProfile, (c) =>
            c.userID.eq(username)
          );
          console.log(userProfiles);
        } catch (error) {
          console.log('Error querying UserProfile', error);
        }

        if (userProfiles.length > 0) {
          const userProfile = userProfiles[0];
          console.log(userProfile);
          set({ userProfile, loadingUserProfile: false });

          // Observe user profile
          const userSub = DataStore.observe(
            UserProfile,
            userProfile.id
          ).subscribe((msg) => {
            if (msg.opType === 'INSERT' || msg.opType === "UPDATE") {
              set({ userProfile: msg.element });
            }
          });

          // Observe friend profiles
          const friendsSub = DataStore.observeQuery(Friendship, (c) =>
            c.and((c) => [
              c.isAccepted.eq(true),
              c.or((c) => [
                c.friendProfileID.eq(userProfile.id),
                c.userProfileID.eq(userProfile.id),
              ]),
            ])
          ).subscribe(async ({ items }) => {
            set({ loadingFriendProfiles: true });

            const friendPromises = items.map(async (item) =>
              item.userProfileID === userProfile.id
                ? await item.friendProfile
                : await item.userProfile
            );

            const friendProfiles = await Promise.all(friendPromises);

            set({ friendProfiles, loadingFriendProfiles: false });
          });

          return () => {
            userSub.unsubscribe();
            friendsSub.unsubscribe();
          };
        } else {
          set({ loadingUserProfile: false, loadingFriendProfiles: false });
        }
      },
      reset: () => {
        set({
          userProfile: null,
          friendProfiles: [],
          loadingUserProfile: true,
          loadingFriendProfiles: true,
        });
      },
    })
  )
);

export const useUserProfileStore = friendProfilesStore;
