import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SlideOnHover = ({ data }) => {
  const [play, setPlay] = React.useState(false);
  const url = 'https://akku-bucket.s3.ap-south-1.amazonaws.com/product_images/'
  return (
    <div className="w-full mx-auto">
      <Carousel
        className="h-full mx-auto my-auto"
        infiniteLoop
        useKeyboardArrows
        autoPlay={play}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {data.map((item, index) => (
          <div
            className="cursor-pointer"
            key={index}
            onMouseEnter={() => setPlay(true)}
            onMouseLeave={() => setPlay(false)}
          >
            <img src={url+item} className="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideOnHover;
