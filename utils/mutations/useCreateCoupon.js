import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateCoupon = () => {
  const mutate = useMutation({
    mutationKey: ["api/coupon"],
    mutationFn: async (data) => {
      const res = await api.post(`/coupon`, data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Coupon deleted succesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};
export default useCreateCoupon;
