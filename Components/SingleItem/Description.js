import React from "react";
import { useSelector } from "react-redux";

const Description = () => {
  const { product_description } = useSelector((state) => state.Sepcification);
  return <div>{product_description}</div>;
};

export default Description;
