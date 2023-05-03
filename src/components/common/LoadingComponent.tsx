import React from 'react';
import Spinner from './Spinner';

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  );
};

export default LoadingComponent;