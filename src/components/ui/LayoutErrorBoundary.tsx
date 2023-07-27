import {useLocation} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import Header from "../layout/Header";

const LayoutErrorBoundary = () => {
  const [errorString, setErrorString] = useState("");
  //const error = useRouteError();
  let errorMessage: string;
  const location = useLocation();

  /*
  useEffect(() => {
    if(error) {
      const allProps = Object.getOwnPropertyNames(error);
      const objWithAllProps = {};

      allProps.forEach(prop => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        objWithAllProps[prop] = error[prop];
      });
      const stringifiedObj = JSON.stringify(objWithAllProps);
      console.log(stringifiedObj); // {"prop":"Hello"}
      setErrorString(stringifiedObj);
    }
  }, [error])

  console.log("Error: ", error);
  console.log("Error string: ", errorString);

   */

/*
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

 */

  // Uncaught ReferenceError: path is not defined
  return (
    <div>
      <Header/>
      <div className="p-4 text-center">
        <h1 className='text-2xl my-4'>Dang! Something went wrong!</h1>
        <h2 className='text-xl my-4'>Current location: {location.pathname}</h2>
        <h2 className='text-xl my-4'>Please send this error message, the current url, and your account&apos;s email to contact@twinsilverdesign.com</h2>
        <h3 className="text-lg my-4 text-red-500">Unknown Error</h3>
        <p className="text-red-500">{errorString}</p>
      </div>
    </div>
  )
}

export default LayoutErrorBoundary