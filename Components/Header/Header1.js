import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";
import Slider from "@/Components/Swiper/Slider";
import { useRouter } from "next/router";
import { useState } from "react";
import CartDialog from "../Dialog/CartDialog";
import Image from "next/image";
const Header1 = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <div className=" w-full px-3">
        <header className="mb-3">
          <div className="flex items-center justify-between py-4">
            {/* Image  */}
            <div>
              <Image
                width={500}
                height={500}
                src="/logo.png"
                className=" object-contain "
                onClick={() => router.push("/")}
              />
            </div>
            {/* <div className="h-full w-[60%]">
              <Slider />
            </div> */}
            <div className="flex items-center gap-3 text-2xl text-gray-700">
              <motion.span whileTap={{ scale: 0.8 }}>
                <BsFillPersonFill />
              </motion.span>
              <motion.span whileTap={{ scale: 0.8 }}>
                <AiOutlineHeart />
              </motion.span>
              <motion.span whileTap={{ scale: 0.8 }}>
                <BiSearchAlt2 />
              </motion.span>
              <motion.span
                whileTap={{ scale: 0.8 }}
                onClick={() => setOpen(true)}
              >
                <HiShoppingCart />
              </motion.span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header1;
