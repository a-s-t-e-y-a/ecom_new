import IconButton from "@/Components/Admin/IconButton";
import BannerManagerDialogBox from "@/Components/Dialog/BannerManagerDialogBox";
import Modal from "@/Components/Dialog/Modal";
import AdminLayout from "@/Layout/AdminLayout";
import { GiKnightBanner } from "react-icons/gi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
const BannagerManager = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.push("login");
    }
  }, [router]);
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {<BannerManagerDialogBox onCancel={onHide} />}
        </Modal>
        <div>
          <div onClick={handleOpen}>
            <IconButton label="Bannager Manager" icon={<GiKnightBanner />} />
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap w-full"></div>
        </div>
      </AdminLayout>
    );
  }
};

export default BannagerManager;
