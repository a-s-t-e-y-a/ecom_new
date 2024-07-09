import React from "react";
import UploadLensImage from "../Global/UploadLensImage";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/Slices/CartSlice";

const LensPlanFeature = ({ item, onNext }) => {
  const dispatch = useDispatch();
  const previousData = useSelector((state) => state.cart.data);
  return (
    <div>
      <div>
        <ul className="text-xs tracking-wider text-gray-700">
          <li className="text-center shadow-sm py-3 cursor-pointer tracking-wider h-[180px]">
            <div className="tracking-wide space-y-2">
              <div className="flex items-center justify-center rounded-full p-1 w-10 h-10 mx-auto">
                <UploadLensImage />
              </div>
              <span className="text-xs font-semibold">{item?.heading}</span>
              <div className="flex flex-col">
                <span className="text-lg tracking-wide font-semibold">
                  &#x20b9; {item?.price}
                </span>
                <span className="text-xs text-gray-500">(Inclue Frame)</span>
              </div>
              <div>
                <button
                  className="text-xs px-4 py-1 text-white rounded-lg tracking-wider bg-gray-700"
                  onClick={() => {
                    dispatch(
                      addData({
                        ...previousData,
                        lens: item,
                      })
                    );
                  }}
                >
                  Select This Lens
                </button>
              </div>
            </div>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.power_range}</span>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.thickness} Index</span>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.warranty_period}</span>
            {/* <span>upto +/-3</span> */}
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.blue_light_blocker || 0}</span>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.anti_scratch_coating || "No"}</span>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.breakage_and_crack_resistant || "Yes"}</span>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.both_side_anti_reflective_coating || "Yes"}</span>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.uv_protection || "No"}</span>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.water_and_dust_repellent || "Yes"}</span>
          </li>
          <li className="text-center shadow-sm px-3 py-[7px]">
            <span>{item?.id}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LensPlanFeature;
