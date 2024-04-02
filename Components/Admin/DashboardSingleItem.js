import React from "react";
import Image from "next/image";

const DashboardSingleItem = (props) => {
  const { color, title, number, src } = props;
  return (
    <div
      className={`${color} text-white rounded-lg tracking-wide cursor-pointer flex flex-col items-center justify-between pt-4`}
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex flex-col items-start justify-start">
          <span className="font-bold text-3xl">{number}</span>
          <span>{title}</span>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            alt="product-detail"
            src={src}
            className="w-16"
          />
        </div>
      </div>
      <div className={`contrast-125 border-t-2 w-full text-center p-1 pb-2 `}>
        More Info
      </div>
    </div>
  );
};

export default DashboardSingleItem;
