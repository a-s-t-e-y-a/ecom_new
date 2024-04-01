import api from "@/api";
import IconButton from "@/Components/Admin/IconButton";
import CategoriesDialogBox from "@/Components/Dialog/CategoriesDialogBox";
import Modal from "@/Components/Dialog/Modal";
import Loader from "@/Components/Loader";
import AdminLayout from "@/Layout/AdminLayout";
import useGetAllCategories from "@/utils/queries/useCategoriesGetAll";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdCategory } from "react-icons/md";
import { toast } from "react-toastify";
import Image from "next/image";
import { IsAuth } from "@/utils/IsAuth";

const Categories = () => {
  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useGetAllCategories();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.push("login");
    }
  }, [router]);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <> Error ....</>;
  }
  const handleDelete = async (data) => {
    try {
      const response = await api.delete(
        `/categories/${data?.products_categories_id}`
      );
      if (response) {
        refetch();
      }
      toast.success(response.data.message); // Use toast.success for success messages
    } catch (error) {
      toast.error(error); // Display error message if deletion fails
    }
  };
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <CategoriesDialogBox onCancel={onHide} setOpen={setOpen} />
        </Modal>
        <div>
          <div onClick={handleOpen}>
            <IconButton label="Add Category" icon={<MdCategory />} />
          </div>
          <div className="mt-10 flex items-center gap-5 flex-wrap overflow-scroll scrollbar-hide">
            {!isLoading &&
              categories &&
              categories.map((category, index) => (
                <div
                  key={index}
                  className="border rounded-md shadow-md px-5 py-2 inline-flex flex-col items-center gap-2 bg-gray-100"
                >
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    src={category.image}
                    className="w-44 h-auto mix-blend-multiply"
                  />
                  <div className="flex w-full h-fit items-center justify-between gap-5">
                    <span className="text-base tracking-wide font-semibold text-gray-700">
                      {category.name}
                    </span>
                    <span
                      className="text-sm text-red-500 cursor-pointer"
                      onClick={() => handleDelete(category)}
                    >
                      <DeleteOutlineIcon className="text-base" />
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default Categories;
