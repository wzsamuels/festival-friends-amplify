import {SetState, create} from "zustand";
import { DataStore} from "@aws-amplify/datastore";
import {Profile} from "../models";
import getErrorMessage from "../lib/getErrorMessage";

type ProfileStore = {
  userProfile: Profile | null,
  fetchUserProfile: (sub: string, route: string) => void,
  clearUserProfile: () => void,
  loadingUserProfile: boolean,
  error: string | null,
  subscription: any,
  setProfilePhoto: (photoID: string) => void,
  setProfile: (profile: Profile | null) => void,
  unsubscribeProfile: () => void
}

const useProfileStore = create<ProfileStore>((set: SetState<ProfileStore>,  get) => ({
  userProfile: null,
  loadingUserProfile: false,
  error: null,
  subscription: null,
  fetchUserProfile: async (email: string, route: string) => {
    set({loadingUserProfile: true})
    try {
      console.log("Fetching profile, ", email, route)
      //const profile = await DataStore.query(Profile, c => c.email.eq(email))
      const profileSub = DataStore.observeQuery(Profile, c => c.email.eq(email)).subscribe(({items}) =>
      {
        set({userProfile: items[0]})
        console.log("Profile fetched: ", items)
      })
      //set({userProfile: profile[0]})
      //console.log("Profile fetched: ", profile[0])
      set({subscription: profileSub})
    }
    catch (e) {
      console.error("Error fetching user profile in ProfileStore: ", e)
      set({userProfile: null, error: getErrorMessage(e) || 'Unknown error'})
    } finally {
      set({loadingUserProfile: false})
      console.log("Profile loading complete");
    }
  },
  clearUserProfile: () => set({userProfile: null, error: null}),
  setProfilePhoto: (photoID: string) => set((state) => ({
    userProfile: state.userProfile ? {...state.userProfile, profilePhotoID: photoID} : null
  })),
  setProfile: (profile: Profile | null) => set(() => ({
    userProfile: profile
  })),
  unsubscribeProfile: () => {
    get().subscription?.unsubscribe()
  }
}))

export default useProfileStore;
