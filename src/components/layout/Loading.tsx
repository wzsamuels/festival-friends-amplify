// components/LoadingPage/LoadingPage.tsx
import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div className="w-full max-w-lg p-4 flex justify-center items-center text-primary-default">
      {/* Add your spinner or any other loading content here */}
      Loading...
    </div>
  );
};

export default LoadingPage;
