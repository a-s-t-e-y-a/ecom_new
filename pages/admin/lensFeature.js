import IconButton from "@/Components/Admin/IconButton";
import PowerType from "@/Components/Admin/PowerType";
import Modal from "@/Components/Dialog/Modal";
import LensFeatureDialogBox from "@/Components/Dialog/LensFeatureDialogBox";
import AdminLayout from "@/Layout/AdminLayout";
import { GiMicroscopeLens } from "react-icons/gi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { FcAbout } from "react-icons/fc";
const LensFeature = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.push("login");
    }
  }, [router]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {<LensFeatureDialogBox onCancel={onHide} />}
        </Modal>
        <div>
          <div onClick={handleOpen}>
            <IconButton label="Add Lens Features" icon={<GiMicroscopeLens />} />
          </div>
          <div className="mt-10 grid grid-cols-2 items-center gap-5 w-full">
            <PowerType
              src="/1 (1).jpeg"
              title="Single Vision/Powered Eyeglasses"
              description="For distance or near vision"
            />
            <PowerType
              src="/1 (1).jpeg"
              title="Single Vision/Powered Eyeglasses"
              description="For distance or near vision"
            />
            <PowerType
              src="/1 (1).jpeg"
              title="Single Vision/Powered Eyeglasses"
              description="For distance or near vision"
            />
            <PowerType
              src="/1 (1).jpeg"
              title="Single Vision/Powered Eyeglasses"
              description="For distance or near vision"
            />
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default LensFeature;
