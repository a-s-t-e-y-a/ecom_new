"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { imageUrl } from "@/utils/contants";
import Image from "next/image";
const SwiperThumbs = ({ images }) => {
  const imageArray = images?.split(",");
  return (
    <Carousel
      className="h-full w-[88%] mx-auto my-auto"
      showArrows={true}
      infiniteLoop
      useKeyboardArrows
      autoPlay
    >
      {imageArray &&
        imageArray.map((item, index) => (
          <div key={index} className="">
            <Image width={200} height={200} alt=""
              src={`${imageUrl}product_images/${item}`}
              className=" mx-auto"
            />
          </div>
        ))}
    </Carousel>
  );
};

export default SwiperThumbs;
