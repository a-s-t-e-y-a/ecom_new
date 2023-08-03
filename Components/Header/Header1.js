import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";
import Slider from "@/Components/Swiper/Slider"
import { useRouter } from "next/router";
const Header1 = () => {
    const router = useRouter()
    return (
        <div className="w-[97%] mx-auto">
            <header className=" mx-auto h-36 mb-6">
                <div className="flex items-center justify-between py-4">
                    {/* Image  */}
                    <div>
                        <img 
                            src="/logo.png" 
                            className="h-7 w-auto cursor-pointer" 
                            onClick={()=>router.push("/")}
                        />
                    </div>
                    <div className="h-full w-[60%]">
                        <Slider />
                    </div>
                    <div className="flex items-center gap-3 text-2xl text-gray-700">
                        <motion.span 
                            whileTap={{ scale: 0.8 }}
                        >
                            <BsFillPersonFill />
                        </motion.span>
                        <motion.span 
                            whileTap={{ scale: 0.8 }}
                        >
                            <AiOutlineHeart />
                        </motion.span>
                        <motion.span 
                            whileTap={{ scale: 0.8 }}
                        >
                            <BiSearchAlt2 />
                        </motion.span>
                        <motion.span 
                            whileTap={{ scale: 0.8 }}
                        >
                            <HiShoppingCart />
                        </motion.span>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header1;
