import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "@/Slices/filterSlice";
import { addData } from "@/Slices/CartSlice";

const SingleLensFeature = (props) => {
  const dispatch = useDispatch();
  const { src, title, description, key, onNext, powerTypeText } = props;

  return (
    <div
      onClick={() => {
        dispatch(addFilter({ lens_feature: title, power_type: powerTypeText }));
        onNext();
      }}
      key={key}
      className="flex items-center justify-between text-gray-700 border hover:bg-gray-100 hover:shadow-lg rounded-md p-4 cursor-pointer w-[50%] mx-auto"
    >
      <div className="flex items-center gap-4">
        <div className="w-28 flex items-center">
          <Image
            width={100}
            height={100}
            alt={title}
            src={src}
            className="w-auto h-22"
          />
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleLensFeature;
