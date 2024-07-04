import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useAddUserAddress = (TotalAmount) => {

  const mutate = useMutation({
    mutationKey: ["/addtoaddress"],
    mutationFn: async (data) => {
      const res = await api.post("/payment/address", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Address add sucesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useAddUserAddress;
