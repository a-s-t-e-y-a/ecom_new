import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingCart, MdOutlineMenu } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";

import Image from "next/image";
import SearchBar from "../SearchBar";
import { useRouter } from "next/router";
import ProfileMenu from "../ProfileMenu";
import MenuComponent from "../MenuComponent";
import CartDialog from "../Dialog/CartDialog";
import { useState } from "react";
import MenuComponentNested from "../MenuComponentNested";

const PageLinks = [
  { href: "/aboutus", label: "About Us" },
  { href: "/Franchise-Enquiry", label: "Franchise Enquiry" },
  { href: "/contact", label: "Contact" },
  { href: "/help", label: "Help" },
];

const SunGlassLinks = [
  {
    label: "Gender",
    subItems: [
      { href: "/sunglasses/men", label: "Men" },
      { href: "/sunglasses/women", label: "Women" },
      { href: "/sunglasses/kids", label: "Kids" },
      { href: "/sunglasses/men-women", label: "Both(M/F)" },
    ],
  },
  {
    label: "Shape1",
    subItems: [
      { href: "/sunglasses/shape/square", label: "Square" },
      { href: "/sunglasses/shape/geometry", label: "Geometry" },
      { href: "/sunglasses/shape/rectangle", label: "Rectangle" },
      { href: "/sunglasses/shape/wayfarer", label: "Wayfarer" },
      { href: "/sunglasses/shape/round", label: "Round" },
    ],
  },
  {
    label: "Shape2",
    subItems: [
      { href: "/sunglasses/shape/butterfly", label: "Butterfly" },
      { href: "/sunglasses/shape/aviator", label: "Aviator" },
      { href: "/sunglasses/shape/hexagon", label: "Hexagon" },
      { href: "/sunglasses/shape/clubmaster", label: "Clubmaster" },
      { href: "/sunglasses/shape/oval", label: "Oval" },
      { href: "/sunglasses/shape/cateye", label: "CatEye" },
    ],
  },
  {
    label: "Style",
    subItems: [
      { href: "/sunglassestype/rimless", label: "Rimless" },
      { href: "/sunglassestype/half-frame", label: "HalfFrame" },
      { href: "/sunglassestype/full-frame", label: "FullFrame" },
    ],
  },
];

const EyeGlassLinks = [
  {
    label: "Gender",
    subItems: [
      { href: "/eyeglasses/men", label: "Men" },
      { href: "/eyeglasses/women", label: "Women" },
      { href: "/eyeglasses/kids", label: "Kids" },
      { href: "/eyeglasses/men-women", label: "Both(M/F)" },
    ],
  },
  {
    label: "Shape1",
    subItems: [
      { href: "/eyeglasses/shape/square", label: "Square" },
      { href: "/eyeglasses/shape/geometry", label: "Geometry" },
      { href: "/eyeglasses/shape/rectangle", label: "Rectangle" },
      { href: "/eyeglasses/shape/wayfarer", label: "Wayfarer" },
      { href: "/eyeglasses/shape/round", label: "Round" },
    ],
  },
  {
    label: "Shape2",
    subItems: [
      { href: "/eyeglasses/shape/butterfly", label: "Butterfly" },
      { href: "/eyeglasses/shape/aviator", label: "Aviator" },
      { href: "/eyeglasses/shape/hexagon", label: "Hexagon" },
      { href: "/eyeglasses/shape/clubmaster", label: "Clubmaster" },
      { href: "/eyeglasses/shape/oval", label: "Oval" },
      { href: "/eyeglasses/shape/cateye", label: "CatEye" },
    ],
  },
  {
    label: "Style",
    subItems: [
      { href: "/eyeglasses/type/rimless", label: "Rimless" },
      { href: "/eyeglasses/type/half-frame", label: "HalfFrame" },
      { href: "/eyeglasses/type/full-frame", label: "FullFrame" },
    ],
  },
];

const KidsGlassLinks = [
  {
    label: "Gender",
    subItems: [
      { href: "/kidsglasses/men", label: "Men" },
      { href: "/kidsglasses/women", label: "Women" },
      { href: "/kidsglasses/kids", label: "Kids" },
      { href: "/kidsglasses/men-women", label: "Both(M/F)" },
    ],
  },
  {
    label: "Shape1",
    subItems: [
      { href: "/kidsglasses/shape/square", label: "Square" },
      { href: "/kidsglasses/shape/geometry", label: "Geometry" },
      { href: "/kidsglasses/shape/rectangle", label: "Rectangle" },
      { href: "/kidsglasses/shape/wayfarer", label: "Wayfarer" },
      { href: "/kidsglasses/shape/round", label: "Round" },
    ],
  },
  {
    label: "Shape2",
    subItems: [
      { href: "/kidsglasses/shape/butterfly", label: "Butterfly" },
      { href: "/kidsglasses/shape/aviator", label: "Aviator" },
      { href: "/kidsglasses/shape/hexagon", label: "Hexagon" },
      { href: "/kidsglasses/shape/clubmaster", label: "Clubmaster" },
      { href: "/kidsglasses/shape/oval", label: "Oval" },
      { href: "/kidsglasses/shape/cateye", label: "CatEye" },
    ],
  },
  {
    label: "Style",
    subItems: [
      { href: "/kidsglasses/type/rimless", label: "Rimless" },
      { href: "/kidsglasses/type/half-frame", label: "HalfFrame" },
      { href: "/kidsglasses/type/full-frame", label: "FullFrame" },
    ],
  },
];

