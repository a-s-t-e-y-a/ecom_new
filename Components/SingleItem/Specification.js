import React from "react";
import { useSelector } from "react-redux";

const Specification = ({ Product }) => {
  const {
    product_model_number,
    material_,
    product_color_,
    shape_,
    use_for,
    style_,
    row_metrial_source_from,
    size_
  } = Product || {};
  const SpecificationData = [
    { title: "Frame Material ", value: material_?.name },
    { title: "Lens Material ", value: "Demo Polycarbonate" },
    { title: "Frame Color ", value: product_color_?.name },
    { title: "Shape ", value: shape_?.name },
    { title: "Gender ", value: use_for },
    { title: "Style ", value: style_?.name },
    { title: "Product Id ", value: product_model_number },
    { title: "Product Type ", value: size_?.name },
    { title: "Packaged by ", value: "akku ka chasma India " },
    { title: "Raw Material Sourced from ", value: row_metrial_source_from },
    { title: "Know Your Size ", value: "Click " },
  ];

  return (
    <div className="w-full">
      <table className="border-collapse w-full ">
        <tbody>
          {SpecificationData?.map((item, index) => (
            <tr key={index}>
              <td className="border font-semibold px-4 py-[5px]">
                {item.title}
              </td>
              <td className="border text-sm px-4 py-[5px]">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Specification;
