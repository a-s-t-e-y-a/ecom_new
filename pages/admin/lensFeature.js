import IconButton from "@/components/Admin/IconButton";
import PowerType from "@/components/Admin/PowerType";
import Modal from "@/components/Dialog/Modal";
import LensFeatureDialogBox from "@/components/Dialog/LensFeatureDialogBox";
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
      <div>
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
