import {Festival, Photo, UserProfile} from "../models";
import {DataStore} from "aws-amplify";
import {S3Levels} from "../@types/s3";

export const getProfile = async (userID: string) => {
  try {
    return await DataStore.query(UserProfile, userID);
  } catch (e) {
    console.log("Error getting profile", e)
    return null;
  }
}

export const getProfilePhoto = async (
  profile: UserProfile | null | undefined,
  getSignedURL: (s3Key: string, level: S3Levels, identityId?: string | undefined) => Promise<string>) => {
  if(!profile || !profile.profilePhotoID) return "";

  try {
    const photo = await DataStore.query(Photo, profile.profilePhotoID)
    if (photo) {
      return await getSignedURL(photo.s3Key, "protected", photo.identityId)
    }
  } catch (e) {
    console.log("Error getting profile photo", profile, e)
  }

  return "";
};

export const getBannerPhoto = async (
  profile: UserProfile | null | undefined,
  getSignedURL: (s3Key: string, level: S3Levels, identityId?: string | undefined) => Promise<string>) => {
  if(!profile || !profile.bannerPhotoID) return "";

  try {
    const photo = await DataStore.query(Photo, profile.bannerPhotoID)
    if (photo) {
      return await getSignedURL(photo.s3Key, "protected", photo.identityId)
    }
  } catch (e) {
    console.log("Error getting banner photo", profile, e)
  }

  return "";
};

export const getVerifyPhoto = async (
  profile: UserProfile | null | undefined,
  getSignedURL: (s3Key: string, level: S3Levels, identityId?: string | undefined) => Promise<string>) => {
  if(!profile || !profile.verifyPhotoID) return "";

  try {
    const photo = await DataStore.query(Photo, profile.verifyPhotoID)
    if (photo) {
      return await getSignedURL(photo.s3Key, "protected", photo.identityId)
    }
  } catch (e) {
    console.log("Error getting profile photo", profile, e)
  }

  return "";
};

export const updateProfilePhoto = async (profile: UserProfile, photoID: string) => {
  try {
    const originalProfile = await DataStore.query(UserProfile, profile.id);
    if(!originalProfile) return null;

    const updatedProfile = UserProfile.copyOf(originalProfile, updated => {
      updated.profilePhotoID = photoID;
    });

    // Return the updated profile
    return await DataStore.save(updatedProfile);
  } catch (e) {
    console.log("Error updating profile photo", e)
    return null;
  }
}

export const updateBannerPhoto = async (profile: UserProfile, photoID: string) => {
  try {
    const originalProfile = await DataStore.query(UserProfile, profile.id);
    if(!originalProfile) {
      console.error('No profile found');
      return null;
    }

    const updatedProfile = UserProfile.copyOf(originalProfile, updated => {
      updated.bannerPhotoID = photoID;
    });

    // Return the updated profile
    return await DataStore.save(updatedProfile);
  } catch (e) {
    console.log("Error updating banner photo", e)
    return null;
  }
}

export const getEventsAttending = async (profile: UserProfile) => {
  try {
    const eventProfiles = await profile.attendingEvents.toArray();
    return await Promise.all(
      eventProfiles.map(async (eventProfile) => await eventProfile.event)
    );
  } catch (e) {
    console.log("Error getting profile", e)
    return [];
  }
}

export const getUserEvents = async (profile: UserProfile | null) => {
  if(!profile) return [];
  try {
    return await DataStore.query(Festival, c => c.customerID.eq(profile.customerID))
  } catch (e) {
    console.log("Error getting profile", e)
    return [];
  }
}