import React from "react";
import { FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";

const BlogSideBar = () => {
  return (
    <div className="w-full space-y-2">
      <div className="bg-white flex flex-col items-center gap-2 py-4 tracking-wide px-4 border rounded-md shadow-sm  px-5">
        <span className="font-semibold text-lg border-b-2 border-b-gray-800">
          About Us
        </span>
        <img src="/logo.png" className="pt-3 pb-2" />
        <p className="text-sm text-justify">
          Order Eyeglass and Sunglass Round - Square Geomantic shape eyeglass
          online from a vast range of products, styles and buy a pair of branded
          shades online from the portel. Open your eyeglasses style and adopt
          the new way designer eyeglasses shop Online / Offline with Akku ka
          chasma and Buy Blue cut lens free with Eyeglass.
        </p>
      </div>
      <div className="bg-white flex flex-col items-center border rounded-md shadow-sm gap-4 py-3">
        <span className="font-semibold text-md">Connect With Us</span>
        <div className="flex items-center justify-between gap-5">
          <a
            href="https://www.facebook.com/akkukachasma"
            className="border-2 p-[4px] text-lg rounded-full border-blue-300 cursor-pointer"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            className="border-2 p-[4px] text-lg rounded-full border-green-300 cursor-pointer"
          >
            <FaWhatsapp />
          </a>
          <a
            href=""
            className="border-2 p-[4px] text-lg rounded-full border-indigo-300 cursor-pointer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
