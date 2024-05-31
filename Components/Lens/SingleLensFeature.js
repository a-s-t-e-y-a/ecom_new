import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "@/Slices/filterSlice";
import { addData } from "@/Slices/CartSlice";

const SingleLensFeature = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const previousData = useSelector((state)=>state.cart.data)
  const { src, title, description, key, onNext, powerTypeText } = props;

  if (isChecked) {
    dispatch(addFilter({ lens_feature: title,
      power_type: powerTypeText
     }));
    onNext()
  }

  return (
    <div key={key} className="flex items-center justify-between text-gray-700 border hover:shadow-lg rounded-md p-4 cursor-pointer w-[50%] mx-auto">
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
      <div className="rounded-full">
        <Input
          type="checkbox"
          className="h-4 w-4 cursor-pointer"
          id="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default SingleLensFeature;
