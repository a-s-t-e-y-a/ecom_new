"use client";
import React from "react";
import SlideOnHover from "./Swiper/SlideOnHover";

const SingleGlassItem = ({ value }) => {
  const imageArray = value?.product_images?.split(",");
  console.log(value);
  return (
    <div className="hover:shadow-xl  w-full ">
      <div className="rounded-lg  border-2 p-3">
        <div className="p-5  rounded-xl mb-3">
          <SlideOnHover data={imageArray} />
        </div>

        {/* Detail  */}
        <div className=" flex justify-between ">
          <div className="font-semibold">
            <p>{value?.frame_width} mm</p>
            <p>Frame width</p>
          </div>
          <div className="font-semibold">
            <p>{value?.temple_length} mm</p>
            <p>Lens width</p>
          </div>
          <div className="font-semibold">
            <p>{value?.size_?.name}</p>
            <p>Frame size</p>
          </div>
        </div>
        <div className="font-semibold">
          <p className="font-bold text-lg">&#8377; {value.discounted_price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleGlassItem;
