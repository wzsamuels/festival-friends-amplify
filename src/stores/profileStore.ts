import create, {SetState, } from "zustand";
import { DataStore} from "aws-amplify";
import {UserProfile} from "../models";
import getErrorMessage from "../lib/getErrorMessage";

type ProfileStore = {
  userProfile: UserProfile | null,
  fetchUserProfile: (sub: string, route: string) => void,
  clearUserProfile: () => void,
  loadingUserProfile: boolean,
  error: string | null,
  setProfilePhoto: (photoID: string) => void,
  setProfile: (profile: UserProfile | null) => void,
  profileSubscription: any
  unSubscribeProfile: () => void
}

const useProfileStore = create<ProfileStore>((set: SetState<ProfileStore>,  get) => ({
  userProfile: null,
  loadingUserProfile: false,
  error: null,
  profileSubscription: null,
  fetchUserProfile: async (sub: string, route: string) => {
    set({loadingUserProfile: true})
    try {

      /*
      const userprofileSub = DataStore.observeQuery(UserProfile, c => c.id.eq(sub))
        .subscribe(({items}) => {
          if (route === "authenticated") {
            console.log("Setting profile, ", sub, route)
            console.log("Profile: ", items[0])
            set({userProfile: items[0]})
          } else {
            console.log("Setting profile, ", sub, route)
            console.log("Profile: ", null)
            set({userProfile: null})
          }
        })

        set({profileSubscription: userprofileSub})

       */
      const profile = await DataStore.query(UserProfile, sub)
      set({userProfile: profile})

    }
    catch (e) {
      console.error("Error fetching user profile in ProfileStore: ", e)
      set({userProfile: null, error: getErrorMessage(e) || 'Unknown error'})
    } finally {
      set({loadingUserProfile: false})
    }
  },
  unSubscribeProfile: () => {
    if(get().profileSubscription) {
      get().profileSubscription.unsubscribe();
      set({profileSubscription: null})
    }
  },
  clearUserProfile: () => set({userProfile: null, error: null}),
  setProfilePhoto: (photoID: string) => set((state) => ({
    userProfile: state.userProfile ? {...state.userProfile, profilePhotoID: photoID} : null
  })),
  setProfile: (profile: UserProfile | null) => set(() => ({
    userProfile: profile
  }))
}))

export default useProfileStore;
