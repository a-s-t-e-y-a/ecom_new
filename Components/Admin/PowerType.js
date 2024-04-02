import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";

const PowerType = (props) => {
  const { src, title, description, onClick } = props;
  return (
    <div className="relative flex items-center justify-start gap-5 text-gray-700 bg-gray-50 border hover:shadow-lg rounded-md p-5 cursor-pointer w-full mx-auto">
      <div className="w-28 flex items-center">
        <Image
          width={100}
          height={100}
          alt=""
          src={src}
          className="w-auto h-12"
        />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <span className="absolute right-2 text-sm text-red-500 cursor-pointer" onClick={onClick}>
        <DeleteOutlineIcon className="text-base" />
      </span>
    </div>
  );
};

export default PowerType;
