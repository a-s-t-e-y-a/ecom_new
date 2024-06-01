import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api";

const useGetCartSession = () => {
  const allBlogs = useQuery({
    queryKey: ["api/cart"],
    queryFn: async () => {
      const res = await axiosInstance.get("/cart/get-all-session");
      return res?.data;
    },
  });
  return allBlogs;
};

export default useGetCartSession;
