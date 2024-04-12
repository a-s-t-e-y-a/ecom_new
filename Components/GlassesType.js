import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useGetAllCategories from "@/utils/queries/useCategoriesGetAll";

const GlassesType = () => {
  const router = useRouter();
  const { data: categoryItems } = useGetAllCategories();
  const handleNavigate = (item) => {
    console.log(item);
    router.push(`/catagories/${item?.products_categories_id}`);
  };
  return (
    <motion.div className=" mx-auto flex justify-around gap-10 lg:px-16">
      {categoryItems?.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleNavigate(item)}
            className=" w-[150px]"
          >
            <motion.div className="  rounded-full hover:shadow-2xl ">
              {
                <Image
                  width={200}
                  height={200}
                  src={item?.imageArray}
                  alt="Glasses Categories"
                  className=" mx-auto mb-3   object-cover"
                />
              }
            </motion.div>
            <p className=" text-center ">{item?.name}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default GlassesType;
