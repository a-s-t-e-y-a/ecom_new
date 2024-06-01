import IconButton from "@/Components/Admin/IconButton";
import BrandDialogBox from "@/Components/Dialog/BrandDialogBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Modal from "@/Components/Dialog/Modal";
import AdminLayout from "@/Layout/AdminLayout";
import { TbBrandAdonisJs } from "react-icons/tb";
import { useSelector } from "react-redux";
import useGetAllBrands from "@/utils/queries/useBrandsGetAll";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import deleteBrand from "@/utils/mutations/useDeleteBrand";
import { toast } from "react-toastify";
const Brand = () => {
  const { data, refetch } = useGetAllBrands();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const [get, setget] = useState(false);
  const { mutate } = useMutation({
    mutationFn: deleteBrand,
    onSuccess: () => {
      toast("Brand deleted successfully");
      setget(!get);
    },
    onError: (err) => {
      toast(err.message);
    },
  });
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch, get]);
  const deleteHandler = (id) => {
    mutate(id);
  };
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {<BrandDialogBox onCancel={onHide} refetch={setget} token={get} />}
        </Modal>
        <div>
          <div onClick={handleOpen} className="ml-4 mb-5">
            <IconButton label="Add Brand" icon={<TbBrandAdonisJs />} />
          </div>
          <div>
            <table className="w-[1240px]">
              <thead className="w-full">
                <tr className=" flex w-full mx-4 justify-around bg-gray-200 rounded-s-md rounded-e-md py-3">
                  <th className=" font-semibold">Brand Name</th>
                  <th className=" font-semibold">Product Catogaries Name</th>
                  <th className=" font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className=" mx-4 w-full">
                {data &&
                  data.map((val) => (
                    <tr
                      key={val?.products_brand_id}
                      className="flex w-full justify-around py-3"
                    >
                      <td className=" text-center">{val?.brand_name}</td>
                      <td className=" text-center">
                        {val?.categories_id?.name}
                      </td>
                      <td className=" text-center">
                        <button
                          onClick={() => deleteHandler(val?.products_brand_id)}
                        >
                          <DeleteOutlineIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default Brand;
