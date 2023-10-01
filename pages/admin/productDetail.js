import ProductDetailTable from "@/components/Admin/ProductDetailTable";
import AdminLayout from "@/Layout/AdminLayout";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { BiSearch } from "react-icons/bi";


const ProductDetail = () => {
  const router =  useRouter()
  return (
    <AdminLayout>
      <div>
        <div className="flex items-center">
          <button 
            onClick={()=>router.push("/admin/addProductDetail")}
            className="px-4 py-2 text-white bg-sky-400 hover:bg-indigo-500 tracking-wide text-sm rounded-md font-semibold">
            Add Product Detail
          </button>
          <div></div>
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
