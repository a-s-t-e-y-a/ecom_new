import React from "react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import DeleteProduct from "@/utils/mutations/useDeletehandler";

const ProductDetailTable = ({
  data,
  refetch,
  open,
  modelNo,
  modelName,
  gender,
  catogaries,
  color,
  selectlens,
  powertype,
  price,
  material,
  frame_width,
  lens_width,
  lens_height,
  seo,
  tag,
  discpriction,
}) => {
  const { mutate: Delete } = useMutation({
    mutationFn: DeleteProduct,
    onSuccess: (data) => {
      toast.success("Deleted Successfully");
      refetch();
    },
    onError: (err) => {
      toast.error("Error deleting Product");
    },
  });
  const DeleteProductHandler = (id) => {
    Delete(id);
  };
  const EditHandler = (product) => {
    modelNo(product?.p_id);
    modelName(product?.product_model_name);
    gender();
    catogaries();
    color();

    selectlens();
    powertype();
    price();
    material();
    frame_width();
    lens_width();
    lens_height();
    seo();
    tag();
    discpriction();
  };
  return (
    <div className="w-full tracking-wide  px-10 ">
      <table className="w-full ">
        <thead className=" text-xs font-normal text-gray-700 sticky -top-1 left-0 bg-white shadow-lg ng-blue-100 w-full overflow-auto">
          <tr className=" w-full  ">
            <th className="py-2 border">Model No.</th>

            <th className="py-2 border">Quantity</th>

            <th className="py-2 border">Model Name </th>
            <th className="py-2 border">Price</th>
            <th className="py-2 border">Shape</th>
            <th className="py-2 border">F Material</th>
            <th className="py-2 border">F Width</th>
            <th className="py-2 border">L Width</th>
            <th className="py-2 border">L Height</th>
            <th className="py-2 border">Color</th>
            <th className="py-2 border">Edit</th>
            <th className="py-2 border">Delete</th>
          </tr>
        </thead>
        <tbody className="text-xs text-gray-600 text-center  ">
          {data &&
            data.map((Product, index) => (
              <tr className="" key={index}>
                <td className="py-2 border">{Product?.p_id}</td>
                <td className="py-2 border">{Product?.stokke}</td>

                <td className="py-2 border">{Product?.product_model_name}</td>
                <td className="py-2 border">{Product?.discounted_price}</td>
                <td className="py-2 border">
                  {Product?.shape || Product?.shape_}
                </td>
                <td className="py-2 border">
                  {Product?.material || Product?.material_}
                </td>
                <td className="py-2 border">{Product?.frame_width}</td>
                <td className="py-2 border">{Product?.LensWidth}</td>
                <td className="py-2 border">{Product?.lens_height}</td>
                <td className="py-2 border">
                  {Product?.product_color || Product?.product_color_}
                </td>

                <td className="py-2 border">
                  <span
                    className="text-sky-600 flex items-center justify-center w-full cursor-pointer"
                    onClick={() => EditHandler(Product)}
                  >
                    <TbEdit />
                  </span>
                </td>
                <td className="py-2 border">
                  <span
                    className="text-orange-600 flex items-center justify-center w-full cursor-pointer"
                    onClick={() => DeleteProductHandler(Product?.p_id)}
                  >
                    <MdDelete />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailTable;
