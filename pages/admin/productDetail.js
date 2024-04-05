import ProductDetailTable from "@/Components/Admin/ProductDetailTable";
import ProductDetailDialog from "@/Components/Dialog/productDetails";
import AdminLayout from "@/Layout/AdminLayout";
import IconButton from "@/Components/Admin/IconButton";
import Modal from "@/Components/Dialog/Modal";
import { InputAdornment, TextField } from "@mui/material";
import { MdOutlineLensBlur } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import useGetAllProducts from "@/utils/queries/admin/UseProductGetAll";
import Pagination from "@/Components/Pagination/Pagination";
const ProductDetail = () => {
  const [open, setOpen] = useState(false);
  const [page, setpage] = useState(1);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const router = useRouter();
  const { data, refetch } = useGetAllProducts(page);
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch]);
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <ProductDetailDialog onCancel={onHide} refetch={refetch} />
        </Modal>
        <div className="w-full">
          <button onClick={handleOpen} className=" mb-3">
            <IconButton label="Add product details" />
          </button>
          <div className=" flex justify-between mb-3">
            <h2 className=" font-bold text-2xl">Add product</h2>
            <div className=" flex gap-2">
              <TextField
                className="outline-none focus:ring-0 w-24 "
                sx={{}}
                color="warning"
                size="small"
                label="Show"
                type="number"
              />
              <TextField
                className="outline-none focus:ring-0 w-48  "
                sx={{}}
                color="secondary"
                size="small"
                label="Search..."
              />
            </div>
          </div>
          <div className=" w-full mb-3">
            <ProductDetailTable
              data={data}
              refetch={refetch}
              open={handleOpen}
            />
          </div>
        </div>
        <Pagination pages={setpage} curr={page} />
      </AdminLayout>
    );
  }
};
export default ProductDetail;
