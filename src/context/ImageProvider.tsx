// ImageProvider.tsx
import React, {useState} from 'react';
import { Storage } from 'aws-amplify';
import ImageContext from './ImageContext';

interface ImageProviderProps {
  children: React.ReactNode;
}

const ImageProvider = ({ children } : ImageProviderProps) => {
  const [imageURLs, setImageURLs] = useState<{ [key: string]: string }>({});

  // Only fetch the signed URL once per image
  const getSignedURL = async (s3Key: string) => {
    if (!imageURLs[s3Key]) {
      const signedURL = await Storage.get(s3Key, { level: 'public', expires: 60 * 60 * 24});
      setImageURLs((prevState) => ({ ...prevState, [s3Key]: signedURL }));
      return signedURL;
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
