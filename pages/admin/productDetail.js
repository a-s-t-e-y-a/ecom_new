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
  const { data, isLoading,refetch } = useGetAllProducts();
  const [logged, setlogged] = useState(false);
  const [Products, setproducts] = useState([]);
  console.log(data)
  console.log(isLoading)
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    if (data) {
      setproducts(data.products);
    }
    refetch();
  }, [router, refetch, data]);
  const NumberOfProducts = (e) => {
    const Numbers = e?.target?.value;
    if (Numbers > 0) {
      const Newarr = data?.filter((Value, index) => index + 1 <= Numbers);
      setproducts(Newarr);
    } else {
      setproducts(data);
    }
  };
  const SearchHandler = (e) => {
    const seacrchValue = e?.target?.value;
    if (seacrchValue !== "" || undefined || null) {
      const Newarry = data?.filter((value) =>
        value?.product_model_name?.includes(seacrchValue)
      );
      setproducts(Newarry);
    } else {
      setproducts(data);
    }
  };
  if(isLoading){
    return <div>Loading ....</div>
  }
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
                onChange={(e) => NumberOfProducts(e)}
              />
              <TextField
                className="outline-none focus:ring-0 w-48  "
                sx={{}}
                color="secondary"
                size="small"
                label="Search..."
                onChange={(e) => SearchHandler(e)}
              />
            </div>
          </div>
          <div className=" w-full mb-3">
            <ProductDetailTable
              data={Products}
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
