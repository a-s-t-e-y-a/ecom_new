import IconButton from "@/Components/Admin/IconButton";
import FrameMaterialDialogBox from "@/Components/Dialog/FrameMaterialDialogBox";
import Modal from "@/Components/Dialog/Modal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AdminLayout from "@/Layout/AdminLayout";
import { CgFramer } from "react-icons/cg";
import { useSelector } from "react-redux";
import useGetAllMaterial from "@/utils/queries/useFrameMaterialGetAll";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import query from "@/utils/queryClinet";
import deleteFrame from "@/utils/mutations/useDeleteFrameMaterial";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";

const FrameMaterial = () => {
  const router = useRouter();

  const { data, refetch } = useGetAllMaterial();
  const [open, setOpen] = useState(false);
  const [logged, setlogged] = useState(false);

  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const [get, setget] = useState(false);
  const { mutate } = useMutation({
    mutationFn: deleteFrame,
    onSuccess: () => {
      toast.success("Frame Delete Successfully");
      setget(!get);
    },
    onError: (err) => {
      toast.error(err.message);
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

  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const Deletehandeler = (val) => {
    onShowDelete();
    setDeletePayload(val);
  };
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {
            <FrameMaterialDialogBox
              onCancel={onHide}
              refetch={setget}
              token={get}
            />
          }
        </Modal>
        <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
          <DeletePoPUPDialog
            Closefunction={onHideDelete}
            Deletefunction={mutate}
            payload={DeletePayload}
          />
        </Modal>
        <div>
          <div onClick={handleOpen} className="ml-4 mb-4">
            <IconButton label="Add Frame Material" icon={<CgFramer />} />
          </div>
          <div className="mx-4 grid grid-cols-3 gap-5">
            {data &&
              data.map((val) => (
                <div
                  key={val?.id}
                  className="flex justify-between gap-5 hover:shadow-md bg-gray-200 p-5"
                >
                  <div className=" text-lg">{val?.name}</div>
                  <button
                    onClick={() => Deletehandeler(val)}
                    className=" text-red-500"
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default FrameMaterial;
