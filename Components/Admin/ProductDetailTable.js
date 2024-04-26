import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import DeleteProduct from "@/utils/mutations/useDeletehandler";
import Modal from "../Dialog/Modal";
import DeletePoPUPDialog from "../Dialog/DeletePoPUPDialog";

const ProductDetailTable = ({ data, refetch, open }) => {
  console.log(data)
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const { mutate: Deletes } = useMutation({
    mutationFn: DeleteProduct,
    onSuccess: (data) => {
      toast.success("Deleted Successfully");
      refetch();
    },
    onError: (err) => {
      toast.error("Error deleting Product");
    },
  });
  const DeleteProductHandler = (Product) => {
    setDeletePayload(Product);
    onShowDelete();
  };

  return (
    <div className="w-full tracking-wide  px-10 ">
      <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
        <DeletePoPUPDialog
          Closefunction={onHideDelete}
          Deletefunction={Deletes}
          payload={DeletePayload}
        />
      </Modal>
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
          {data.length > 0
            ? data.map((Product, index) => (
                <tr className="" key={index}>
                  <td className="py-2 pl-6 border text-left">{Product?.product_model_number}</td>
                  <td className="py-2 pl-6 border text-left">{Product?.stokke}</td>

                  <td className="py-2 pl-6 border text-left">{Product?.product_model_name}</td>
                  <td className="py-2 pl-6 border text-left">{Product?.discounted_price}</td>
                  <td className="py-2 pl-6 border text-left">
                    {Product?.shape_?.name}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {Product?.material_?.name}
                  </td>
                  <td className="py-2 pl-6 border text-left">{Product?.frame_width}</td>
                  <td className="py-2 pl-6 border text-left">{Product?.lens_width}</td>
                  <td className="py-2 pl-6 border text-left">{Product?.lens_height}</td>
                  <td className="py-2 pl-6 border text-left">
                    {Product?.product_color_?.name}
                  </td>

                  <td className="py-2 border">
                    <span className="text-sky-600 flex items-center justify-center w-full cursor-pointer">
                      <TbEdit />
                    </span>
                  </td>
                  <td className="py-2 border">
                    <span
                      className="text-orange-600 flex items-center justify-center w-full cursor-pointer"
                      onClick={() => DeleteProductHandler(Product)}
                    >
                      <MdDelete />
                    </span>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailTable;
