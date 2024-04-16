import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import AddIcon from "@mui/icons-material/Add";

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
  const [value, setValue] = useState("");
  
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
          <QuillEditor value={value} onChange={(val)=>setValue(val)}/>
          <button className=" bg-blue-500 rounded shadow  w-40 text-center text-white my-4" onClick={()=>console.log(value)}>
            ADD <AddIcon />
          </button>
        </div>
      </AdminLayout>
    );
  }
};

export default TryAtHome;
