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

export const updateProfilePhoto = async (profileID: string, photoID: string) => {
  await API.graphql(graphqlOperation(updateUserProfile, {
    input: {
      id: profileID,
      profilePhotoID: photoID,
    }
  }));
}