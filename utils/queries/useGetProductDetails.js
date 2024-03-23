import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetProductDetail = (id) => {

  const data_ = useQuery({
    queryKey: ["api/productDetail"],
    queryFn: async () => {
      const res = await api.get(`/products/${id}`);
      return res?.data;
    },
  });
  return data_;
};

export default useGetProductDetail;
