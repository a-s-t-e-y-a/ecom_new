import IconButton from "@/Components/Admin/IconButton";
import AdminLayout from "@/Layout/AdminLayout";
import { HiOutlineNewspaper } from "react-icons/hi";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";

const NewsLetter = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);
  if (logged) {
    return (
      <AdminLayout>
        <div className="ml-4">
          <IconButton label="Subscribed Number" icon={<HiOutlineNewspaper />} />
        </div>
        <div className="mt-5  flex items-center gap-3 flex-wrap w-full">
          <div className="w-full mx-4 border rounded-md shadow-md px-5 py-3 flex items-center justify-between bg-gray-50">
            <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400 tracking-wider">SNo.</span>
            </div>
            <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400 tracking-wider">
                Mobile
              </span>
            </div>
            <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400 tracking-wider">
                Created On
              </span>
            </div>
            <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
              <span className="text-xs text-gray-400 tracking-wider">
                Action
              </span>
            </div>
          </div>
          <div className="w-full mx-4 border rounded-md shadow-md px-5 py-2 flex flex-col items-center justify-between bg-gray-50 gap-5">
            {/* {
                        couponsData.map((coupon,index)=>( */}
            <div
              key={1}
              className="w-full relative flex items-center justify-between"
            >
              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                  SNo
                </span>
                <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                  1
                </span>
              </div>
              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                  Mobile
                </span>
                <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                  9123456789
                </span>
              </div>
              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                  Created On
                </span>
                <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                  26-11-2001
                </span>
              </div>
              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                  Action
                </span>
                <span className="text-md text-red-500 cursor-pointer -mt-4 z-5">
                  <DeleteOutlineIcon className="text-base" />
                </span>
              </div>
            </div>
            {/* ))
                    } */}
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default NewsLetter;
