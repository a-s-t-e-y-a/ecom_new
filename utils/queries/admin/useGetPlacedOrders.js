import api from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetPlacedOrders = () => {
  const data_ = useQuery({
    queryKey: ["placedOrders"],
    queryFn: async () => {
      const res = await api.get("/orderdetails");
      return res?.data?.data;
    },
  });
  return data_;
};

export default useGetPlacedOrders;
