import React from "react";
import { useSelector } from "react-redux";

const Specification = () => {
  const {
    product_id,
    frame_material,
    lens_material,
    frames_color,
    shape,
    gender,
    style,
    product_type,
    raw_marterial,
  } = useSelector((state) => state.Sepcification);
  const SpecificationData = [
    { title: "Frame Material ", value: frame_material },
    { title: "Lens Material ", value: lens_material },
    { title: "Frame Color ", value: frames_color },
    { title: "Collection ", value: "Trend " },
    { title: "Shape ", value: shape },
    { title: "Gender ", value: gender },
    { title: "Style ", value: style },
    { title: "Product Id ", value: product_id },
    { title: "Product Type ", value: product_type },
    { title: "Packaged by ", value: "akku ka chasma India " },
    { title: "Raw Material Sourced from ", value: raw_marterial },
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
