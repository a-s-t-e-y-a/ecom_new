import React,{useState} from "react";
import { TbEdit } from "react-icons/tb";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Modal from "../Dialog/Modal";
import TryHome from "../Dialog/try@homeDialog";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";
const TryAtHomeItem = (props) => {
    const {services, id, mutate } = props;
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const [edit, setedit] = useState({});
  const [open, setOpen] = useState(false);


  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const onHide = () => setOpen(false);
  const deletehandler = (itemId) => {
    mutate(itemId);
    onShowDelete();
  };
  return (
    <div className=" grid grid-cols-4 items-center gap-2 border-2">
      <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <TryHome open={open} setOpen={setOpen} edit={edit} onCancel={onHide} />
        </Modal>
      <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
        <DeletePoPUPDialog
          Closefunction={onHideDelete}
          Deletefunction={mutate}
          payload={DeletePayload}
        />
      </Modal>
      <div className=" col-span-2">
        <p className="font-semibold">Eye test at home</p>
      </div>
      <div className="flex flex-row  items-center justify-around">
      <button
        className=" text-red-500 cursor-pointer"
        onClick={() => deletehandler(id)}
      >
      <DeleteOutlineIcon className="text-base" size={20} />
      </button>
      </div>
    </div>
  );
};

export default TryAtHomeItem;
