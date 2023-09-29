import React from "react";
import SlideOnHover from "./Swiper/SlideOnHover";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const SingleGlassItem = ({ value }) => {
  const imageArray = value?.product_images.split(',')
  return (
    <div className="hover:shadow-xl">
      <div className="relative lg:w-[320px] lg:h-[260px]">
        <div className="p-2 w-[94%] pt-3">
          <SlideOnHover data={imageArray} />
        </div>

        {/* Detail  */}
        <div className="grid grid-cols-3 text-gray-700 tracking-wide text-sm w-[90%] mx-auto mt-3">
          <div className="col-span-2 space-y-1">
            <p className="">
              <span className="font-semibold">Frame Width :</span>{" "}
              <span className="font-semibold text-xs">
                {value?.frame_width} MM
              </span>
            </p>
            <p className="">
              <span className="font-semibold">Lens Width :</span>{" "}
              <span className="font-semibold text-xs">{value?.frame_width} MM</span>
            </p>
            <p className="">
              <span className="font-semibold">Frame Size :</span>{" "}
              <span className="font-semibold text-xs">Medium</span>
            </p>
          </div>
          <div className="col-span-1 space-y-3">
            <div className="flex items-center justify-evenly">
              <span className="h-4 w-4 bg-blue-600 rounded-full border p-[2px]"></span>
              <span className="h-4 w-4 bg-green-600 rounded-full border p-[2px]"></span>
              <span className="h-4 w-4 bg-red-600 rounded-full border p-[2px]"></span>
            </div>
            <div className="font-semibold text-center text-base">
              $ {value?.discounted_price}
            </div>
            <div className="flex items-center text-xl justify-evenly">
              <span className="cursor-pointer">
                <AiOutlineHeart />
              </span>
              <span className="cursor-pointer">
                <IoIosShareAlt />
              </span>
            </div>
          </div>
        </div>

        <p className="absolute bottom-1 right-[100px] text-sm text-center text-gray-300 tracking-widest">
          {value?.product_model_name}
        </p>
      </div>
    </div>
  );
};

export default SingleGlassItem;
