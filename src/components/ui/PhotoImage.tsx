import React, { ComponentProps, useContext, useEffect, useState } from "react";
import { Photo } from "../../models";
import ImageContext from "../../context/ImageContext";

interface PhotoProps extends ComponentProps<"img"> {
  photo: Photo;
}

const PhotoImage = ({ photo, className, onClick }: PhotoProps) => {
  const [photoUrl, setPhotoUrl] = useState("");
  const { getSignedURL } = useContext(ImageContext);

  useEffect(() => {
    const fetchSignedURL = async () => {
      const url = await getSignedURL(photo.s3Key);
      setPhotoUrl(url);
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
