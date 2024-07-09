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
import { useEffect, useState } from "react";
import MenuComponentNested from "../MenuComponentNested";
import { customLocalStorage } from "@/utils/Helpers";
import { PageLinks, SunGlassLinks } from "@/utils/contants";
import useGetAllShape from "@/utils/queries/useShapeGetAll";
import useGetAllStyle from "@/utils/queries/useStyleGetAll";
import WishlistDialog from "../Dialog/WishlistDialog";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openFav, setOpenFav] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const { data } = useGetAllShape();
  const { data: style } = useGetAllStyle();

  const { getItem } = customLocalStorage;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = getItem("user_info");
      const userData = getItem("user_data");
      setToken(token);
      setUserData(userData);
    }
  }, []);

  const EyeGlassLinks = [
    {
      label: "Shape",
      subItems: data?.map((item) => {
        return {
          label: item.name,
          href: `/Eyeglass/shape/${item.name}`,
        };
      }),
    },
    {
      label: "Style",
      subItems: style?.map((item) => {
        return {
          label: item.name,
          href: `/Eyeglass/style/${item.url}`,
        };
      }),
    },
  ];
  const SunGlassLinks = [
    {
      label: "Shape",
      subItems: data?.map((item) => {
        return {
          label: item.name,
          href: `/Sunglasses/shape/${item.name}`,
        };
      }),
    },
    {
      label: "Style",
      subItems: style?.map((item) => {
        return {
          label: item.name,
          href: `/Sunglasses/style/${item.url}`,
        };
      }),
    },
  ];
  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <WishlistDialog open={openFav} setOpen={setOpenFav} />
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
              className={` md:flex items-center gap-5   absolute z-10  top-[20px] md:top-1/2 md:-translate-y-1/2 text-xs  bg-white py-2 px-2 rounded ${
                Dropdown ? null : "hidden"
              }`}
            >
              <li className="cursor-pointer mb-2 border-b-2 md:mb-0 md:border-0 pb-1  text-nowrap">
                Track order
              </li>
              <li
                className="cursor-pointer mb-2 border-b-2 md:mb-0 md:border-0 pb-1 flex items-center"
                onClick={() => setOpenFav(!openFav)}
              >
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
            <ul className="flex items-center gap-5  text-xs ">
              <li
                className="cursor-pointer flex items-center gap-1"
                onClick={() => setOpen(true)}
              >
                <MdShoppingCart className="h-4 w-4" />
                Cart
              </li>
              {token ? (
                <>
                  <li className="underline cursor-pointer">{userData.name}</li>
                  <li>
                    <ProfileMenu name={userData.name} />
                  </li>
                </>
              ) : (
                <li
                  className="cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  SignIn & SignUp
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Middle Part  */}
        <div className=" flex justify-between  ">
          <div className=" hidden md:flex items-center font-bold gap-2 cursor-pointer  ">
            <BsFillTelephonePlusFill />
            +91-8188881661
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
        <div className="flex items-center  justify-between mb-4 py-2 rounded-lg w-full  overflow-x-auto">
          <div className="flex items-center md:gap-16 lg:justify-center gap-4  text-sm  md:text-lg font-semibold tracking-wide w-full ">
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
