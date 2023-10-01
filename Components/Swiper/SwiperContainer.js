import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TransparentGlass } from '@/Layout/Data';

const SwiperContainer = ({data}) => {
    return (
        <div className='s-container '>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                navigation={true}
                modules={[Navigation, Pagination]}
                className='p-3'
            >
                {
                    TransparentGlass.map((slide, i) => (
                        <SwiperSlide key={i} className='relative px-1 py-4 bg-white'>
                            <div className="text-center flex flex-col items-center justify-center gap-2">
                                <div className='px-2'>
                                    <img className='h-full w-[350px] mx-auto' src={slide.src} alt="" />
                                </div>
                                <span className='text-base text-center'>{slide.title}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SwiperContainer