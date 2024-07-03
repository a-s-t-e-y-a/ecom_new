import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllAddress = (userId) => {
  const alltask = useQuery({
    queryKey: ["api/Address"],
    queryFn: async () => {
      const res = await api.get(`/payment/address/${userId}`);
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllAddress;
