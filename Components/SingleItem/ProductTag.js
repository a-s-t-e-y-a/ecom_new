import React from "react";

const ProductTag = ({Product}) => {
  return <div className="min-h-[420px] border shadow rounded p-5">{Product?.keyword}</div>;
};

export default ProductTag;
