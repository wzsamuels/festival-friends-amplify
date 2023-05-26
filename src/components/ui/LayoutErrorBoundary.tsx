import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import React from "react";

const LayoutErrorBoundary = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = `Error ${error.status} - ${error.statusText} - ${error.error?.message}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  // Uncaught ReferenceError: path is not defined
  return (
    <div className="p-4 text-center">
      <h1 className='text-2xl my-4'>Dang! Something went wrong!</h1>
      <h2 className='text-xl'>{errorMessage}</h2>
    </div>
  )
}

export default LayoutErrorBoundary