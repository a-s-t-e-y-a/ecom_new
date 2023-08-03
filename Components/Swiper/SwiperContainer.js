import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai"
import { HiOutlineShoppingCart } from "react-icons/hi"


import { TransparentGlass } from '@/Layout/Data';

const SwiperContainer = ({data}) => {
    return (
        <div className='s-container '>
            <Swiper
                slidesPerView={3}
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
                            <div className="text-center flex flex-col items-center justify-center gap-3">
                                <div className='px-2'>
                                    <img className='h-full w-[330px] mx-auto' src={slide.src} alt="" />
                                </div>
                                <span className='font-semibold text-base text-center'>{slide.title}</span>
                                <div className='absolute right-2 top-6 text-xl flex flex-col items-center gap-[6px] font-semibold text-gray-700'>
                                        <span><AiOutlineHeart /></span>
                                        <span><AiOutlineEye /></span>
                                        <span><HiOutlineShoppingCart /></span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SwiperContainer