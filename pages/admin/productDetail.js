import ProductDetailTable from "@/Components/Admin/ProductDetailTable";
import ProductDetailDialog from "@/Components/Dialog/productDetails";
import AdminLayout from "@/Layout/AdminLayout";
import IconButton from "@/Components/Admin/IconButton";
import Modal from "@/Components/Dialog/Modal";
import {  InputAdornment, TextField } from "@mui/material";
import { MdOutlineLensBlur } from "react-icons/md";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";


const ProductDetail = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  return (
    <AdminLayout>
       <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
        {<ProductDetailDialog onCancel={onHide} />}
      </Modal>
      <div>
         <div>
          <span onClick={handleOpen}>
            <IconButton label="Add product details" icon={<MdOutlineLensBlur />} />
          </span>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <span className="text-md tracking-wide font-bold">
              All Product Detail
            </span>
            <div className="flex items-center space-x-5">
                <TextField
                    className="outline-none focus:ring-0 w-24"
                    sx={{}}
                    color="warning"
                    size="small"
                    label="Show"
                    type="number"
                  />
            
              <TextField
                className="outline-none focus:ring-0 w-40"
                sx={{}}
                color="secondary"
                size="small"
                label="Search..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <BiSearch className="text-gray-500 font-semibold text-sm" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            
            </div>
          </div>
          <div className="mt-2">
            <ProductDetailTable />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProductDetail;
