import {Auth, Storage} from "aws-amplify";
import {v4 as uuidv4} from "uuid";
import {Photo, Profile} from "../models";
import {DataStore} from "@aws-amplify/datastore";

export const createNewPhoto = async (sub: string, photoFile: File, profileID: string) => {
  const id = uuidv4();
  const credentials = await Auth.currentCredentials();
  const identityId = credentials.identityId;

  try {
    await Storage.put(`${sub}/${id}`, photoFile, {
      contentType: photoFile.type,
      level: "protected",
    });
  } catch (e) {
    console.log("Error uploading file:", e);
  }

  try {
    return await DataStore.save(
      new Photo({
        s3Key: `${sub}/${id}`,
        isPrivate: false,
        profileID: profileID,
        identityId: identityId
      }));
  } catch (e) {
    console.log("Error saving photo:", e);
    return null;
  }
}

export const getPhotosByProfile = async (profile: Profile) => {
  try {
    return await DataStore.query(Photo, (c) =>
      c.profileID.eq(profile.id)
    );
  } catch (e) {
    console.log("Error getting photos:", e);
    return [];
  }
}

export const deletePhoto = async (photo: Photo) => {
  try {
    await DataStore.delete(photo);
    await Storage.remove(`${photo.s3Key}`);
  } catch (e) {
    console.log("Error deleting photo:", e);
  }
}