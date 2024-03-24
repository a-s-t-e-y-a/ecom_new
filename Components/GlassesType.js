'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useGetAllCategories from "@/utils/queries/useCategoriesGetAll";

const GlassesType = () => {
  const router = useRouter();
  const { data: categoryItems } = useGetAllCategories();
  const handleNavigate = (item) => {
    router.push(`${item?.name?.toLowerCase()}`);
  }
  return (
    <motion.div className="w-full flex items-center gap-1 px-14 mt-6 justify-around cursor-pointer">
      {categoryItems?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-normal items-center"
            onClick={() => handleNavigate(item)}
          >
            <motion.div
              className="rounded-full shadow-md hover:shadow-2xl"
              whileHover={{ scale: 0.8 }}
            >
              <img
                src={item?.imageArray}
                width={130}
                height={130}
                alt="Glasses Categories"
              />
            </motion.div>
            <p className="text-sm font-semibold tracking-wide mt-2">
              {item?.name}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default GlassesType;
