'use client'
import React from "react";

const BlogItem = ({ value }) => {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md p-3 rounded-lg">
        <img
          className=" rounded w-full object-fit object-center mb-4"
          src={value?.imageArray}
          alt="content"
        />
        <h2 className="text-lg text-gray-900 font-bold">{value?.seo_title}</h2>
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
