import React from "react";
import { useController } from "react-hook-form";

const FileInput = ({title, register}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="shrink-0 flex flex-col items-center">
        <img
          className="object-cover w-6 h-6 rounded-full"
          src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"
          alt="profile photo"
        />
        <span className="text-sm text-gray-400">{title}</span>
      </div>
      <label className="block">
        <span className="sr-only">Choose File</span>
        <input
          multiple
          type="file"
          {...register('file')}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </label>
    </div>
  );
};

export default FileInput;
