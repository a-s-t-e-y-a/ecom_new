import ProductDetailTable from "@/Components/Admin/ProductDetailTable";
import ProductDetailDialog from "@/Components/Dialog/productDetails";
import AdminLayout from "@/Layout/AdminLayout";
import IconButton from "@/Components/Admin/IconButton";
import Modal from "@/Components/Dialog/Modal";
import { TextField } from "@mui/material";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import useGetAllProducts from "@/utils/queries/admin/UseProductGetAll";
import Pagination from "@/Components/Pagination/Pagination";

const ProductDetail = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const router = useRouter();
  const { data, isLoading, refetch } = useGetAllProducts(page);
  const [logged, setLogged] = useState(false);
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState({});

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setLogged(true);
    } else {
      router.replace("login");
    }
    if (data) {
      setProducts(data.products);
    }
    refetch();
  }, [router, refetch, data]);

  const numberOfProducts = (e) => {
    const numbers = e.target.value;
    if (numbers > 0) {
      const newArr = data.products.filter((value, index) => index + 1 <= numbers);
      setProducts(newArr);
    } else {
      setProducts(data.products);
    }
  };

  const searchHandler = (e) => {
    const searchValue = e.target.value;
    if (searchValue !== "" || undefined || null) {
      const newArr = data.products.filter((value) =>
        value.product_model_name.includes(searchValue)
      );
      setProducts(newArr);
    } else {
      setProducts(data.products);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <ProductDetailDialog onCancel={onHide} refetch={refetch} editValue={edit} />
        </Modal>
        <div className="w-full px-4">
          <button
            onClick={() => {
              handleOpen();
              setEdit({});
            }}
            className="mb-3"
          >
            <IconButton label="Add product details" />
          </button>
          <div className="flex justify-between mb-3">
            <h2 className="font-bold text-lg">All Product Details</h2>
            <div className="flex gap-2">
              <TextField
                className="outline-none focus:ring-0 w-24"
                color="warning"
                size="small"
                label="Show"
                type="number"
                onChange={(e) => numberOfProducts(e)}
              />
              <TextField
                className="outline-none focus:ring-0 w-48"
                color="secondary"
                size="small"
                label="Search..."
                onChange={(e) => searchHandler(e)}
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <div className="w-full">
              {isLoading && <p>Loading...</p>}
              <ProductDetailTable
                data={products}
                refetch={refetch}
                open={handleOpen}
                setEdit={setEdit}
                opensEdit={setOpen}
              />
              <div className="mt-4">
                <Pagination
                  currentPage={page}
                  totalPages={data?.totalPages || 1}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  } else {
    return null;
  }
};

export default ProductDetail;
