import React from "react";
import Image from "next/image";

const FileInput = ({ title, register, name = "file" }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="shrink-0 flex flex-col items-center">
        <Image
          width={50}
          height={50}
          className="object-cover rounded-full"
          src={
            "https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"
          }
          alt="profile photo"
        />
        <span className="text-sm text-gray-400">{title}</span>
      </div>
      <label className="block">
        <span className="sr-only">Choose File</span>
        <input
          multiple
          type="file"
          name={name}
          {...register(name)}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </label>
    </div>
  );
};

export default FileInput;
