import { AiOutlineHeart } from "react-icons/ai";
import { MdShoppingCart, MdOutlineMenu } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import Link from "next/link";
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

const Header = () => {
  const [open, setOpen] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const { user } = router.query;
  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <header className="flex flex-col w-full  px-4 mb-4">
        {/* Top Part */}
        <div className="flex items-center justify-between h-14 mb-3 ">
          {/* Left */}
          <div className=" relative md:w-1/2 flex  md:flex-row">
            <button
              onClick={() => setDropdown(!Dropdown)}
              className=" md:hidden"
            >
              <MdOutlineMenu size={20} />
            </button>
            <ul
              className={` md:flex items-center gap-5   absolute z-10  top-[20px] md:top-1/2 md:-translate-y-1/2  bg-white py-2 px-2 rounded ${
                Dropdown ? null : "hidden"
              }`}
            >
              <li className="cursor-pointer mb-2 border-b-2 md:mb-0 md:border-0 pb-1  text-nowrap">
                Track order
              </li>
              <li className="cursor-pointer mb-2 border-b-2 md:mb-0 md:border-0 pb-1 flex items-center">
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
            <ul className="flex items-center gap-5  ">
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
        <div className=" flex justify-between  ">
          <div className=" hidden md:flex items-center gap-2 cursor-pointer  ">
            <BsFillTelephonePlusFill />
            +918188881661
          </div>
          <div className=" ">
            <Image
              src={"/logo.png"}
              width={500}
              height={100}
              className=" object-cover mb-3  "
              alt=""
            />
          </div>
          <div>
            <SearchBar />
          </div>
        </div>

        {/* Bottom Part  */}
        <div className="flex items-center justify-between mb-4 py-2 rounded-lg w-full  overflow-x-auto">
          <div className="flex items-center  lg:justify-center   text-sm  md:text-lg font-semibold tracking-wide w-full ">
            <div className="cursor-pointer">
              <MenuComponentNested title="EyeGlasses" items={EyeGlassLinks} />
            </div>

            <div className="cursor-pointer">
              <MenuComponentNested title="SunGlasses" items={SunGlassLinks} />
            </div>
            <div
              className="cursor-pointer inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  text-sm  md:text-lg  font-semibold text-gray-900 shadow-sm  ring-gray-300 hover:bg-gray-50"
              onClick={() => router.push("/tryHome")}
            >
              Try@Home
            </div>
            <div className="cursor-pointer">
              <MenuComponent title="Pages" items={PageLinks} />
            </div>
            <Link href={"/blog"} className="cursor-pointer">
              Blog
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
