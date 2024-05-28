import React, { useEffect, useState } from "react";
import Modal from "../Dialog/Modal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeletePoPUPDialog from "../Dialog/DeletePoPUPDialog";
import useDeleteBanner from "@/utils/mutations/useDeleteBanner";

const BannerCard = ({ banner, setget, get, refetch }) => {
  const [open, setOpen] = useState(false);
  const [Delete, setDelete] = useState(false);

  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  
  const {mutate} = useDeleteBanner()

  const Deletehandeler = (val) => {
    onShowDelete();
    setDeletePayload(val);
  };

  const handleDelete = () => {
    mutate(DeletePayload, {
      onSuccess: () => {
        setget(!get);
        onHideDelete();
        refetch();
      }
    });
  };

  return (
    <>
    <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
        <DeletePoPUPDialog
          Closefunction={onHideDelete}
          Deletefunction={mutate}
          payload={DeletePayload}
        />
      </Modal>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a className="relative">
          <img
            className="rounded-t-lg h-[230px] w-[280px]"
            src={banner?.image}
            alt=""
          />
          <span className="absolute top-0 right-0 flex justify-center items-center gap-2 p-2 backdrop-opacity-10 backdrop-invert bg-white/15 rounded-full" onClick={() => Deletehandeler(banner)}>
            <button className=" text-red-500 cursor-pointer" onClick={()=>Deletehandeler(banner)}>
              <DeleteOutlineIcon className="text-base" />
            </button>
          </span>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {banner?.categories_id?.name}
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerCard;
