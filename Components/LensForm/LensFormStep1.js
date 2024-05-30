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
          data?.map((powerTypeData, index) => {
            return (
              <>
                <div key={index}>
                  <SinglePowerType
                    key={index}
                    src={powerTypeData?.image}
                    title={powerTypeData?.name}
                    description={powerTypeData?.description}
                    onNext={onNext}
                  />
                </div>
              </>
            );
          })}
      </div>

      <div className="flex items-start justify-between pt-7 w-[81%] mx-auto">
        <button
          onClick={onCancel}
          className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
        >
          Cancel
        </button>
        <span className="px-3 py-1 text-sm text-white rounded-md tracking-wide flex mx-auto"></span>
      </div>
    </div>
  );
};

export default LensFormStep1;
