import { FormGroup } from "@mui/material";
import React from "react";
import MyCheckBox from "./MyCheckBox";
import { TiFilter } from "react-icons/ti";
import {  motion } from "framer-motion";

const Filter = () => {
  const [display, setDisplay] = React.useState(false);

  return (
    <motion.div
      className={`relative ${display ? " w-full md:w-auto" : "w-[24px]  border rounded-md"} space-x-2 `}
      animate={{
      
        transition: {
          duration: 0.6,
          type: "spring",
          damping: 15,
        },
      }}
    >
      <motion.span
        className={`${
          display ? "absolute top-0 right-0" : "absolute top-2 right-2"
        } cursor-pointer`}
        onClick={() => setDisplay(!display)}
        whileTap={{ scale: 0.8 }}
      >
        <TiFilter className="text-xl bg-gray-700 text-white p-1 rounded-full" />
        <span className="text-[10px] text-gray-700 tracking-wide">Filter</span>
      </motion.span>
      <motion.div className={`${display ? "hidden" : ""} w-full mt-3 p-3`}>
        {/* Size  */}
        <div className="">
          <span className="font-semibold tracking-wide text-sm">Size</span>
          <FormGroup className="">
            <MyCheckBox label="Extra Narrow" />
            <MyCheckBox label="Narrow" />
            <MyCheckBox label="Medium" />
            <MyCheckBox label="Wide" />
            <MyCheckBox label="Extra Wide" />
          </FormGroup>
        </div>
        <div>
          <span className="font-semibold tracking-wide text-sm">
            Frame Width
          </span>
          <FormGroup>
            <div className="grid grid-cols-4">
              <MyCheckBox label="123" />
              <MyCheckBox label="124" />
              <MyCheckBox label="125" />
              <MyCheckBox label="126" />
              <MyCheckBox label="127" />
              <MyCheckBox label="128" />
              <MyCheckBox label="129" />
              <MyCheckBox label="130" />
              <MyCheckBox label="131" />
              <MyCheckBox label="132" />
              <MyCheckBox label="133" />
              <MyCheckBox label="134" />
              <MyCheckBox label="135" />
              <MyCheckBox label="136" />
              <MyCheckBox label="137" />
              <MyCheckBox label="138" />
              <MyCheckBox label="139" />
              <MyCheckBox label="140" />
              <MyCheckBox label="141" />
              <MyCheckBox label="142" />
              <MyCheckBox label="143" />
              <MyCheckBox label="144" />
              <MyCheckBox label="145" />
              <MyCheckBox label="146" />
              <MyCheckBox label="147" />
              <MyCheckBox label="148" />
            </div>
          </FormGroup>
        </div>
        <div>
          <span className="font-semibold tracking-wide text-sm">
            Lens Width
          </span>
          <FormGroup>
            <div className="grid grid-cols-4">
                <MyCheckBox label="23" />
                <MyCheckBox label="24" />
                <MyCheckBox label="25" />
                <MyCheckBox label="26" />
                <MyCheckBox label="27" />
                <MyCheckBox label="28" />
                <MyCheckBox label="29" />
                <MyCheckBox label="30" />
                <MyCheckBox label="31" />
                <MyCheckBox label="32" />
                <MyCheckBox label="33" />
                <MyCheckBox label="34" />
                <MyCheckBox label="35" />
                <MyCheckBox label="36" />
                <MyCheckBox label="37" />
                <MyCheckBox label="38" />
                <MyCheckBox label="39" />
            </div>
          </FormGroup>
        </div>
        <div>
          <span className="font-semibold tracking-wide text-sm">Shape</span>
          <FormGroup>
            <div className="grid grid-cols-2">
                <MyCheckBox label="Butterfly" />
                <MyCheckBox label="Aviator" />
                <MyCheckBox label="Haxagon" />
                <MyCheckBox label="Square" />
                <MyCheckBox label="Oval" />
                <MyCheckBox label="Cateye" />
                <MyCheckBox label="Round" />
                <MyCheckBox label="Wayfarer" />
                <MyCheckBox label="Rectangle" />
                <MyCheckBox label="Geometric" />
                <MyCheckBox label="Clubmaster" />
            </div>
          </FormGroup>
        </div>
        <div>
          <span className="font-semibold tracking-wide text-sm">Style</span>
          <FormGroup className="grid grid-cols-1">
            <MyCheckBox label="Rimless" />
            <MyCheckBox label="Half Frame" />
            <MyCheckBox label="Full Frame" />
          </FormGroup>
        </div>
        <div>
          <span className="font-semibold tracking-wide text-sm">Gender</span>
          <FormGroup className="grid grid-cols-1">
            <MyCheckBox label="Men" />
            <MyCheckBox label="Women" />
            <MyCheckBox label="Kids" />
            <MyCheckBox label="Both(M/F)" />
          </FormGroup>
        </div>
        <div>
          <span className="font-semibold tracking-wide text-sm">Color</span>
          <FormGroup>
            <div className="grid grid-cols-2">
                <MyCheckBox label="Black" />
                <MyCheckBox label="Blue" />
                <MyCheckBox label="Gray" />
                <MyCheckBox label="Brown" />
                <MyCheckBox label="Transparent" />
                <MyCheckBox label="Tortoise" />
                <MyCheckBox label="Green" />
                <MyCheckBox label="Gold" />
                <MyCheckBox label="Silver" />
                <MyCheckBox label="Maroon" />
                <MyCheckBox label="Pink" />
                <MyCheckBox label="Purple" />
                <MyCheckBox label="Red" />
                <MyCheckBox label="Orange" />
                <MyCheckBox label="White" />
                <MyCheckBox label="Multi Color" />
                <MyCheckBox label="Voilet" />
                <MyCheckBox label="Rese Gold" />
            </div>
          </FormGroup>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Filter;
