import { FormGroup } from "@mui/material";
import React, { useState } from "react";
import MyCheckBox from "./MyCheckBox";
import { TiFilter } from "react-icons/ti";
import { motion } from "framer-motion";
import useGetAllSize from "@/utils/queries/useGetAllSize";
import useGetAllShape from "@/utils/queries/useShapeGetAll";
import useGetAllStyle from "@/utils/queries/useStyleGetAll";
import useGetAllColor from "@/utils/queries/useColorGetAll";
import { frameWidth, gender, lensWidth } from "@/utils/contants";
import { useDispatch } from "react-redux";
import { filterProduct } from "@/Slices/filterProductSlice";

const Filter = () => {
  const dispatch = useDispatch()
  const [display, setDisplay] = useState(true);
  const [selectedValues, setSelectedValues] = useState({
    size: "",
    frameWidth: "",
    lensWidth: "",
    shape: "",
    style: "",
    gender: "",
    color: "",
  });

  const { data: size } = useGetAllSize();
  const { data: shape } = useGetAllShape();
  const { data: style } = useGetAllStyle();
  const { data: color } = useGetAllColor();

  const handleCheckBoxChange = (category, label) => {
    dispatch(filterProduct({category, label}))
    setSelectedValues((prev) => ({
      [category]: prev[category] === label ? null : label,
    }));
  };

  const renderCheckBoxGroup = (label, data, category) => (
    <div key={category}>
      <span className="font-semibold tracking-wide text-sm">{label}</span>
      <FormGroup className={category !== "frameWidth" && category !== "lensWidth" ? "grid grid-cols-1" : "grid grid-cols-4"}>
        {data?.map((item) => (
          <MyCheckBox
            key={item.name || item}
            label={item.name || item}
            value={`${label}:${item.name || item}`} // Value includes label name
            checked={selectedValues[category] === (item.name || item)}
            onChange={() => handleCheckBoxChange(category, item.name || item)}
          />
        ))}
      </FormGroup>
    </div>
  );

  return (
    <motion.div
      className={`sticky z-20 ${display ? "w-[24px] left-0" : "w-screen lg:w-[250px] ml-[-20px] mt-4 border rounded-md bg-white"} space-x-2`}
      animate={{
        transition: { duration: 0.6, type: "spring", damping: 15 },
      }}
    >
      <motion.span
        className={`${display ? "absolute top-0 right-0" : "absolute top-2 right-2"} cursor-pointer`}
        onClick={() => setDisplay(!display)}
        whileTap={{ scale: 0.8 }}
      >
        <TiFilter className="text-xl bg-gray-700 text-white p-1 rounded-full" />
        <span className="text-[10px] text-gray-700 tracking-wide">Filter</span>
      </motion.span>
      <motion.div className={`${display ? "hidden" : ""} w-full mt-3 p-3`}>
        {renderCheckBoxGroup("Size", size, "size")}
        {renderCheckBoxGroup("Frame Width", frameWidth, "frameWidth")}
        {renderCheckBoxGroup("Lens Width", lensWidth, "lensWidth")}
        {renderCheckBoxGroup("Shape", shape, "shape")}
        {renderCheckBoxGroup("Style", style, "style")}
        {renderCheckBoxGroup("Gender", gender, "gender")}
        {renderCheckBoxGroup("Color", color, "color")}
      </motion.div>
    </motion.div>
  );
};

export default Filter;
