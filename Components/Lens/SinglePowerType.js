import { Input } from "@mui/material";
import React from "react";
import Image from "next/image";

const  SinglePowerType = (props) => {
  const { src, title, description } = props;

  return (
    <div className="flex items-center justify-between text-gray-700 border hover:shadow-lg rounded-md p-4 cursor-pointer w-[50%] mx-auto">
      <div className="flex items-center gap-4">
        <div className="w-28 flex items-center">
          <Image
            width={100}
            height={100}
            alt=""
            src={src}
            className="w-auto h-22"
          />
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="rounded-full">
        <Input
          type="checkbox"
          className="h-4 w-4 cursor-pointer"
          id="checkbox"
        />
      </div>
    </div>
  );
};

export default SinglePowerType;
