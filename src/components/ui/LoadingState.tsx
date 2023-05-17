import Spinner from "../common/Spinner/Spinner";
import React from "react";

const LoadingState = () => {
  return (
    <div className="flex justify-center m-4 h-[50vh] items-center">
      <Spinner />
    </div>
  );
};

export default LoadingState;
