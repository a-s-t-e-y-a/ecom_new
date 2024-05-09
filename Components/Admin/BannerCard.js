import React from "react";
import { TbEdit } from "react-icons/tb";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BannerCard = ({ banner }) => {
  console.log(banner);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="relative">
        <img className="rounded-t-lg h-[230px] w-[280px]" src={banner?.image} alt="" />
        <span className="absolute top-0 right-0 flex justify-center items-center gap-2 p-2 backdrop-opacity-10 backdrop-invert bg-white/15 rounded-full">
          <button className=" text-blue-500 cursor-pointer">
            <TbEdit className="text-base" size={20} />
          </button>
          <button className=" text-red-500 cursor-pointer">
            <DeleteOutlineIcon className="text-base" />
          </button>
        </span>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {banner?.categories_id?.name}
          </h5>
        </a>
      </div>
    </div>
  );
};

export default BannerCard;
