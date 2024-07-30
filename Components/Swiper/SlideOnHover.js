import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const SlideOnHover = ({ data }) => {
  const [play, setPlay] = React.useState(false);
  const imageArray = data?.product_images?.split(",");
  return (
    <div className="w-full">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay={play}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={1000}
      >
        {data.map((item, index) => (
          <div
            className="cursor-pointer"
            key={index}
            onMouseEnter={() => setPlay(true)}
            onMouseLeave={() => setPlay(false)}
          >
            <Image
              width={650}
              height={250}
              alt="Image loading..."
              src={item}
              className=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideOnHover;
