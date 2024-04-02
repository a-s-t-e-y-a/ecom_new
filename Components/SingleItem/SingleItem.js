import React from "react";
import Image from "next/image";

const SingleItem = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="w-auto h-8">
        <Image
          height={100}
          width={100}
          alt=""
          src={data.src}
          className="h-full"
        />
      </div>
      <div className="flex flex-col items-center ">
        <span className="font-bold text-sm tracking-wider">{data.width}</span>
        <span className="text-xs text-gray-600">{data.title}</span>
      </div>
    </div>
  );
};

export default SingleItem;
