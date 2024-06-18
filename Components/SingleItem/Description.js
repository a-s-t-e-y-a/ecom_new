import React from "react";
import { useSelector } from "react-redux";

const Description = ({Product}) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: Product?.product_description      }}
      className="min-h-[420px] border shadow rounded p-5"
    ></div>
  );
};

export default Description;
