import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { imageUrl } from "@/utils/contants";
import Image from "next/image";
const SwiperThumbs = ({ images }) => {
  const imageArray = images?.split(",");
  return (
    <Carousel
      className="h-full max-w-[100%] ml-16 my-auto"
      showArrows={true}
      infiniteLoop
      useKeyboardArrows
      autoPlay
    >
      {imageArray &&
        imageArray.map((item, index) => {
          return (
            <div key={index} className="">
              <Image
                width={600}
                height={200}
                alt=""
                src={item.trim()}
                className=""
              />
            </div>
          );
        })}
    </Carousel>
  );
};

export default SwiperThumbs;
