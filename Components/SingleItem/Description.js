import React from "react";
import { useSelector } from "react-redux";

const Description = () => {
  const {discription } = useSelector((state) => state.Sepcification);
  console.log(discription);
  return <div dangerouslySetInnerHTML={{ __html:discription  }} className="min-h-[420px]"></div>;
};

export default Description;
