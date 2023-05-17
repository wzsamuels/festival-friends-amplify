// ImageContext.tsx
import { createContext } from "react";

interface ImageContextData {
  imageURLs: { [key: string]: string };
  getSignedURL: (s3Key: string) => Promise<string>;
}

const ImageContext = createContext<ImageContextData>({} as ImageContextData);

export default ImageContext;
