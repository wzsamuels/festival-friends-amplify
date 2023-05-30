import React, {Dispatch, SetStateAction} from "react";

const ImageUpload = ({setSelectedFile} : {setSelectedFile : Dispatch<SetStateAction<File | null>>}) => {
  return (
    <>
      <label
        htmlFor="upload-profile-image-photo"
        className="my-4 cursor-pointer flex justify-center p-4 border bg-green-950 text-white border-primary-default"
      >
        Upload New Photo
      </label>
      <input
        type="file"
        id="upload-profile-image-photo"
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