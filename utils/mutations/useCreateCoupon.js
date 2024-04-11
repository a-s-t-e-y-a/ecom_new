import api from "@/api";

const CreateCoupon = (data) => {
  return api.post("/coupon", {
    data: data,
  });
};

export default CreateCoupon;
