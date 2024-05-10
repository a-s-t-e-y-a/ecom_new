import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateBlogDialog from "@/Components/Dialog/CreateBlogDialog";
import Modal from "@/Components/Dialog/Modal";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";
import { useMutation } from "@tanstack/react-query";
import deleteBlogs from "@/utils/mutations/useDeleteBlog";

const BlogItem = ({ value, showActions }) => {
  const [open, setOpen] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const [edit, setedit] = useState({});
  const onHide = () => setOpen(false);
  const Deletehandeler = (e, val) => {
    e.stopPropagation();
    onShowDelete();
    setDeletePayload(val);
  };
  const { mutate } = useMutation({
    mutationFn: deleteBlogs,
    onSuccess: () => {
      toast.success("Blog deleted Successfully");
      refetch();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return (
    <div className="">
      <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
        <CreateBlogDialog open={open} setOpen={setOpen} edit={edit} />
      </Modal>
      <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
        <DeletePoPUPDialog
          Closefunction={onHideDelete}
          Deletefunction={mutate}
          payload={DeletePayload}
        />
      </Modal>
      <div className="shadow-md  rounded-lg h-[450px] border-2 max-w-96">
        <div className="">
          <img
            className="rounded object-cover h-[300px] rounded-t-md"
            src={value?.image}
            alt="content"
          />
        </div>
        <div className="mt-6 p-3">
          <h2 className="text-lg text-gray-900 font-bold mb-3 ">
            {value?.heading}
          </h2>
          <div className="flex flex-row justify-between w-full">
            <h3 className="text-gray-500 text-xs  mb-1  tracking-wide">
              {value?.created_on}
            </h3>

            {showActions && (
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setOpen(true);
                    setedit(value);
                  }}
                  className=" text-blue-500"
                >
                  <TbEdit size={20} />
                </button>
                <button
                  onClick={(e) => {
                    Deletehandeler(e, value);
                  }}
                  className=" text-red-500"
                >
                  <DeleteOutlineIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
