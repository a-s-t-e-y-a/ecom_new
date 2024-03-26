import React from "react";
import SlideOnHover from "./Swiper/SlideOnHover";

const SingleGlassItem = ({ value }) => {
  const imageArray = value?.product_images?.split(",");
  return (
    <div className="w-full hover:shadow-xl  ">
      <div className="rounded-lg  border-2 p-3">
        <div className="p-5  rounded-xl mb-3">
          <SlideOnHover data={imageArray} />
        </div>

        {/* Detail  */}
        <div className=" flex justify-between ">
          <div className="font-semibold text-sm text-nowrap">
            <p>{value?.frame_width} mm</p>
            <p>Frame width</p>
          </div>
          <div className="font-semibold text-sm text-nowrap">
            <p>{value?.temple_length} mm</p>
            <p>Lens width</p>
          </div>
          <div className="font-semibold text-nowrap text-sm">
            <p>{value?.size_?.name}</p>
            <p>Frame size</p>
          </div>
          <div className="font-semibold">
            <p className="font-bold text-sm">
              &#8377; {value.discounted_price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGlassItem;
