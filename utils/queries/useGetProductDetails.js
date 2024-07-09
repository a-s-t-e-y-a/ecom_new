import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetProductDetail = (url) => {
  const data_ = useQuery({
    queryKey: ["api/productDetail", url],
    queryFn: async () => {
      const res = await api.get(`/products/${url}`);
      return res?.data[0];
    },
  });
  return data_;
};

export default useGetProductDetail;
