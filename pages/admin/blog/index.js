"use client";
import IconButton from "@/Components/Admin/IconButton";
import BlogItem from "@/Components/Blog/BlogItem";
import CreateBlogDialog from "@/Components/Dialog/CreateBlogDialog";
import Modal from "@/Components/Dialog/Modal";
import AdminLayout from "@/Layout/AdminLayout";
import { IsAuth } from "@/utils/IsAuth";
import useBlogsGetAll from "@/utils/queries/useBlogGetAll";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaBlog } from "react-icons/fa";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useMutation } from "@tanstack/react-query";
import deleteBlogs from "@/utils/mutations/useDeleteBlog";
import { toast } from "react-toastify";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";
import { TbEdit } from "react-icons/tb";

const Blog = () => {
  const router = useRouter();
  const { data, refetch } = useBlogsGetAll();
  const [logged, setlogged] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [Delete, setDelete] = useState(false);
  const [DeletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDelete(false);
  const onShowDelete = () => setDelete(true);
  const [edit,setedit]=useState({})

  const Deletehandeler = (e, val) => {
    e.stopPropagation();
    onShowDelete();
    setDeletePayload(val);
  };
  const onHide = () => setOpen(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch, open]);
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

  const handleRoute = (value) => {
    router.push(`/${value?.url}`);
  };

  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <CreateBlogDialog open={open} setOpen={setOpen} edit={edit}/>
        </Modal>
        <Modal isOpen={Delete} closeModal={onHideDelete} fullWidth={false}>
          <DeletePoPUPDialog
            Closefunction={onHideDelete}
            Deletefunction={mutate}
            payload={DeletePayload}
          />
        </Modal>
        <div>
          <button onClick={() => {handleOpen();setedit({})}} className="mx-2">
            <IconButton label="Add Blog" icon={<FaBlog />} />
          </button>
          <div className="grid grid-cols-4 items-center gap-5 h-full pt-5 overflow-auto scrollbar-hide ">
            {data &&
              data.map((value, indx) => (
                <div
                  key={indx}
                  className=" relative min-h-[400px] max-h-[400px]"
                 
                >
                  <BlogItem value={value}  onClick={() => {
                    handleRoute(value);
                  }} />
                  <button onClick={()=>{setOpen(true);setedit(value)}} className=" absolute right-10 bottom-3 text-blue-500">
                    <TbEdit size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      Deletehandeler(e, value);
                    }}
                    className=" absolute right-2 bottom-3 text-red-500"
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default Blog;
