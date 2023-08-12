import React, {ComponentProps, useState} from "react";
import { Photo } from "../../models";
import {S3Levels} from "../../@types/s3";
import Spinner from "../common/Spinner/Spinner";

interface PhotoProps extends ComponentProps<"img"> {
  photo: Photo;
  level?: S3Levels;
}

const PhotoImage = ({ photo, className, onClick, level }: PhotoProps) => {
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false);
  }

  if (!photo) {
    return null;
  }

  return (
    <>
      <div className={`h-full w-full justify-center items-center flex ${loading ? 'block' : 'hidden'}`}>
        <Spinner/>
      </div>
      <img
        onLoad={handleImageLoad}
        onClick={onClick}
        className={`w-full h-full object-cover ${loading ? 'hidden' : 'block'} ${className}`}
        src={`${import.meta.env.VITE_CLOUDINARY_URL}/${level && photo.identityId ? level : "public"}/${photo.identityId ? `${photo.identityId}/` : ''}${photo.s3Key}${import.meta.env.VITE_CLOUDINARY_TRANSFORM}`}
        alt={`${photo.description ? photo.description : "Photo"}`}
      />
    </>
  );
};

export default PhotoImage;
