import React from "react";
import Header from "../layout/Header";

function Fallback({ error } : {error: any}) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  console.log("Error: ", error)

  return (
    <div className="pt-24">
      <Header/>
      <div className="p-4 text-center">
        <h1 className='text-2xl my-4'>Dang! Something went wrong!</h1>
        <p className="text-red-500" style={{ color: "red" }}>{error.message}</p>
      </div>
    </div>
  );
}

export default Fallback