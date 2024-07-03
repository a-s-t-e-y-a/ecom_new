import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const usePaymentSuccess = () => {
  const mutate = useMutation({
    mutationKey: ["/successPayment"],
    mutationFn: async (data) => {
      const res = await api.post("/payment/success", data);
      return res.data?.order;
    },
    onSuccess: (data) => {
      console.log("success", data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default usePaymentSuccess;
