"use client"
import React from "react";
import SlideOnHover from "./Swiper/SlideOnHover";

const SingleGlassItem = ({ value }) => {
  console.log(value);
  const imageArray = value?.product_images?.split(",");
  return (
    
        <div className="  min-h-[300px]:">
        <SlideOnHover data={imageArray} />
        <div className=" flex  justify-around px-2">
          <div>
          <p className=" text-nowrap ">{value?.frame_width} mm</p>
           <p className=" text-sm  text-nowrap font-semibold" >Frame width</p>
          </div>
          <div>
          <p className=" text-nowrap ">{value?.temple_length} mm</p>
    <p className=" text-sm  text-nowrap font-semibold">Lens width</p>
          </div>
          <div className="font-semibold text-nowrap text-sm">
          <p className=" text-nowrap mb-4 ">{value?.size_?.name}</p>
          <p className=" text-sm  text-nowrap font-semibold">Frame size</p>
  </div>
  <div>
    <p className="font-bold  text-lg">
      &#8377; {value.discounted_price}
    </p>
  </div>
        </div>
        </div>
  );
};

export default SingleGlassItem;
// {/* <div className="rounded-lg  border-2 h-[300px]  py-3">
// <div className=" px-5   rounded-xl mb-3">
//   <SlideOnHover data={imageArray} />
// </div>

{/* Detail  */}
{/* <div className=" flex justify-between ">
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
    <p className="font-bold  text-lg">
      &#8377; {value.discounted_price}
    </p>
  </div>
</div>
</div>  */}