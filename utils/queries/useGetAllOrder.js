import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllOrder = () => {
  const alltask = useQuery({
    queryKey: ["api/order"],
    queryFn: async () => {
      const res = await api.get(`/orderDetails/user/`);
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllOrder;
