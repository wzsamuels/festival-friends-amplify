import {Photo, UserProfile} from "../models";
import {API, DataStore, graphqlOperation} from "aws-amplify";
import {S3Levels} from "../@types/s3";
import {updateUserProfile} from "../graphql/mutations";

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