import React, {ComponentProps, useEffect, useState} from "react";
import Spinner from "../common/Spinner/Spinner";

const Image = ({className, onClick, src, alt}: ComponentProps<"img">) => {
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
  }, [src])

  return (
    <>
      <div className={`${className} flex justify-center items-center ${loading ? 'block' : 'hidden'}`}>
        <Spinner/>
      </div>
      <img
        onLoad={handleImageLoad}
        onClick={onClick}
        className={`${loading ? 'hidden' : 'block'} ${className}`}
        src={src}
        alt={alt}
      />
    </>
  );
}

export default Image