import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { RxDashboard } from "react-icons/rx";
import { FaGlasses } from "react-icons/fa";
import {
  MdOutlineShoppingCartCheckout,
  MdOutlineLensBlur,
  MdCurrencyFranc,
} from "react-icons/md";
import { BiCalendarEdit } from "react-icons/bi";
import { FcManager, FcAbout } from "react-icons/fc";
import { CgFramer } from "react-icons/cg";
import { TbBrandAdonisJs } from "react-icons/tb";
import { IoShapesOutline, IoColorPaletteOutline } from "react-icons/io5";
import { SiCodeproject } from "react-icons/si";
import { HiOutlineNewspaper, HiOutlineHome } from "react-icons/hi";
import { GiKnightBanner, GiPowerRing } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbTextSize } from "react-icons/tb";
import {useRouter} from "next/router"

const AdminSideBar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter()
  const Menus = [
    { title: "Dashboard", icon: <RxDashboard /> , link:"/admin/dashboard"},
    { title: "Placed Order", icon: <MdOutlineShoppingCartCheckout /> , link :"/admin/placedOrder"},
    { title: "Product Detail Edit", icon: <BiCalendarEdit /> , link:"/admin/productDetail"},
    { title: "Sell Manager ", icon: <FcManager /> ,link : "/admin/sellManager"},
    { title: "Power Types", icon: <GiPowerRing />, link : "/admin/powerTypes", gap: true },
    { title: "Lens Detail", icon: <MdOutlineLensBlur />, link : "/admin/lensDetail"},
    { title: "Frame Material", icon: <CgFramer /> , link : "/admin/frameMaterial"},
    { title: "Brand", icon: <TbBrandAdonisJs /> ,link : "/admin/brand"},
    { title: "Shape", icon: <IoShapesOutline /> ,link : "/admin/shape"},
    { title: "Color", icon: <IoColorPaletteOutline />, link : "/admin/color"},
    { title: "Coupon Manager", icon: <SiCodeproject /> , link : "/admin/couponManager",gap: true  },
    { title: "NewsLetter", icon: <HiOutlineNewspaper /> },
    { title: "Banner Manager", icon: <GiKnightBanner /> },
    { title: "Registered Users", icon: <CiUser />,link : "/admin/registeredUsers", gap: true },
    { title: "About", icon: <FcAbout /> },
    { title: "try@Home", icon: <HiOutlineHome /> },
    { title: "Franchise", icon: <MdCurrencyFranc /> },
    { title: "Enquiry", icon: <RiCustomerService2Line /> },
    { title: "Size Guide", icon: <TbTextSize /> },
    { title: "Delivery & Shipping terms", icon: <TbTextSize /> , link : "/admin/deliveryShippingTerms"},
  ];
  return (
    <div
      className={` ${
        open ? "w-64" : "w-20 "
      } bg-gray-100 h-screen p-4  pt-7 relative duration-300 border-r `}
    >
    
      <div className="flex gap-x-4 items-center text-gray-700 pb-3">
        <span
          className={`pl-2 cursor-pointer duration-500 ${open && "rotate-[360deg]"} text-gray-800 text-3xl font-bold`}
        >
          <FaGlasses onClick={() => setOpen(!open)} />
        </span>
        <h1
          className={`origin-left font-bold  tracking-wider text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Admin Room
        </h1>
      </div>
      <ul className="pt-2 h-[88vh] overflow-y-auto scrollbar-hide tracking-wide">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  ${open ? "rounded-md" : "rounded-full"}  p-1 cursor-pointer hover:bg-white text-gray-600 text-base items-center gap-x-2 
            ${Menu.gap ? "mt-5" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            onClick={()=>router.push(Menu.link)}
          >
            <Tooltip title={Menu.title} placement="right">
              <IconButton>
                {/* {Menu.icon} */}
                <span className={`${open ? "text-xl" : "text-2xl"} outline-0 border-none`}>{Menu.icon}</span>
              </IconButton>
            </Tooltip>
            <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSideBar;
