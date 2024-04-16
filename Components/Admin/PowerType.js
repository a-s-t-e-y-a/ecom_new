import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";
import Modal from "../Dialog/Modal";

const PowerType = (props) => {
  const { src, title, description, id, mutate } = props;
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});

  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);

  const deletehandler = (itemId) => {
    console.log(itemId);
    mutate(itemId);
    onShowDelete();
  };

  return (
    <div className=" grid grid-cols-4 items-center gap-2 border-2">
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
          src={src}
          className="w-[200px] h-[100px] object-contain rounded-full"
        />
      </div>
      <div className=" col-span-2">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        className=" text-red-500 cursor-pointer"
        onClick={() => deletehandler(id)}
      >
        <DeleteOutlineIcon className="text-base" />
      </button>
    </div>
  );
};

export default PowerType;