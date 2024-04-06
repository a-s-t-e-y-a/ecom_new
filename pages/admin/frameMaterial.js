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
      toast("Frame Delete Successfully");
      setget(!get);
    },
    onError: (err) => {
      toast(err.message);
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
  const deleteHandler = (id) => {
    mutate(id);
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
        <div>
          <div onClick={handleOpen} className=" mb-4">
            <IconButton label="Add Frame Material" icon={<CgFramer />} />
          </div>
          <div className=" grid grid-cols-3 gap-5">
            {data &&
              data.map((val) => (
                <div
                  key={val?.id}
                  className="flex justify-between gap-5 hover:shadow-md bg-gray-200 p-5"
                >
                  <div className=" text-lg">{val?.name}</div>
                  <button
                    onClick={() => deleteHandler(val?.id)}
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
