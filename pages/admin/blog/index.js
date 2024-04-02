import IconButton from "@/Components/Admin/IconButton";
import BlogItem from "@/Components/Blog/BlogItem";
import AdminLayout from "@/Layout/AdminLayout";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaBlog } from "react-icons/fa";

const Blog = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);
  if (logged) {
    return (
      <AdminLayout>
        <div>
          <div>
            <IconButton label="Add Blog" icon={<FaBlog />} />
          </div>
          <div className="pt-5 grid grid-cols-3 items-center gap-5  h-[497px] overflow-auto scrollbar-hide ">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default Blog;
