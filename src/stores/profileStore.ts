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
}

const useProfileStore = create<ProfileStore>((set: SetState<ProfileStore>,  get) => ({
  userProfile: null,
  loadingUserProfile: false,
  error: null,
  fetchUserProfile: async (sub: string, route: string) => {
    set({loadingUserProfile: true})
    try {
      console.log("Fetching profile, ", sub, route)
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
  clearUserProfile: () => set({userProfile: null, error: null}),
  setProfilePhoto: (photoID: string) => set((state) => ({
    userProfile: state.userProfile ? {...state.userProfile, profilePhotoID: photoID} : null
  })),
  setProfile: (profile: UserProfile | null) => set(() => ({
    userProfile: profile
  }))
}))

export default useProfileStore;
