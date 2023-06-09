import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";
const ImageUpload = ({setSelectedFile} : {setSelectedFile : Dispatch<SetStateAction<File | null>>}) => {
  const id = useRef<string>(uuidv4());
  return (
    <>
      <label
        htmlFor={`upload-profile-image-photo-${id.current}`}
        className="my-4 cursor-pointer flex justify-center p-4 border bg-lightYellow"
      >
        Upload New Photo
      </label>
      <input
        type="file"
        id={`upload-profile-image-photo-${id.current}`}
        accept="image/png, image/jpeg"
        onChange={(e) =>
          e?.target?.files && setSelectedFile(e.target.files[0])
        }
        className="my-4 hidden"
      />
    </>
  )
}

export default ImageUpload;