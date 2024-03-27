"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useGetAllCategories from "@/utils/queries/useCategoriesGetAll";

const GlassesType = () => {
  const router = useRouter();
  const { data: categoryItems } = useGetAllCategories();
  console.log(categoryItems);
  const handleNavigate = (item) => {
    router.push(`${item?.name?.toLowerCase().split(" ").join("")}`);
  };
  return (
    <motion.div className=" flex justify-around gap-5 lg:px-16">
      {categoryItems?.map((item, index) => {
        return (
          <div key={index} onClick={() => handleNavigate(item)}>
            <motion.div className="  rounded-full hover:shadow-2xl ">
              <img
                src={item?.imageArray}
                alt="Glasses Categories"
                className=" mx-auto mb-3   object-cover"
              />
            </motion.div>
            <p className=" text-center text-xs">{item?.name}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default GlassesType;
