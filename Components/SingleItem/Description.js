import React from "react";
import { useSelector } from "react-redux";

const Description = ({Product}) => {
  
  return (
    <div
      dangerouslySetInnerHTML={{ __html: Product?.product_description }}
      className="min-h-[420px]"
    ></div>
  );
};

export default Description;
