"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TransparentGlass } from "@/Layout/Data";
import Link from "next/link";
const breakpoints = {
  320: {
    slidesPerView: 1,
  },

  600: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
  },
};
function handleClick(item) {
  const itemName = encodeURIComponent(item.title.toLowerCase());
  router.push(`/product?name=${itemName}`);
}
const SwiperContainer = ({ data }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroupSkip={1}
        navigation={true}
        loop={false}
        modules={[Navigation]}
        breakpoints={breakpoints}
      >
        {TransparentGlass?.map((elemt, indx) => (
          <SwiperSlide
            key={indx}
            className="  min-h-[100px] "
            onClick={() => handleClick()}
          >
            <div className=" w-[200px] mb-3  mx-auto">
              <Image
                width={200}
                height={200}
                src={elemt?.src}
                className=" object-cover"
                alt="galess"
              />
            </div>
            <p className=" text-center ">Price : {elemt.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
