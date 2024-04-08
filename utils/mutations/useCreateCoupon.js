import api from "@/api";

const CreateCoupon = (data) => {
  return api.post("/brands", {
    data: data,
  });
};

export default CreateCoupon;
