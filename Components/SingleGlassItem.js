"use client";
import React from "react";
import SlideOnHover from "./Swiper/SlideOnHover";
import { Frame_size } from "@/utils/contants";

const SingleGlassItem = ({ value }) => {
  console.log(value);
  const imageArray = value?.product_images?.split(",");
  return (
    <div className="  min-h-[300px]:">
      <SlideOnHover data={imageArray} />
      <div className=" flex  justify-around px-2">
        <div>
          <p className=" text-nowrap ">{value?.frame_width} mm</p>
          <p className=" text-sm  text-nowrap font-semibold">Frame width</p>
        </div>
        <div>
          <p className=" text-nowrap ">{value?.temple_length} mm</p>
          <p className=" text-sm  text-nowrap font-semibold">Lens width</p>
        </div>
        <div>
          <p className=" text-nowrap  ">
            {value?.size_?.name || Frame_size[value?.size]}
          </p>
          <p className=" text-sm  text-nowrap font-semibold">Frame size</p>
        </div>
        <div>
          <p className="font-bold  text-lg">&#8377; {value.discounted_price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleGlassItem;
