import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <span className="loading loading-spinner text-error"></span>
      <h2 className="mt-4 text-xl font-semibold text-slate-700">
        Loading Courses...
      </h2>
    </div>
  );
};

export default Loading;
