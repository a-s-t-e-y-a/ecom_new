import React, { useEffect, useState } from "react";
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
  const router = useRouter();
  function handleClick(item) {
    router.push(`/product/${item}`);
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
            className="flex w-8 items-center max-h-[150px] mx-3"
            onClick={() => handleClick(elemt?.product_url)}
          >
            <div className=" w-[300px]">
              <Image
                width={300}
                height={300}
                src={`${
                  elemt?.imageArray?.length > 0
                    ? elemt?.imageArray[0]
                    : "https://akkukachasma.s3.amazonaws.com/product_images/" +
                      elemt.product_images?.split(",")[0]
                }`}
                className="object-cover hover:shadow-2xl"
                alt={elemt?.product_model_name}
              />
            </div>
            <p className="text-center font-semibold ">
               1000
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
