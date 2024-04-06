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
    const itemName = encodeURIComponent(item?.title?.toLowerCase());
    router.push(`/product?name=${itemName}`);
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
        className="mySwiper min-h-[200px]  "
      >
        {data &&
          data?.map((slide, index) => (
            <SwiperSlide
              key={index}
              className=" rounded-md  min-h-[100px]  py-10 "
            >
              <div className=" text-cente  bg-white  rounded-md py-2  h-[100px] flex flex-col items-center justify-center gap-4">
                <div onClick={() => handleClick(slide)}>
                  <Image
                    width={200}
                    height={200}
                    className=" w-full h-[100px] object-cover rounded  "
                    src={
                      slide?.imageArray?.length > 0
                        ? slide?.imageArray[0]
                        : slide?.image
                    }
                    alt=""
                  />
                </div>
                <span className="text-sm text-center font-semibold">
                  {slide?.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
