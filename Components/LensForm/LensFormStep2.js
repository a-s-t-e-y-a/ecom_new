import React from "react";
import SingleLensFeature from "../Lens/SingleLensFeature";
import useGetAllLensFeature from "@/utils/queries/useLensFeature";
import { useSelector } from "react-redux";

const LensFormStep2 = ({ onNext, onPrev }) => {
  const { data, isFetched } = useGetAllLensFeature();
  const powerTypeText = useSelector(
    (state) => state.filterText.filterText.power_type
  );

  let filteredDataOfPowerType = [];
  if (isFetched) {
    filteredDataOfPowerType = data.filter(
      (item) => item?.power_type_?.name === powerTypeText
    );
  }

  return (
    <div className="space-y-6 text-gray-800 w-[100%] h-[100vh] mt-20">
      <h1 className="text-xl font-semibold tracking-wide text-center">
        Select Lens Feature
      </h1>
      <div className="space-y-3 h-[320px] overflow-auto scrollbar-hide">
        {isFetched &&
          filteredDataOfPowerType &&
          filteredDataOfPowerType?.map((lensFeatureData, index) => {
            return (
              <>
                <div key={index}>
                  <SingleLensFeature
                    key={index}
                    src={lensFeatureData?.image}
                    title={lensFeatureData?.title}
                    description={lensFeatureData?.description}
                    onNext={onNext}
                    powerTypeText={powerTypeText}
                  />
                </div>
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
          className="px-3 py-1 text-sm text-white rounded-md tracking-wide flex mx-auto"
        >
          
        </button>
      </div>
    </div>
  );
};

export default LensFormStep2;
