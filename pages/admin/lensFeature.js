import IconButton from "@/Components/Admin/IconButton";
import PowerType from "@/Components/Admin/PowerType";
import Modal from "@/Components/Dialog/Modal";
import LensFeatureDialogBox from "@/Components/Dialog/LensFeatureDialogBox";
import AdminLayout from "@/Layout/AdminLayout";
import React from "react";
import { useState } from "react";
import { GiMicroscopeLens } from "react-icons/gi";

const LensFeature = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  return (
    <AdminLayout>
      <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
        {<LensFeatureDialogBox onCancel={onHide} />}
      </Modal>
      <div className="px-10">
        <div onClick={handleOpen}>
          <IconButton label="Add Lens Features" icon={<GiMicroscopeLens />} />
        </div>
        <div className="mt-10 grid grid-cols-2 items-center gap-5 w-full">
            <PowerType src="/1 (1).jpeg" title="Single Vision/Powered Eyeglasses" description="For distance or near vision" />
            <PowerType src="/1 (1).jpeg" title="Single Vision/Powered Eyeglasses" description="For distance or near vision" />
            <PowerType src="/1 (1).jpeg" title="Single Vision/Powered Eyeglasses" description="For distance or near vision" />
            <PowerType src="/1 (1).jpeg" title="Single Vision/Powered Eyeglasses" description="For distance or near vision" />
        </div>
      </div>
    </AdminLayout>
  );
};

export default LensFeature;
