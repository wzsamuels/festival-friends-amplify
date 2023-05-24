import {Auth, Storage} from "aws-amplify";
import {v4 as uuidv4} from "uuid";
import {GraphQLResult} from "@aws-amplify/api";
import {Photo, UserProfile} from "../models";
import {DataStore} from "@aws-amplify/datastore";

// TODO: Add error handling

type GraphQLResultExtended = GraphQLResult & {
  data: {
    createPhoto: Photo
  };
  errors?: { message: string }[]
};

export const createNewPhoto = async (sub: string, photoFile: File, profile: UserProfile) => {
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
        userProfileID: profile.id,
        identityId: identityId
      }));
  } catch (e) {
    console.log("Error saving photo:", e);
    return null;
  }

  /*
  const photoData = await API.graphql(graphqlOperation(createPhoto, {
    input: {
      s3Key: `${sub}/${id}`,
      isPrivate: false,
      userProfileID: profileID,
      identityId: identityId
    }
  })) as GraphQLResultExtended;

  return photoData.data.createPhoto;

   */


}