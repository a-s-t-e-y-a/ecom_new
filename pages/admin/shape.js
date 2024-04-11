import IconButton from "@/Components/Admin/IconButton";
import Modal from "@/Components/Dialog/Modal";
import ShapeDialogBox from "@/Components/Dialog/ShapeDialogBox";
import Loader from "@/Components/Loader";
import AdminLayout from "@/Layout/AdminLayout";
import useGetAllShape from "@/utils/queries/useShapeGetAll";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IoShapesOutline } from "react-icons/io5";
import Image from "next/image";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import DeleteShape from "@/utils/mutations/useDeleteShape";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";

const Shape = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [logged, setlogged] = useState(false);

  // const shapesData = useSelector((state)=> state.shape)
  const { data, isLoading, isError, refetch } = useGetAllShape();
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const [get, setget] = useState(false);
  const { mutate } = useMutation({
    mutationFn: DeleteShape,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      setget(!get);
    },
    onError: (err) => {
      toast.error("Error deleting shape");
    },
  });
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const Deletehandeler = (val) => {
    onShowDelete();
    setDeletePayload(val);
  };
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch, get]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <>Error ...</>;
  }

  return (
    <AdminLayout>
      <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
        {<ShapeDialogBox onCancel={onHide} refetch={setget} token={get} />}
      </Modal>
      <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
        <DeletePoPUPDialog
          Closefunction={onHideDelete}
          Deletefunction={mutate}
          payload={DeletePayload}
        />
      </Modal>
      <div>
        <div onClick={handleOpen}>
          <IconButton label="Add Shape" icon={<IoShapesOutline />} />
        </div>
        <div className="mt-10 flex items-center gap-5 flex-wrap overflow-scroll scrollbar-hide">
          {data &&
            data.map((shape, index) => (
              <div
                key={index}
                className="border rounded-md shadow-md px-5 py-2 inline-flex flex-col items-center gap-2 bg-gray-100"
              >
                <img
                  src={shape?.image || "/path/to/default/image.jpg"}
                  alt="Shape image"
                  width="100"
                  height="100"
                  className="w-44 h-auto mix-blend-multiply"
                />
                <div className="flex items-center gap-5">
                  <span className="text-base tracking-wide font-semibold text-gray-700">
                    {shape?.name}
                  </span>
                  <button
                    onClick={() => Deletehandeler(shape)}
                    className="text-sm text-red-500 cursor-pointer"
                  >
                    <DeleteOutlineIcon className="text-base" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Shape;
