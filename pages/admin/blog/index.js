"use client";
import IconButton from "@/Components/Admin/IconButton";
import BlogItem from "@/Components/Blog/BlogItem";
import CreateBlogDialog from "@/Components/Dialog/CreateBlogDialog";
import Modal from "@/Components/Dialog/Modal";
import AdminLayout from "@/Layout/AdminLayout";
import { IsAuth } from "@/utils/IsAuth";
import useBlogsGetAll from "@/utils/queries/useBlogGetAll";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBlog } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import deleteBlogs from "@/utils/mutations/useDeleteBlog";
import toast from "react-hot-toast";
import DeletePoPUPDialog from "@/Components/Dialog/DeletePoPUPDialog";

const Blog = () => {
  const router = useRouter();
  const { data, refetch } = useBlogsGetAll();
  const [logged, setlogged] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletePayload, setDeletePayload] = useState({});
  const onHideDelete = () => setDeleteOpen(false);
  const onShowDelete = () => setDeleteOpen(true);
  const [edit, setEdit] = useState({});

  const deleteHandler = (e, val) => {
    e.stopPropagation();
    onShowDelete();
    setDeletePayload(val);
  };
  const onHide = () => setOpen(!open);

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
      toast.success("Blog deleted successfully");
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
          <CreateBlogDialog closeModal={onHide} edit={edit} refetch={refetch} />
        </Modal>
        <Modal isOpen={deleteOpen} closeModal={onHideDelete} fullWidth={false}>
          <DeletePoPUPDialog
            Closefunction={onHideDelete}
            Deletefunction={mutate}
            payload={deletePayload}
          />
        </Modal>
        <div>
          <button
            onClick={() => {
              handleOpen();
              setEdit(null);
            }}
            className="ml-4 mx-2"
          >
            <IconButton label="Add Blog" icon={<FaBlog />} />
          </button>
          <div className="mx-4 relative grid grid-cols-4 items-center gap-5 h-full pt-5 overflow-auto scrollbar-hide">
            {data &&
              data.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col relative min-h-[470px] max-h-[470px]"
                >
                  <BlogItem
                    value={value}
                    onClick={() => {
                      handleRoute(value);
                    }}
                    showActions
                  />
                </div>
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
  return null;
};

export default Blog;
