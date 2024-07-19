import React from "react";
import SlideOnHover from "./Swiper/SlideOnHover";
import { Frame_size } from "@/utils/contants";
import { AiOutlineHeart } from "react-icons/ai";
const SingleGlassItem = ({ value }) => {
  const imageArray = value?.product_images?.split(",");
  return (
    <div className="h-64 w-fit hover:shadow-xl rounded-md border-b-2">
      <div className="max-w-96">
        <SlideOnHover data={imageArray} />
      </div>
      <div className="flex flex-row justify-center gap-6 items-center">
        <div>
          <p className=" text-nowrap">{value?.frame_width} mm</p>
          <p className=" text-sm text-nowrap font-semibold">Frame Width</p>
        </div>
        <div>
          <p className=" text-nowrap">{value?.lens_width} mm</p>
          <p className=" text-sm text-nowrap font-semibold">Lens Width</p>
        </div>
        <div>
          <p className=" text-nowrap">
            {value?.size_?.name || Frame_size[value?.size]}
          </p>
          <p className=" text-sm text-nowrap font-semibold">Frame size</p>
        </div>
        <div>
          <p className="font-bold text-lg">&#8377; {value.discounted_price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleGlassItem;
