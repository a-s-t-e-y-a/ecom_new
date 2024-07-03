import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllOrder = (id) => {
  const alltask = useQuery({
    queryKey: ["api/order"],
    queryFn: async () => {
      const res = await api.get(`/orderDetails/user/${id}`);
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllOrder;
