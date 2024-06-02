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
import { useMutation } from "@tanstack/react-query";
import DeleteCategory from "@/utils/mutations/useDeleteCatogaries";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";

const Categories = () => {
  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useGetAllCategories();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const Deletehandeler = (val) => {
    onShowDelete();
    setDeletePayload(val);
  };
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const { mutate } = useMutation({
    mutationFn: DeleteCategory,
    onSuccess: () => {
      toast.success("Category Deleted Successfully");
      refetch();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.push("login");
    }
    refetch();
  }, [router, refetch]);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <> Error ....</>;
  }

  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <CategoriesDialogBox onCancel={onHide} refetch={refetch} />
        </Modal>
        <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
          <DeletePoPUPDialog
            Closefunction={onHideDelete}
            Deletefunction={mutate}
            payload={DeletePayload}
          />
        </Modal>
        <div>
          <div onClick={handleOpen} className="ml-4">
            <IconButton label="Add Category" icon={<MdCategory />} />
          </div>
          <div className="mt-10 flex mx-4 items-center gap-5 flex-wrap overflow-scroll scrollbar-hide">
            {!isLoading &&
              categories &&
              categories.map((category, index) => (
                <div
                  key={index}
                  className="border rounded-md shadow-md px-5 py-2 inline-flex flex-col items-center gap-2 bg-gray-100"
                >
                  <img
                    width={100}
                    height={100}
                    src={category?.imageArray}
                    className="w-44 h-auto mix-blend-multiply"
                    alt=""
                  />
                  <div className="flex w-full h-fit items-center justify-between gap-5">
                    <span className="text-base tracking-wide font-semibold text-gray-700">
                      {category.name}
                    </span>
                    <span
                      className="text-sm text-red-500 cursor-pointer"
                      onClick={() => Deletehandeler(category)}
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
