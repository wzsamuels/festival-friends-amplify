// ImageProvider.tsx
import React, { useState } from "react";
import { Storage } from "aws-amplify";
import ImageContext from "./ImageContext";
import getErrorMessage from "../lib/getErrorMessage";
import {S3Levels} from "../@types/s3";

interface ImageProviderProps {
  children: React.ReactNode;
}

const ImageProvider = ({ children }: ImageProviderProps) => {
  const [imageURLs, setImageURLs] = useState<{ [key: string]: string }>({});

  // Only fetch the signed URL once per image
  const getSignedURL = async (s3Key: string, level: S3Levels = 'public', identityId?: string) => {
    // Check if the image key has already been fetched and stored in the state.
    // If not, fetch it and store it in the state.
    // This is to avoid fetching the same image key multiple times.
    if (!imageURLs[s3Key]) {
      try {
        const signedURL = await Storage.get(s3Key, {
          level: level,
          expires: 60 * 60 * 24,
          identityId: identityId
        });
        setImageURLs((prevState) => ({ ...prevState, [s3Key]: signedURL }));
        return signedURL;
      } catch (e) {
        console.log("Error fetching signed URL", getErrorMessage(e));
      }
    }
    return imageURLs[s3Key];
  };

  return (
    <ImageContext.Provider value={{ imageURLs, getSignedURL }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
