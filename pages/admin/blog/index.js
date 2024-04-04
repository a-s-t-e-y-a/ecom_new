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

const Blog = () => {
  const router = useRouter();
  const { data, refetch } = useBlogsGetAll();
  const [logged, setlogged] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const onHide = () => setOpen(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch]);
  const { mutate } = useMutation({
    mutationFn: deleteBlogs,
    onSuccess: () => {
      refetch();
      toast("Blog deleted Successfully");
    },
    onError: (err) => {
      toast(err.message);
    },
  });
  const DeleteBlogHandler = (id) => {
    mutate(id);
  };
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          <CreateBlogDialog open={open} setOpen={setOpen} />
        </Modal>
        <div>
          <button onClick={() => handleOpen()}>
            <IconButton label="Add Blog" icon={<FaBlog />} />
          </button>
          <div className="pt-5 grid grid-cols-3 items-center gap-5  h-[900px] overflow-auto scrollbar-hide ">
            {data &&
              data.map((value, indx) => (
                <div key={indx} className=" relative">
                  <BlogItem value={value} />
                  <button
                    onClick={() => {
                      DeleteBlogHandler(value?.id);
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
