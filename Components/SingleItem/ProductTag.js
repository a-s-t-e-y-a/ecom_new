import React from "react";

const ProductTag = ({Product}) => {
  return <div className="min-h-[420px]">{Product?.keyword}</div>;
};

export default ProductTag;
