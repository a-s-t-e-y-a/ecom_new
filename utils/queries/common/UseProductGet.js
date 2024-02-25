import { useQuery } from "@tanstack/react-query"
import axiosInstance from "@/api";

const useGetAllProducts = () => {
  const alltask = useQuery({
    queryKey: ["api/products"],
    queryFn: async () => {
      const res = await axiosInstance.get('/products');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllProducts;
