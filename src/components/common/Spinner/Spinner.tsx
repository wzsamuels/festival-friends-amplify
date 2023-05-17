// Spinner.tsx
import React from "react";

const Spinner = () => {
  return (
    <div
      className="w-16 h-16 border-t-4 border-t-green-950 border-solid rounded-full animate-spin"
      data-testid="spinner"
    ></div>
  );
};

export default Spinner;
