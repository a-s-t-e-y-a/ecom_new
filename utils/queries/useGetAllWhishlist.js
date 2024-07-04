import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api";
import api from "@/api";

const useGetAllWhishlist = () => {
  const allBlogs = useQuery({
    queryKey: ["api/whishlist"],
    queryFn: async () => {
      const res = await api.get("/whishlist");
      return res?.data;
    },
  });
  return allBlogs;
};

export default useGetAllWhishlist;
