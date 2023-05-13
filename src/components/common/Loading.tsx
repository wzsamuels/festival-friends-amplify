import Spinner from "./Spinner/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className='flex justify-center m-4 h-[50vh] items-center'>
      <Spinner/>
    </div>
  )
}

export default Loading;