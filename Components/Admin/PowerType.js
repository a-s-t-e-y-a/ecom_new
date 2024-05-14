import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";
import Modal from "../Dialog/Modal";
import { TbEdit } from "react-icons/tb";
import LensFeatureDialogBox from "@/Components/Dialog/LensFeatureDialogBox";

const PowerType = (props) => {
  const { data, mutate, setEdit } = props;
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const [edit, setedit] = useState({});
  const [open, setOpen] = useState(false);

  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const onHide = () => setOpen(false);
  const deletehandler = (itemId) => {
    console.log(itemId);
    mutate(itemId);
    onShowDelete();
  };

  return (
    <div className=" grid grid-cols-4 items-center gap-2 border-2">
      <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
        <LensFeatureDialogBox
          open={open}
          setOpen={setOpen}
          edit={edit}
          onCancel={onHide}
        />
      </Modal>
      <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
        <DeletePoPUPDialog
          Closefunction={onHideDelete}
          Deletefunction={mutate}
          payload={DeletePayload}
        />
      </Modal>
      <div className="">
        <img
          alt=""
          src={data?.src}
          className="w-[200px] h-[100px] object-contain rounded-full"
        />
      </div>
      <div className=" col-span-2">
        <p className="font-semibold">{data?.title}</p>
        <p className="text-sm text-gray-500">{data?.description}</p>
      </div>
      <div className="flex flex-row  items-center justify-around">
        <button
          className=" text-blue-500 cursor-pointer"
          onClick={() => {
            console.log(data)
            setOpen(true);
            setedit(data);
          }}
        >
          <TbEdit className="text-base" size={20} />
        </button>
        <button
          className=" text-red-500 cursor-pointer"
          onClick={() => deletehandler(data?.id)}
        >
          <DeleteOutlineIcon className="text-base" size={20} />
        </button>
      </div>
    </div>
  );
};

export default PowerType;
