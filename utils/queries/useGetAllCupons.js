import api from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllCoupon = () => {
  const alltask = useQuery({
    queryKey: ["api/copuons"],
    queryFn: async () => {
      const res = await api.get("/coupon");
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllCoupon;
