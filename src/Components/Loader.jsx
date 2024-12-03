import React from "react";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-36 w-36 border-t-4 border-t-transparent border-l-4 border-l-red-600 border-r-4 border-r-transparent"></div>
        <div className="absolute animate-spin-slow rounded-full h-24 w-24 border-b-4 border-b-transparent border-r-4 border-r-yellow-500"></div>
        <div className="absolute text-white text-xl font-semibold animate-pulse">
          Rakesh
        </div>
      </div>
    </div>
  );
};
export default Loader;
