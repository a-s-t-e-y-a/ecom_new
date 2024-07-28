import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Test() {
  
  return (
    <div className="h-full w-full grid place-content-center bg-slate-200">
      
      <Carousel
      className="w-full h-full border border-red-700"
      showArrows={true}
      infiniteLoop
      useKeyboardArrows
      autoPlay
    >

              <Image
                alt="product image"
                src={"https://akkukachasma.s3.us-east-1.amazonaws.com/1718102312874_596786705.jpeg"}
                fill
                className="w-32 h-32"
              />
    </Carousel>
    </div>
  );
}
export default Test;
