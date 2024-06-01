import AdminLayout from "@/Layout/AdminLayout";
import IconButton from "@/Components/Admin/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import { CiUser } from "react-icons/ci";

const registeredUsers = () => {
  return (
    <AdminLayout>
      <div>
        <div>
          {/* <IconButton label="Registered Users" icon={<CiUser />} /> */}
        </div>
        <div className="mt-6 flex items-center gap-3 flex-wrap w-full">
          <div className="w-full mx-4 border rounded-md shadow-md px-1 py-3 grid grid-cols-12 items-center justify-between bg-gray-50">
            <div className="col-span-1 text-base tracking-wide font-semibold flex items-center justify-center">
              <span className="text-xs text-gray-400 tracking-wider">SNo.</span>
            </div>
            <div className="col-span-2 text-base tracking-wide font-semibold flex items-center justify-center">
              <span className="text-xs text-gray-400 tracking-wider">Name</span>
            </div>
            <div className="col-span-1 text-base tracking-wide font-semibold flex items-center justify-center">
              <span className="text-xs text-gray-400 tracking-wider">
                Mobile
              </span>
            </div>
            <div className="col-span-3 text-base tracking-wide font-semibold flex items-center justify-center">
              <span className="text-xs text-gray-400 tracking-wider">
                Email
              </span>
            </div>

            <div className="col-span-2 text-base tracking-wide font-semibold flex items-center justify-center">
              <span className="text-xs text-gray-400 tracking-wider">
                Password
              </span>
            </div>
            <div className="col-span-2 text-base tracking-wide font-semibold flex items-center justify-center">
              <span className="text-xs text-gray-400 tracking-wider">
                Address
              </span>
            </div>
            <div className="col-span-1 text-base tracking-wide font-semibold flex items-center justify-center">
              <span className="text-xs text-gray-400 tracking-wider">
                Action
              </span>
            </div>
          </div>
          <div className="w-full mx-4  border rounded-md shadow-md px-1 py-2 flex flex-col items-center justify-between bg-gray-50 gap-5">
            {/* {
                        brandData.map((item,index)=>(  */}
            <div
              key={1}
              className="w-full relative grid grid-cols-12 gap-4 border-b-2 border-white pb-[6px]"
            >
              <div className="col-span-1 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">1</span>
              </div>
              <div className="col-span-2 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Akku ka chashma
                </span>
              </div>
              <div className="col-span-1 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  6388233466
                </span>
              </div>
              <div className="col-span-3 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  akkukachashma@gmail.com
                </span>
              </div>

              <div className="col-span-2 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  akku12345
                </span>
              </div>
              <div className="col-span-2 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Delhi,Lakshmi Nagar
                </span>
              </div>
              <div className="col-span-1 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-md text-red-500 cursor-pointer">
                  <DeleteOutlineIcon className="text-base" />
                </span>
              </div>
            </div>
            <div
              key={1}
              className="w-full relative grid grid-cols-12  border-b-2 pb-[6px] border-white gap-4"
            >
              <div className="col-span-1 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">2</span>
              </div>
              <div className="col-span-2 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Akku ka Chasma
                </span>
              </div>
              <div className="col-span-1 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  6964567890
                </span>
              </div>
              <div className="col-span-3 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  AkkuKaChasmainTheWorld@gmail.com
                </span>
              </div>

              <div className="col-span-2 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  akc12345
                </span>
              </div>
              <div className="col-span-2 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Delhi,Lakshmi Nagar, 110023 , Bagen Buxar Pin:802134
                </span>
              </div>
              <div className="col-span-1 text-base tracking-wide font-semibold flex flex-col items-center justify-center">
                <span className="text-md text-red-500 cursor-pointer">
                  <DeleteOutlineIcon className="text-base" />
                </span>
              </div>
            </div>
            {/* ))
                    }  */}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default registeredUsers;
