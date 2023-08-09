import {Storage} from "@aws-amplify/storage";
import {v4 as uuidv4} from "uuid";
import {Photo, Profile} from "../models";
import {DataStore} from "@aws-amplify/datastore";

export const getPhoto = async (photoID: string | null | undefined) => {
  if(!photoID) return null;
  try {
    return await DataStore.query(Photo, photoID);
  } catch (e) {
    console.log("Error getting photo:", e);
    return null;
  }
}

export const getPhotoURL = async (photoID: string | null | undefined) => {
  if(!photoID) return "";
  try {
    const photo = await DataStore.query(Photo, photoID);
    if(!photo) return "";
    if(photo.identityId) {
      return `${import.meta.env.VITE_CLOUDINARY_URL}/protected/${photo.identityId}/${photo.s3Key}${import.meta.env.VITE_CLOUDINARY_TRANSFORM}`
    }
    return `${import.meta.env.VITE_CLOUDINARY_URL}/public/${photo.s3Key}${import.meta.env.VITE_CLOUDINARY_TRANSFORM}`
  } catch (e) {
    console.log("Error getting photo URL:", e);
    return "";
  }
}

export const createNewPhoto = async (sub: string, photoFile: File, profileID: string) => {
  const id = uuidv4();

  try {
    await Storage.put(`${sub}/${id}`, photoFile, {
      contentType: photoFile.type,
      level: "public"
    });
  } catch (e) {
    console.log("Error uploading file:", e);
  }

  try {
    return await DataStore.save(
      new Photo({
        s3Key: `${sub}/${id}`,
        profileID: profileID,
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