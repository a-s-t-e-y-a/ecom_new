"use client";
import React from "react";

const BlogItem = ({ value }) => {
  return (
    <div className=" ">
      <div className=" shadow-md p-3 rounded-lg min-h-[400px]">
        <img
          className=" rounded w-[200px] h-[200px] object-contain mx-auto mb-4"
          src={value?.imageArray}
          alt="content"
        />
        <h2 className="text-lg text-gray-900 font-bold">{value?.heading}</h2>
        <h3 className="text-gray-500 text-[10px] mb-1  tracking-wide">
          {value?.created_on}
        </h3>
        <p
          className="text-sm font-sm tracking-wide"
          dangerouslySetInnerHTML={{ __html: value?.description }}
        ></p>
      </div>
    </div>
  );
};

export default BlogItem;
