import React from "react";
import SlideOnHover from "./Swiper/SlideOnHover";
import { Frame_size } from "@/utils/contants";
import { AiOutlineHeart } from "react-icons/ai";
const SingleGlassItem = ({ value }) => {
  const imageArray = value?.product_images?.split(",");
  return (
    <div className="h-[250px]">
      <SlideOnHover data={imageArray} />
      <div className="flex flex-row gap-6 px-4">
        <div>
          <p className=" text-nowrap">{value?.frame_width} mm</p>
          <p className=" text-sm  text-nowrap font-semibold">Frame Width</p>
        </div>
        <div>
          <p className=" text-nowrap">{value?.lens_width} mm</p>
          <p className=" text-sm  text-nowrap font-semibold">Lens Width</p>
        </div>
        <div>
          <p className=" text-nowrap">
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
