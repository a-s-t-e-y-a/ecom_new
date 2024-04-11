import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useDeleteCoupon = () => {
  const mutate = useMutation({
    mutationKey: ["api/coupon"],
    mutationFn: async (id) => {
      const res = await api.delete(`/coupon/${id}`);
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
export default useDeleteCoupon;
