import React from "react";
import Image from "next/image";
const BlogItem = ({ value }) => {
  return (
    <div className=" ">
      <div className=" shadow-md p-3 rounded-lg min-h-[320px] max-h-[320px]">
        <img
          className=" rounded object-contain mx-auto mb-4"
          src={value?.image}
          alt={value?.thumb}
        />
        <h2 className="text-lg text-gray-900 font-bold mb-3">
          {value?.heading}
        </h2>
        <h3 className="text-gray-500 text-xs  mb-1  tracking-wide">
          {value?.created_on}
        </h3>
      </div>
    </div>
  );
};

export default BlogItem;
