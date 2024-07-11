import React, { useEffect } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import { useRouter } from "next/router";
import { useState } from "react";
import CartDialog from "../Dialog/CartDialog";
import Image from "next/image";
import axios from "axios";
import WishlistDialog from "../Dialog/WishlistDialog";

const Header1 = () => {
  const [open, setOpen] = useState(false);
  const [openFav, setOpenFav] = useState(false);
  const [Round, setRound] = useState([]);
  const router = useRouter();
  const fecthMultipleData = () => {
    const url = [
      "https://api.akkukachasma.com/api/products",
      "https://api.akkukachasma.com/api/categories/Eyeglass",
      "https://api.akkukachasma.com/api/shape",
    ];
    axios.all(url.map((endpoints) => axios.get(endpoints))).then((data) => {
      const AllProduct = data[0];
      const round = AllProduct?.data?.data?.products?.filter(
        (Value) => Value?.shape_?.name === "Round" || "round"
      );
      setRound(round);
    });
  };
  useEffect(() => {
    fecthMultipleData();
  }, []);
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

        <div className="flex-grow h-full mt-4  overflow-hidden">
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            autoplay
            navigation
            className="w-full h-full"
          >
            {
              Array.isArray(Round) && Round.map((glass, index) => {
                return (
                  <SwiperSlide 
                    key={glass.id}
                    className="ml-4 px-4"
                  >
                    <Image 
                      src= {glass.imageArray[0]}
                      width={400}
                      height={400}
                      alt=""
                    />
                    <span className="text-sm text-center font-semibold">
                      {glass.name}
                    </span>
                  </SwiperSlide>
                  
                )
              })
            }
           
          </Swiper>
        </div>

        <div className="flex flex-shrink-0  gap-3 mb-4  text-2xl text-gray-700">
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
      </header>
    </>
  );
};

export default Header1;
