import { useQuery } from "@tanstack/react-query";
import api from "@/api";

const useGetAllAddress = () => {
  const allBlogs = useQuery({
    queryKey: ["AllAddress"],
    queryFn: async () => {
      const res = await api.get("/payment/address");
      return res?.data;
    },
  });
  return allBlogs;
};

export default useGetAllAddress;
