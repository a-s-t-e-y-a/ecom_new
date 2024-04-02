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
const ProductDetail = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <ProductDetailDialog onCancel={onHide} />
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
          <ProductDetailTable />
        </div>
      </AdminLayout>
    );
  }
};
export default ProductDetail;

//  <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
//           <ProductDetailDialog onCancel={onHide} />
//         </Modal>
//         <div>
//           <div className=" w-[79.5vw]">
//             <button onClick={handleOpen}>
//               <IconButton
//                 label="Add product details"
//                 icon={<MdOutlineLensBlur />}
//               />
//             </button>
//           </div>
//           <div className="mt-2">
//             <div className="flex items-center justify-between px-10">
//               <span className="text-md tracking-wide font-bold">
//                 All Product Detail
//               </span>
//               <div className="flex items-center space-x-5">
//                 <TextField
//                   className="outline-none focus:ring-0 w-24"
//                   sx={{}}
//                   color="warning"
//                   size="small"
//                   label="Show"
//                   type="number"
//                 />

//                 <TextField
//                   className="outline-none focus:ring-0 w-40"
//                   sx={{}}
//                   color="secondary"
//                   size="small"
//                   label="Search..."
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment>
//                         <IconButton>
//                           <BiSearch className="text-gray-500 font-semibold text-sm" />
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="mt-2">
//               <ProductDetailTable />
//             </div>
//           </div>
//         </div>
