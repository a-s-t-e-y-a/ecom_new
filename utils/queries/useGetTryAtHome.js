import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api";
import api from "@/api";

const useGetTryAtHome = () => {
  const allBlogs = useQuery({
    queryKey: ["api/Try_Home"],
    queryFn: async () => {
      const res = await api.get("try_home");
      return res?.data;
    },
  });
  return allBlogs;
};

export default useGetTryAtHome;
