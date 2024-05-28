import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import LensPlanFeature from "../Lens/LensPlanFeature";
import useGetAllLensDetails from "@/utils/queries/useLensDetail";

const LensFormStep3 = ({ onNext, onPrev }) => {
  const { data, isFetched } = useGetAllLensDetails();
  console.log(data, 'data')
  return (
    <div className="flex justify-center">
      <div className="text-gray-800 w-[100%] h-[100vh] my-4">
        <h1 className="text-center font-semibold tracking-wide text-xl py-3">
          Select Your Lens
        </h1>

        <div className="w-[83%] mx-auto h-auto border flex">
          <div className="w-[25%] border">
            <ul className="text-xs font-semibold tracking-wider text-gray-700">
              <li className="flex items-center justify-center h-[180px] text-3xl shadow sm py-3 cursor-pointer tracking-wider">
                Lens Features
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Power Range</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Index/Thickness</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Warrenty Period</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Blue Light Blocker</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Anti Scratch Coating</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Breakage & Crack Registance</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Both Side Anti Refelective Coating</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>UV Protection</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Water & Dust Protection (Hydrophobic)</span>
              </li>
              <li className="flex items-center shadow-sm px-3 py-[7px]">
                <span></span>
                <span>Lens ID</span>
              </li>
            </ul>
          </div>
          <div className="w-[75%]">
            <Swiper modules={[Navigation]} navigation slidesPerView={3}>
              <SwiperSlide className="border">
                <LensPlanFeature />
              </SwiperSlide>
              <SwiperSlide className="border">
                <LensPlanFeature />
              </SwiperSlide>
              <SwiperSlide className="border">
                <LensPlanFeature />
              </SwiperSlide>
              <SwiperSlide className="border">
                <LensPlanFeature />
              </SwiperSlide>
              <SwiperSlide className="border">
                <LensPlanFeature />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="flex items-center justify-between pt-7 ">
          <button
            onClick={onPrev}
            className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LensFormStep3;
