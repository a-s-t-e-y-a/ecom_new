"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/router";
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

const SwiperContainer = ({ data }) => {
  const router=useRouter()
  function handleClick(item) {
    router.push(`/eyeware/${item}`);
  }
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroupSkip={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={breakpoints}
      >
        {data?.map((elemt, indx) => (
          <SwiperSlide
            key={indx}
            className="  min-h-[100px] "
            onClick={() => handleClick(elemt?.product_url)}
          >
            <div className=" w-[200px] mb-3  mx-auto">
              <Image
                width={200}
                height={200}
                src={`${elemt?.imageArray[0]}`}
                className=" object-cover"
                alt="galess"
              />
            </div>
            <p className=" text-center font-semibold ">&#8377; {elemt?.discounted_price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
