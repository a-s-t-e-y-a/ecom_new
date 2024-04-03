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
              data.map((value, indx) => <BlogItem key={indx} value={value} />)}
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default Blog;
