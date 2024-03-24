import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api";

const useBlogsGetAll = () => {
  const allBlogs = useQuery({
    queryKey: ["api/blogs"],
    queryFn: async () => {
      const res = await axiosInstance.get("/blogs");
      return res?.data;
    },
  });
  return allBlogs;
};

export default useBlogsGetAll;
