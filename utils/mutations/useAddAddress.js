import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGetHash from "./useAddToHash";
import Cookies from "js-cookie";

const useAddToAddress = (TotalAmount) => {
  const {mutate:hash} = useGetHash()
  const mutate = useMutation({
    mutationKey: ["/addtoaddress"],
    mutationFn: async (data) => {
      const res = await api.post("/payment/address", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Address add sucesfully");
      Cookies.set("address", data?.id);
      hash({amount:TotalAmount})
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useAddToAddress;
