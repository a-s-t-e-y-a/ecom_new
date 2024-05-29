import React, { useEffect } from "react";
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
import axios from "axios";
const Header1 = () => {
  const [open, setOpen] = useState(false);
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
      <div className=" w-full px-3">
        <header className="mb-3">
          <div className="flex flex-row items-center justify-between py-4">
            {/* Image  */}
            <div>
              <Image
                width={400}
                height={400}
                src="/logo.png"
                className=" object-cover"
                alt=""
                onClick={() => router.push("/")}
              />
            </div>
            <div className="w-[60%]"><Slider data={Round} /></div>
              
            
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
