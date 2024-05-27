import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetProductDetail = (id, extra) => {
  const data_ = useQuery({
    queryKey: ["api/productDetail"],
    queryFn: async () => {
      console.log(extra)
      const res = await api.get(`/products/${id}?p_id=${extra}`);
      return res?.data[0];
    },
  });
  return data_;
};

export default useGetProductDetail;
