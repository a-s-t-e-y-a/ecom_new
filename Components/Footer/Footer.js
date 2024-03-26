import Image from "next/image";
import React from "react";
import { MdLocationOn, MdLocalShipping, MdPayment } from "react-icons/md";
import {
  BsFillPhoneFill,
  BsWhatsapp,
  BsFillEnvelopePaperFill,
} from "react-icons/bs";
import { HiMail, HiOutlineClock } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" flex flex-col ">
      <div className="bg-gray-700  grid  grid-cols-2  md:grid-flow-col md:grid-cols-4 px-2 justify-items-center text-white py-2">
        <div className="flex items-center  tracking-wide md:text-lg ">
          <MdLocalShipping /> Free Shipping
        </div>
        <div className="flex items-center gap-3   tracking-wide md:text-lg">
          <HiOutlineClock /> 24x7 Service
        </div>
        <div className="flex items-center gap-3   tracking-wide md:text-lg">
          <MdPayment /> Easy Return{" "}
        </div>
        <div className="flex items-center    gap-3 tracking-wide md:text-lg">
          <RiCustomerService2Line /> Online Payment
        </div>
      </div>

      <div className="bg-gray-900 py-8 flex flex-col  items-center  ">
        <div className="flex items-center font-bold text-white tracking-wide mb-4">
          <span className="text-5xl me-10">
            <BsFillEnvelopePaperFill />
          </span>
          <div className=" px-5">
            <h2 className="font-normal">Sale Up To 20% Off For</h2>
            <h2 className="text-2xl">JOIN OUR NEWSLETTER</h2>
          </div>
        </div>
        <div className="flex items-center h-10 ">
          <input
            type="text"
            placeholder="Enter Your Whatsapp Number"
            className="text-gray-600 h-full w-full md:w-[350px] px-6 items-center focus:outline-none focus:ring-0"
          />
          <button className="py-2 px-5 bg-gray-800 text-white tracking-wider font-semibold cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 shadow-sm  px-5 gap-x-3 bg-gray-200 py-8">
        <div className="flex flex-col items-center md:items-start w-full justify-center  py-3 mb-4  -mt-6 ">
          <Image
            src="/logo.png"
            width={500}
            height={500}
            className=""
            alt="Logo"
          />
          <p className="flex">
            Order Eyeglass and Sunglass Round - Square Geomantic shape eyeglass
            online from a vast range of products, styles and buy a pair of
            branded shades online from the portal. Open your eyeglasses style
            and adopt the new way designer eyeglasses shop Online / Offline with
            Akku ka chasma and Buy Blue cut lens free with Eyeglass.
          </p>
        </div>
        <div className=" w-full ">
          <h1 className="font-bold text-lg tracking-wide mb-1">My Account</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/aboutus"}> About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link href={""}>Refund Policy</Link>
            </li>
            <li>
              <Link href={""}>Help</Link>
            </li>
            <li>
              <Link href={""}>Cancellation</Link>
            </li>
            <li>
              <Link href={""}>Terms & Condition</Link>
            </li>
            <li>
              <Link href={""}>Returns & Exchanges</Link>
            </li>
            <li>
              <Link href={""}>Shipping & Delivery</Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col py-3 mb-4 items-start">
          <h1 className="font-bold text-lg tracking-wide mb-1">CONTACT US</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              <p>1/A Sector Noida India-201301</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-lg">
                <BsFillPhoneFill />
              </span>
              <p>Call Us +91 8188881661</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-lg">
                <HiMail />
              </span>
              <p>Email Us Help@Akkukachasma.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-lg">
                <BsWhatsapp />
              </span>
              <p>Whatsapp Us +91 8188881661</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200 ">
        <p className=" text-center  md:flex justify-center pb-2">
          {" "}
          Copyright © 2018-2024, All Right Reserved by Akku Ka Chasma.
          <span className="block">
            {" "}
            Developed By &nbsp;
            <a href="https://softication.com/" target="_blank">
              SoftiCation Technology
            </a>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
