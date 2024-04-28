import api from "@/api";

const UseCreateRefund = (data) => {
  return api.post("/refund", data);
};

export default UseCreateRefund;
