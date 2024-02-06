import IconButton from "@/Components/Admin/IconButton";
import PowerType from "@/Components/Admin/PowerType";
import Modal from "@/Components/Dialog/Modal";
import PowerTypesDialogBox from "@/Components/Dialog/PowerTypesDialogBox";
import AdminLayout from "@/Layout/AdminLayout";
import React from "react";
import { useState } from "react";
import { GiPowerRing } from "react-icons/gi";

const PowerTypes = () => {
  // const brandData = useSelector((state)=> state.brand)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  return (
    <AdminLayout>
      <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
        {<PowerTypesDialogBox onCancel={onHide} />}
      </Modal>
      <div>
        <div onClick={handleOpen}>
          <IconButton label="Add Power Types" icon={<GiPowerRing />} />
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

export default PowerTypes;
