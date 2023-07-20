

import React from "react";

const LoadingCircle = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-white border-solid h-12 w-12"></div>
    </div>
  );
};

export default LoadingCircle;
