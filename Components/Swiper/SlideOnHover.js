import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const SlideOnHover = ({ data }) => {
  const [play, setPlay] = React.useState(false);
  return (
    <div className="w-full mx-auto ">
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
            className="cursor-pointer  py-2  mx-auto px-5"
            key={index}
            onMouseEnter={() => setPlay(true)}
            onMouseLeave={() => setPlay(false)}
          >
            <Image
              width={500}
              height={200}
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
