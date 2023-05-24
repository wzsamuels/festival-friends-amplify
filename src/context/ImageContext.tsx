// ImageContext.tsx
import { createContext } from "react";
import {S3Levels} from "../@types/s3";

interface ImageContextData {
  imageURLs: { [key: string]: string };
  getSignedURL: (s3Key: string, level: S3Levels, identityId?: string) => Promise<string>;
}

const ImageContext = createContext<ImageContextData>({} as ImageContextData);

export default ImageContext;
