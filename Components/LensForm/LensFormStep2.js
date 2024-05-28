import React from "react";
import SinglePowerType from "../Lens/SinglePowerType";
import useGetAllLensFeature from "@/utils/queries/useLensFeature";

const LensFormStep2 = ({ onNext, onPrev }) => {
  const { data, isFetched } = useGetAllLensFeature();
  console.log(data, "data");
  return (
    <div className="space-y-6 text-gray-800 w-[100%] h-[100vh] mt-20">
      <h1 className="text-xl font-semibold tracking-wide text-center">
        Select Lens Feature
      </h1>
      <div className="space-y-3 h-[320px] overflow-auto scrollbar-hide">
        {isFetched &&
          data?.map((lensFeatureData) => {
            return (
              <>
                <SinglePowerType
                  src={lensFeatureData?.image}
                  title={lensFeatureData?.title}
                  description={lensFeatureData?.description}
                />
              </>
            );
          })}
      </div>

      <div className="flex items-center justify-between pt-7 w-[81%] mx-auto">
        <button
          onClick={onPrev}
          className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto"
        >
          Previous
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

export default LensFormStep2;
