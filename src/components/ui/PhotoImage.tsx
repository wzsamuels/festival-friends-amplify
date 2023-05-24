import React, { ComponentProps, useContext, useEffect, useState } from "react";
import { Photo } from "../../models";
import ImageContext from "../../context/ImageContext";
import {S3Levels} from "../../@types/s3";

interface PhotoProps extends ComponentProps<"img"> {
  photo: Photo;
  level?: S3Levels;
}

const PhotoImage = ({ photo, className, onClick, level }: PhotoProps) => {
  const [photoUrl, setPhotoUrl] = useState("");
  const { getSignedURL } = useContext(ImageContext);

  useEffect(() => {
    const fetchSignedURL = async () => {
      getSignedURL(photo.s3Key, level || "public",  photo.identityId)
        .then(signedUrl => {
          setPhotoUrl(signedUrl);
        })
        .catch(err => {
          console.log("Error", err)
          setPhotoUrl("")
        });
    };

    fetchSignedURL();
  }, [photo.s3Key, getSignedURL]);

  if (!photo) {
    return null;
  }
  return (
    <img
      onClick={onClick}
      className={`w-full h-full ${className}`}
      src={photoUrl}
      alt={`${photo.description ? photo.description : "Photo"}`}
    />
  );
};

export default PhotoImage;