const ComputerGlassLinks = [
  {
    label: "Gender",
    subItems: [
      { href: "/computerglasses/men", label: "Men" },
      { href: "/computerglasses/women", label: "Women" },
      { href: "/computerglasses/kids", label: "Kids" },
      { href: "/computerglasses/men-women", label: "Both(M/F)" },
    ],
  },
  {
    label: "Shape1",
    subItems: [
      { href: "/computerglasses/shape/square", label: "Square" },
      { href: "/computerglasses/shape/geometry", label: "Geometry" },
      { href: "/computerglasses/shape/rectangle", label: "Rectangle" },
      { href: "/computerglasses/shape/wayfarer", label: "Wayfarer" },
      { href: "/computerglasses/shape/round", label: "Round" },
    ],
  },
  {
    label: "Shape2",
    subItems: [
      { href: "/computerglasses/shape/butterfly", label: "Butterfly" },
      { href: "/computerglasses/shape/aviator", label: "Aviator" },
      { href: "/computerglasses/shape/hexagon", label: "Hexagon" },
      { href: "/computerglasses/shape/clubmaster", label: "Clubmaster" },
      { href: "/computerglasses/shape/oval", label: "Oval" },
      { href: "/computerglasses/shape/cateye", label: "CatEye" },
    ],
  },
  {
    label: "Style",
    subItems: [
      { href: "/computerglasses/type/rimless", label: "Rimless" },
      { href: "/computerglasses/type/half-frame", label: "HalfFrame" },
      { href: "/computerglasses/type/full-frame", label: "FullFrame" },
    ],
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const { user } = router.query;
  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <header className="flex flex-col w-full  px-2 mb-4">
        {/* Top Part */}
        <div className="flex items-center justify-between h-14 ">
          {/* Left */}
          <div className=" relative md:w-1/2 flex  md:flex-row">
            <button
              onClick={() => setDropdown(!Dropdown)}
              className=" md:hidden"
            >
              <MdOutlineMenu size={20} />
            </button>
            <ul
              className={` md:flex items-center gap-5 text-[10px]  absolute z-10  top-[20px] md:top-1/2 md:-translate-y-1/2  bg-white py-2 px-2 rounded ${
                Dropdown ? null : "hidden"
              }`}
            >
              <li className="cursor-pointer mb-2 border-b-2 md:mb-0 md:border-0 pb-1 text-nowrap">
                Track order
              </li>
              <li className="cursor-pointer mb-2 border-b-2 md:mb-0 md:border-0 pb-1 flex">
                <AiOutlineHeart className="h-4 w-4 me-1" /> Wishlist
              </li>
              <li
                className="cursor-pointer mb-2 border-b-2 md:mb-0 md:border-0 pb-1 text-nowrap"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </li>
            </ul>
          </div>
          {/* Right  */}
          <div>
            <ul className="flex items-center gap-5 text-xs">
              <li
                className="cursor-pointer flex items-center gap-1"
                onClick={() => setOpen(true)}
              >
                <MdShoppingCart className="h-4 w-4" />
                Cart
              </li>
              <li
                className="cursor-pointer"
                onClick={() => router.push("/login")}
              >
                SignIn & SignUp
              </li>
              <li>
                <ProfileMenu />
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Part  */}
        <div className="flex  flex-col md:flex-row justify-between items-center ">
          <div className=" hidden md:flex justify-start w-full md:w-fit mb-4 items-center gap-y-4 me-6 font-bold text-sm cursor-pointer ">
            <BsFillTelephonePlusFill />
            +918188881661
          </div>
          <div className=" flex   w-full md:grow md:w-0 justify-between">
            <Image
              src={"/logo.png"}
              width={500}
              height={500}
              className="w-[200px] "
              alt=""
            />
            <div>
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Bottom Part  */}
        <div className="flex items-center justify-between mb-4 py-2 rounded-lg w-full  overflow-x-auto">
          <div className="flex items-center  md:justify-center   text-sm font-semibold tracking-wide w-full ">
            <div
              className="cursor-pointer"
              // onClick={()=>router.push("/accessories")}
            >
              Accessories
            </div>
            <div
              className="cursor-pointer"
              // onClick={()=>router.push("/eyeglasses")}
            >
              <MenuComponentNested title="EyeGlasses" items={EyeGlassLinks} />
            </div>
            <div
              className="cursor-pointer"
              // onClick={()=>router.push("/computerglasses")}
            >
              <MenuComponentNested
                title="ComputerGlasses"
                items={ComputerGlassLinks}
              />
            </div>
            <div
              className="cursor-pointer"
              // onClick={()=>router.push("/kidsglasses")}
            >
              <MenuComponentNested title="KidsGlasses" items={KidsGlassLinks} />
            </div>
            <div
              className="cursor-pointer"
              // onClick={()=>router.push("/sunglasses")}
            >
              <MenuComponentNested title="SunGlasses" items={SunGlassLinks} />
            </div>
            <div
              className="cursor-pointer inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ring-gray-300 hover:bg-gray-50"
              onClick={() => router.push("/tryHome")}
            >
              Try@Home
            </div>
            <div className="cursor-pointer">
              <MenuComponent title="Pages" items={PageLinks} />
            </div>
            <div className="cursor-pointer">Blog</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
