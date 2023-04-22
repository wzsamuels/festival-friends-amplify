import React, {ComponentProps, useEffect, useState} from "react";
import {Photo} from "../models";
import {Storage} from "aws-amplify";

interface PhotoProps extends ComponentProps<'img'> {
  photo: Photo
}

const PhotoImage = ({photo, className, onClick} : PhotoProps) => {
  const [photoUrl, setPhotoUrl] = useState('')
  console.log(photo)

  useEffect(() => {
    if(photo) {
      Storage.get(photo.s3Key, {
        level: "public"
      }).then(url => {
        setPhotoUrl(url)
      })
    }
  }, [photo])

  if(!photo) {
    return null;
  }
  return (
    <img onClick={onClick} className={`w-full h-full ${className}`} src={photoUrl} alt={`${photo.description ? photo.description : "Photo"}`}/>
  )
}

export default PhotoImage;