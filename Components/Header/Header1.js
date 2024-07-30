import React, { useEffect } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRouter } from "next/router";
import { useState } from "react";
import CartDialog from "../Dialog/CartDialog";
import Image from "next/image";
import axios from "axios";
import WishlistDialog from "../Dialog/WishlistDialog";
import useGetAllShape from "@/utils/queries/useShapeGetAll";

const Header1 = () => {
  const [open, setOpen] = useState(false);
  const [openFav, setOpenFav] = useState(false);
  const { data } = useGetAllShape()
  const router = useRouter();
  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <WishlistDialog open={openFav} setOpen={setOpenFav} />
      <header className="md:flex md:flex-row items-center mt-4 flex flex-col gap-4  h-24 px-3">
        {/* Image  */}
        <div className="md:flex-shrink-0">
          <Image
            width={400}
            height={400}
            src="/logo.png"
            className=" cursor-pointer"
            alt=""
            onClick={() => router.push("/")}
          />
        </div>

        <div className="flex-grow w-full h-full mt-4  overflow-hidden">
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            loop={true}
            autoplay
            navigation
          >
            {
              data?.map((glass, index) => {
                return (
                  <SwiperSlide
                    key={glass.id}
                    className="flex items-center justify-center"
                  >
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={glass?.image}
                        width={160}
                        height={160}
                        alt=""
                      />
                      <span className="text-xs text-center font-semibold">
                        {glass?.name}
                      </span>
                    </div>
                  </SwiperSlide>

                )
              })
            }

          </Swiper>
        </div>

        <div className="flex flex-shrink-0  gap-3 mb-4  text-2xl text-gray-700">
          <motion.span whileTap={{ scale: 0.9 }} className="cursor-pointer">
            <BsFillPersonFill onClick={() => router.push(`/user`)} />
          </motion.span>
          <motion.span whileTap={{ scale: 0.9 }} className="cursor-pointer" onClick={() => setOpenFav(!openFav)}>
            <AiOutlineHeart />
          </motion.span>
          {/* <motion.span whileTap={{ scale: 0.9 }}>
            <BiSearchAlt2 />
          </motion.span> */}
          <motion.span
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          >
            <HiShoppingCart />
          </motion.span>
        </div>
      </header>
    </>
  );
};

export default Header1;
