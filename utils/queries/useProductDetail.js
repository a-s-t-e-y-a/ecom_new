import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllProducts = () => {
  const data_ = useQuery({
    queryKey: ["api/Products"],
    queryFn: async () => {
      const res = await api.get('/products');
      return res?.data?.data;
    },
  });
  return data_;
};

export default useGetAllProducts;
