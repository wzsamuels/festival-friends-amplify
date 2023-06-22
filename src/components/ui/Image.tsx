import React, {ComponentProps, useEffect, useState} from "react";
import Spinner from "../common/Spinner/Spinner";

const Image = ({className, onClick, src, alt}: ComponentProps<"img">) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    const img = new window.Image();
    img.onload = () => setLoading(false);
    img.src = src || "";
  }, [src])

  return (
    <>
      <div className={`${className} flex justify-center items-center ${loading ? 'block' : 'hidden'}`}>
        <Spinner/>
      </div>
      <img
        onClick={onClick}
        className={`${loading ? 'hidden' : 'block'} ${className}`}
        src={src}
        alt={alt}
      />
    </>
  );
}

export default Image;
