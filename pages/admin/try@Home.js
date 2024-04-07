import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { HiOutlineHome } from "react-icons/hi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "@/Components/Dialog/Modal";
import TryHome from "@/Components/Dialog/try@homeDialog";
const TryAtHome = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
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
          <TryHome onCancel={onHide} />
        </Modal>

        <div onClick={handleOpen} className=" mb-4">
          <IconButton label="Try@Home" icon={<HiOutlineHome />} />
        </div>
        <div>
          <QuillEditor />
        </div>
      </AdminLayout>
    );
  }
};

export default TryAtHome;
