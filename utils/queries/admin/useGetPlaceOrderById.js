import api from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetPlacedOrdersById = (id) => {
  const data_ = useQuery({
    queryKey: ["orderdetailsById", id],
    queryFn: async () => {
      const res = await api.get(`/orderdetails/${id}`);
      return res;
    },
  });
  return data_;
};

export default useGetPlacedOrdersById;
