import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import UserSideBar from "@/Components/SideBar/UserSideBar";
import AccountInformation from "@/Components/User/AccountInformation";
import { customLocalStorage } from "@/utils/Helpers";

const Index = () => {
  // Sidebar active state change events
  const [Show, setShow] = useState(true);
  const user_data = customLocalStorage.getItem("user_data")
  return (
    <div className="w-[95%] h-screen mx-auto text-gray-700 overflow-hidden flex flex-col">
      {/* Header  */}
      <div className="flex gap-5 h-1/6 pt-10">
        <Avatar
          src="/favicon.ico"
          alt="avatar"
          variant="circular"
          className="w-11 h-11 duration-300 cursor-pointer"
          onClick={(e) => {
            setShow(!Show);
            e.target.style.transform = `${
              Show ? "rotate(0deg)" : "rotate(360deg)"
            }`;
          }}
        />
        <div>
          <h1 className="font-semibold tracking-wider text-2xl">
            Akku ka chashma
          </h1>
          <h2 className="font-normal text-md">{user_data?.email}</h2>
        </div>
      </div>

      <div className="  flex items-center gap-5 h-5/6 pt-2">
        <div className=" absolute top-28 md:top-0 md:relative bg-white  z-10 h-full">
          <UserSideBar />
        </div>
        <div className="h-full w-full">
          <AccountInformation />
        </div>
      </div>
    </div>
  );
};

export default Index;
