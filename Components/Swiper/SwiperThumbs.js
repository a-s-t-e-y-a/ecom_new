"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { imageUrl } from "@/utils/contants";
const SwiperThumbs = ({ images }) => {
  const imageArray = images?.split(",");
  console.log(images);
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
            <img
              src={`${imageUrl}product_images/${item}`}
              className=" mx-auto"
            />
          </div>
        ))}
    </Carousel>
  );
};

export default SwiperThumbs;
