import React from "react";
import { useSelector } from "react-redux";

const Specification = ({ Product }) => {
  const {
    p_id,
    material_,
    lens_material,
    product_color_,
    shape,
    use_for,
    style,
    product_type,
    row_metrial_source_from,
  } = Product || {};
  const SpecificationData = [
    { title: "Frame Material ", value: material_?.name },
    { title: "Lens Material ", value: lens_material },
    { title: "Frame Color ", value: product_color_?.name },
    { title: "Shape ", value: shape },
    { title: "Gender ", value: use_for },
    { title: "Style ", value: style },
    { title: "Product Id ", value: p_id },
    { title: "Product Type ", value: product_type },
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
