import React from "react";

const IconButton = ({ label, icon }) => {
  return (
    <button
      type="button"
      className="text-white tracking-wide bg-blue-600 hover:bg-blue-700 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <span className="text-xl font-extrabold mr-2 -ml-1">{icon}</span>
      {label}
    </button>
  );
};

export default IconButton;
