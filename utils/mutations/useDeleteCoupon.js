import api from "@/api";

const useDeleteCoupon = (id) => {
  return api.delete(`/coupon/${id}`);
};
export default useDeleteCoupon;
