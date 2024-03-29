import IconButton from "@/Components/Admin/IconButton";
import PowerType from "@/Components/Admin/PowerType";
import Modal from "@/Components/Dialog/Modal";
import PowerTypesDialogBox from "@/Components/Dialog/PowerTypesDialogBox";
import AdminLayout from "@/Layout/AdminLayout";
import useGetAllPowerType from "@/utils/queries/usePowerType";
import React from "react";
import { useState } from "react";
import { GiPowerRing } from "react-icons/gi";

const PowerTypes = () => {
  const {data , isLoading,isError} = useGetAllPowerType()
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
          {
            data&&data.map((item,index)=>(
               <PowerType key={index} src={item.image} title={item.name} description={item.description} />
            ))
          }
                   </div>
      </div>
    </AdminLayout>
  );
};

export default PowerTypes;
