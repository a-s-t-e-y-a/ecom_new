import api from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetPlacedOrdersById = (id) => {
  console.log(id);
  const data_ = useQuery({
    queryKey: ["orderdetailsById", id],
    queryFn: async () => {
      const res = await api.get(`/orderdetails/user/${id}`);
      console.log(res, 'res');
      return res;
    },
  });
  return data_;
};

export default useGetPlacedOrdersById;
