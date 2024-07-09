"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { Navigation } from "swiper";
import { GlassesType } from "../../Layout/Data";
import Image from "next/image";

export default function Slider({ data }) {
  const router = useRouter();
  function handleClick(item) {
    const itemName = encodeURIComponent(item?.name);
    router.push(`/Eyeglass/shape/${itemName}`);
  }
  return (
    <div className="swiper w-full">
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper min-h-[200px]"
      >
        {data &&
          data?.map((slide, index) => {
            return (
              <>
                <SwiperSlide
                  key={index}
                  className="min-h-[100px]"
                >
                  <div className="p-1 md:w-[200px] w-[110px] mx-auto flex justify-center items-center">
                    <div onClick={() => handleClick(slide)} className="w-full h-full flex flex-col items-center justify-center">
                      <Image
                        width={600}
                        height={600}
                        className="p-2 rounded flex items-center justify-center mt-5"
                        src={
                          slide?.image
                        }
                        alt=""
                      />
                      <span className="text-sm text-center font-semibold">
                      {slide?.name}
                    </span>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
    </div>
  );
}
