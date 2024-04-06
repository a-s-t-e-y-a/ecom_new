import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SingleGlass = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-2">
      <div className="border-2 w-auto h-">
        <Image
          src="/transparent.jpeg"
          height={60}
          width={100}
          alt=""
          className="rounded-full w-40 h-40"
        />
      </div>
      <p className="text-gray-800 text-sm">Sun Glasses</p>
      <button className="px-5 py-1 bg-blue-700 text-white font-semibold rounded-md cursor-pointer text-sm tracking-wider">
        Explore
      </button>
    </div>
  );
};

export default SingleGlass;
