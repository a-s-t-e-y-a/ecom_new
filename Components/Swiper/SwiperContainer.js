import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TransparentGlass } from "@/Layout/Data";

const SwiperContainer = ({ data }) => {
  return (
    <div className="s-container ">
      <Swiper
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className=" px-10 w-full  "
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 2,
          },
          425: {
            width: 425,
            slidesPerView: 2,
          },
        }}
      >
        {TransparentGlass.map((slide, i) => (
          <SwiperSlide key={i} className=" w-full shadow-xl mb-2 px-2">
            <div className="flex flex-col justify-end items-center">
              <Image
                width={500}
                height={500}
                className=" object-cover mb-auto mt-1/2 "
                src={slide.src}
                alt=""
              />

              <span className="text-base text-center mb-3">{slide.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
