import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { RxDashboard } from "react-icons/rx";
import { FaGlasses, FaBlog } from "react-icons/fa";
import {
  MdOutlineLensBlur,
  MdCurrencyFranc,
  MdCancelScheduleSend,
  MdOutlinePrivacyTip,
  MdPolicy,
  MdCategory,
} from "react-icons/md";
import { BiCalendarEdit } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { CgFramer } from "react-icons/cg";
import { TbBrandAdonisJs } from "react-icons/tb";
import { IoShapesOutline, IoColorPaletteOutline } from "react-icons/io5";
import { SiCodeproject } from "react-icons/si";
import {
  HiUserAdd,
  HiOutlineNewspaper,
  HiOutlineHome,
  HiOutlineReceiptRefund,
} from "react-icons/hi";
import { GiKnightBanner, GiMicroscopeLens, GiPowerRing } from "react-icons/gi";
import { RiCustomerService2Line, RiBook2Fill } from "react-icons/ri";
import { TbTextSize, TbTruckReturn } from "react-icons/tb";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";

const AdminSideBar = () => {
  const [open, setOpen] = useState(true);
  const pathname = useRouter().pathname;
  const Menus = [
    { title: "Dashboard", icon: <RxDashboard />, link: "/admin/dashboard" },
    {
      title: "Placed Order",
      icon: <MdOutlineShoppingCartCheckout />,
      link: "/admin/placedOrder",
    },
    {
      title: "Product Detail Edit",
      icon: <BiCalendarEdit />,
      link: "/admin/productDetail",
    },
    // { title: "Sell Manager ", icon: <FcManager />, link: "/admin/sellManager" },
    { title: "Power Types", icon: <GiPowerRing />, link: "/admin/powerTypes" },
    {
      title: "Lens Detail",
      icon: <MdOutlineLensBlur />,
      link: "/admin/lensDetail",
    },
    {
      title: "Lens Feature",
      icon: <GiMicroscopeLens />,
      link: "/admin/lensFeature",
    },
    {
      title: "Frame Material",
      icon: <CgFramer />,
      link: "/admin/frameMaterial",
    },
    { title: "Brand", icon: <TbBrandAdonisJs />, link: "/admin/brand" },
    { title: "Shape", icon: <IoShapesOutline />, link: "/admin/shape" },
    { title: "Categories", icon: <MdCategory />, link: "/admin/categories" },
    { title: "Color", icon: <IoColorPaletteOutline />, link: "/admin/color" },
    {
      title: "Coupon Manager",
      icon: <SiCodeproject />,
      link: "/admin/couponManager",
    },
    { title: "Blog", icon: <FaBlog />, link: "/admin/blog" },
    {
      title: "NewsLetter",
      icon: <HiOutlineNewspaper />,
      link: "/admin/newsLetter",
    },
    {
      title: "Banner Manager",
      icon: <GiKnightBanner />,
      link: "/admin/bannerManager",
    },
    {
      title: "Registered Users",
      icon: <HiUserAdd />,
      link: "/admin/registeredUsers",
    },
    { title: "About", icon: <FcAbout />, link: "/admin/about" },
    { title: "try@Home", icon: <HiOutlineHome />, link: "/admin/try@Home" },
    { title: "Franchise", icon: <MdCurrencyFranc />, link: "/admin/franchise" },
    {
      title: "Enquiry",
      icon: <RiCustomerService2Line />,
      link: "/admin/enquiry",
    },
    { title: "Size Guide", icon: <TbTextSize />, link: "/admin/sizeGuide" },
    {
      title: "Cancellation",
      icon: <MdCancelScheduleSend />,
      link: "/admin/cancellation",
    },
    {
      title: "Refund Policy",
      icon: <HiOutlineReceiptRefund />,
      link: "/admin/refundPolicy",
    },
    {
      title: "Privacy Policy",
      icon: <MdOutlinePrivacyTip />,
      link: "/admin/privacyPolicy",
    },
    { title: "Guide To Buy", icon: <RiBook2Fill />, link: "/admin/guideToBuy" },
    {
      title: "7-Day Easy Return Policy",
      icon: <MdPolicy />,
      link: "/admin/easyReturnPolicy",
    },
    {
      title: "Delivery & Shipping terms",
      icon: <TbTruckReturn />,
      link: "/admin/deliveryShippingTerms",
    },
  ];

  return (
    <div
      className={` ${
        open ? "w-64" : " w-20 "
      } bg-gray-100  p-4 pt-7 relative z-10 me-5 duration-300 border-r `}
    >
      <div className="flex gap-x-10 items-center text-gray-700 pb-3">
        <span
          className={`pl-2 cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          } text-gray-800 text-3xl font-bold`}
        >
          <FaGlasses onClick={() => setOpen(!open)} />
        </span>
        <h1
          className={`origin-left font-bold  tracking-wider text-xs text-nowrap md:text-lg duration-200 ${
            !open && "scale-0"
          }`}
        >
          Admin Room
        </h1>
      </div>
      <div className="pt-2 overflow-y-auto scrollbar-hide tracking-wide">
        {Menus.map((Menu, index) => {
          const isActive = pathname.startsWith(Menu.link);
          return (
            <Link
              key={index}
              scroll={false}
              className={`block ${
                open ? "rounded-md" : "rounded-full"
              } flex items-center cursor-pointer hover:bg-gray-50 text-gray-600 
            			${index === 0 && "bg-light-white"} ${isActive ? "bg-white " : ""}`}
              href={Menu.link}
            >
              <Tooltip title={Menu.title} placement="right">
                <IconButton>
                  {/* {Menu.icon} */}
                  <span
                    className={`${
                      open
                        ? "text-xl text-nowrap md:text-normal"
                        : "text-xl md:text-2xl"
                    }  border-none`}
                  >
                    {Menu.icon}
                  </span>
                </IconButton>
              </Tooltip>
              <span
                className={`${
                  !open && "hidden"
                }  duration-200 font-semibold text-sm text-nowrap md:text-normal`}
              >
                {Menu.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSideBar;
