import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import DeleteProduct from "@/utils/mutations/useDeletehandler";
import Modal from "../Dialog/Modal";
import DeletePoPUPDialog from "../Dialog/DeletePoPUPDialog";

const ProductDetailTable = ({ data, refetch, open, setedit, opensEdit }) => {
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const [product,setProduct] = useState ({
    
      "product_model_name": "Aviator Classic",
      "product_model_number": "AV-001",
      "capacity": "N/A",
      "use_for": "Sunglasses",
      "dimensions": "140mm x 50mm x 20mm",
      "country_of_origin": "Italy",
      "row_metrial_source_from": "China",
      "show_lens_list": 1,
      "warranty": "1 year manufacturer warranty",
      "product_description": "Stylish aviator sunglasses with polarized lenses and a classic metal frame.",
      "product_price": "99.99",
      "discounted_price": 79,
      "offer": "Buy one, get one 50% off",
      "bought": "true",
      "frame_width": "140mm",
      "temple_length": "135mm",
      "lens_height": "50mm",
      "coupon_code": "SUMMER10",
      "coupon_amount": 10,
      "stokke": 50,
      "product_url": "https://example.com/products/aviator-classic",
      "seo_title": "Aviator Classic Sunglasses",
      "keyword": "sunglasses, aviator, polarized",
      "status": 1,
      "lens_width": "60mm",
      "productBrandId": 1,
      "productCategories": [1, 2],
      "product_color": 1,
      "shape": 2,
      "style": 3,
      "size": 4,
      "material": 5,
      "power_type": 6
    
  })
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
 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('From Data',product);
 }
  return (
    <div className="w-full h-[700px] tracking-wide">
      <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
        <DeletePoPUPDialog
          Closefunction={onHideDelete}
          Deletefunction={Deletes}
          payload={DeletePayload}
        />
      </Modal>
      <table className="w-full ">
        <thead className=" text-xs font-normal text-gray-700 sticky bg-white shadow-lg ng-blue-100 w-full overflow-auto">
          <tr className=" w-full  ">
            <th className="py-2 border flex-1 pl-6 text-left">Edit</th>
            <th className="py-2 border flex-1 pl-6 text-left">Delete</th>
            <th className="py-2 border flex-1 pl-6 text-left">Model No.</th>
            <th className="py-2 border flex-1 pl-6 text-left">Quantity</th>
            <th className="py-2 border flex-1 pl-6 text-left">Model Name </th>
            <th className="py-2 border flex-1 pl-6 text-left">Price</th>
            <th className="py-2 border flex-1 pl-6 text-left">Shape</th>
            <th className="py-2 border flex-1 pl-6 text-left">F Material</th>
            <th className="py-2 border flex-1 pl-6 text-left">F Width</th>
            <th className="py-2 border flex-1 pl-6 text-left">L Width</th>
            <th className="py-2 border flex-1 pl-6 text-left">L Height</th>
            <th className="py-2 border flex-1 pl-6 text-left">Color</th>
          </tr>
        </thead>
        <form onSubmit={handleSubmit}>
        <tbody className="text-xs text-gray-600 text-center  ">
          {data.length > 0
            ? data.map((Product, index) => (
                <tr className="" key={index}>
                  <td className="py-2 border text-left">
                    <span
                      className="text-sky-600 flex items-center justify-center w-full cursor-pointer"
                      onClick={() => {
                        setedit(Product);
                        opensEdit(true);
                      }}
                    >
                      <TbEdit />
                    </span>
                  </td>
                  <td className="py-2 border text-left">
                    <span
                      className="text-orange-600 flex items-center justify-center w-full cursor-pointer"
                      onClick={() => DeleteProductHandler(Product)}
                    >
                      <MdDelete />
                    </span>
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.product_model_number}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.stokke}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.product_model_name}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.discounted_price}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.shape_?.name}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.material_?.name}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.frame_width}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.lens_width}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.lens_height}
                  </td>
                  <td className="py-2 pl-6 border text-left">
                    {product?.product_color_?.name}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
        </form>
      </table>
    </div>
  );
};

export default ProductDetailTable;
