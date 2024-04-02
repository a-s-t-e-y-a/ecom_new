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

const FrameMaterial = () => {
  const router = useRouter();

  const { data, refetch } = useGetAllMaterial();
  const [open, setOpen] = useState(false);
  const [logged, setlogged] = useState(false);

  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch, data]);

  if (logged) {
    return (
        <AdminLayout>
            <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
                { <FrameMaterialDialogBox onCancel={onHide} /> }
            </Modal>
            <div>
                <div onClick={handleOpen}>
                    <IconButton label="Add Frame Material" icon={<CgFramer/>}/>
                </div>
          </div>
      </AdminLayout>
    );
  }
};

export default FrameMaterial;
