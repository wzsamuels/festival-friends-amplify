import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ImageContext from "../../context/ImageContext";
import { LazyFestival } from "../../models";

interface EventCardBaseProps {
  festival: LazyFestival
  className?: string
}

const EventCardBase = ({ festival, className }: EventCardBaseProps) => {
  const { getSignedURL } = useContext(ImageContext);
  const [festivalImage, setFestivalImage] = useState("");
  useEffect(() => {
    const fetchSignedURL = async () => {
      const url = await getSignedURL(festival.image);
      setFestivalImage(url);
    };

    fetchSignedURL();
  }, [festival.image, getSignedURL]);

  return (
    <div className={`rounded-xl shadow-md w-full max-w-[350px] bg-light-default ${className}`}>
      <Link className="relative" to={`/events/${festival.id}`}>
        <div className="w-full max-w-[350px] min-h-[350px] h-full max-h-[350px] object-cover flex items-center justify-center">
          {festivalImage ? (
            <img
              className="w-full h-full"
              src={festivalImage}
              alt={festival.name}
            />
          ) : null}
        </div>
        <div className=" bottom-4 left-4 rounded-xl z-10 w-full p-4 font-bold ">
          <div className="bold min-h-[3rem]">
            {festival.name} - {festival.location}
          </div>

          <div>{festival.startDate}</div>
        </div>
      </Link>
    </div>
  );
};

export default EventCardBase;
