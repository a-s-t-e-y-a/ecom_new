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
import TryAtHomeItem from "@/Components/Admin/Try@HomeItem";
import useGetAllTryAtHome from "@/utils/queries/useTryAtHomeGetAll";
const TryAtHome = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const [logged, setlogged] = useState(false);
  const [value, setValue] = useState("");
  const { data, refetch } = useGetAllTryAtHome();
  const items = [
    {
      services:"home Services",
    },
  ];
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router,refetch]);
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <TryHome onCancel={onHide} />
        </Modal>

        <div onClick={handleOpen} className=" mb-4">
          <IconButton label="Try@Home" icon={<HiOutlineHome />} />
        </div>
        <div className=" grid grid-cols-4 gap-4">
            {items &&
              items.map((item, id) => (
                <div key={id}>
                  <TryAtHomeItem
                    services={item.services}
                  />
                </div>
              ))}
          </div>
      </AdminLayout>
    );
  }
};

export default TryAtHome;
