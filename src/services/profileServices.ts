import {Event, Profile} from "../models";
import {DataStore} from "@aws-amplify/datastore";

export const getProfile = async (userID: string) => {
  try {
    return await DataStore.query(Profile, userID);
  } catch (e) {
    console.log("Error getting profile", e)
    return null;
  }
}

export const updateProfilePhoto = async (profile: Profile, photoID: string) => {
  try {
    const originalProfile = await DataStore.query(Profile, profile.id);
    if(!originalProfile) return null;

    const updatedProfile = Profile.copyOf(originalProfile, updated => {
      updated.profilePhotoID = photoID;
    });

    // Return the updated profile
    return await DataStore.save(updatedProfile);
  } catch (e) {
    console.log("Error updating profile photo", e)
    return null;
  }
}

export const updateBannerPhoto = async (profile: Profile, photoID: string) => {
  try {
    const originalProfile = await DataStore.query(Profile, profile.id);
    if(!originalProfile) {
      console.error('No profile found');
      return null;
    }

    const updatedProfile = Profile.copyOf(originalProfile, updated => {
      updated.bannerPhotoID = photoID;
    });

    // Return the updated profile
    return await DataStore.save(updatedProfile);
  } catch (e) {
    console.log("Error updating banner photo", e)
    return null;
  }
}

export const getUserEvents = async (profile: Profile | null) => {
  if(!profile || !profile.customerID) return [];
  try {
    return await DataStore.query(Event, c => c.customerID.eq(profile.customerID))
  } catch (e) {
    console.log("Error getting profile", e)
    return [];
  }
}