import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { imageUrl } from "@/utils/contants";
import Image from "next/image";
const SwiperThumbs = ({ images }) => {
  const imageArray = images?.split(",");
  console.log(imageArray, "imageArray");
  return (
    <Carousel
      className="h-full w-[88%] mx-auto my-auto"
      showArrows={true}
      infiniteLoop
      useKeyboardArrows
      autoPlay
    >
      {imageArray &&
        imageArray.map((item, index) => {
          console.log(item.trim(), 'item')
          return (
            <div key={index} className="">
              <Image
                width={500}
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
