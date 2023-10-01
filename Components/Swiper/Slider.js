import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Navigation} from "swiper";
import { GlassesType } from "../../Layout/Data"

export default function Slider() {
  return (
    <div className="swiper">
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          GlassesType.map((slide, index) => (
            <SwiperSlide key={index} className='relative px-1 py-4 bg-white'>
              <div className="text-center flex flex-col items-center justify-center gap-4">
                <div className='px-2'>
                  <img className='h-full w-56' src={slide.src} alt="" />
                </div>
                <span className='text-sm text-center'>{slide.title}</span>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
