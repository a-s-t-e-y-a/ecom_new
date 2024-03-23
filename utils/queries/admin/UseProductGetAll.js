import { useQuery } from "@tanstack/react-query"
import axiosInstance from "@/api";

const useGetAllProducts = (page) => {
  const alltask = useQuery({
    queryKey: ["api/products",page],
    queryFn: async () => {
      const res = await axiosInstance.get(`/products?page=${page}`);
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllProducts;
