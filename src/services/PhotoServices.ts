import {API, Auth, graphqlOperation, Storage} from "aws-amplify";
import {v4 as uuidv4} from "uuid";
import {createPhoto} from "../graphql/mutations";
import {GraphQLResult} from "@aws-amplify/api";
import {Photo} from "../models";

// TODO: Add error handling

type GraphQLResultExtended = GraphQLResult & {
  data: {
    createPhoto: Photo
  };
  errors?: { message: string }[]
};

export const createNewPhoto = async (sub: string, photoFile: File, profileID: string) => {
  const id = uuidv4();
  const credentials = await Auth.currentCredentials();
  const identityId = credentials.identityId;

  await Storage.put(`${sub}/${id}`, photoFile, {
    contentType: photoFile.type,
    level: "protected",
  });

  const photoData = await API.graphql(graphqlOperation(createPhoto, {
    input: {
      s3Key: `${sub}/${id}`,
      isPrivate: false,
      userProfileID: profileID,
      identityId: identityId
    }
  })) as GraphQLResultExtended;

  return photoData.data.createPhoto;
}