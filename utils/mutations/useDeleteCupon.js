import api from "@/api";
const DeleteCoupon = (id) => {
  return api.delete(`/coupon/${id}`);
};
export default DeleteCoupon;
