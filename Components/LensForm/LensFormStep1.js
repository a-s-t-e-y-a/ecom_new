import React from "react";
import SinglePowerType from "../Lens/SinglePowerType";
import useGetAllPowerType from "@/utils/queries/usePowerType";
import { useDispatch } from "react-redux";

const LensFormStep1 = ({ onNext, onCancel }) => {
  const { data, isFetched, isLoading } = useGetAllPowerType();
  return (
    <div className="space-y-6 text-gray-800 w-[100%] h-[100vh] mt-20">
      <h1 className="text-xl font-semibold tracking-wide text-center">
        Select Power Type
      </h1>
      <div className="space-y-3 h-[320px] overflow-auto scrollbar-hide">
        {isFetched &&
          data?.map((powerTypeData) => {
            return (
              <>
                <SinglePowerType
                  src={powerTypeData?.image}
                  title={powerTypeData?.title}
                  description={powerTypeData?.description}
                />
              </>
            );
          })}
      </div>

      <div className="flex items-center justify-between pt-7 w-[81%] mx-auto">
        <button
          onClick={onCancel}
          className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
        >
          Cancel
        </button>
        <button
          onClick={onNext}
          className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LensFormStep1;
