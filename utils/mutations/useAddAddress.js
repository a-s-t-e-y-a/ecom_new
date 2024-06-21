import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGetHash from "./useAddToHash";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addAddress } from "@/Slices/addressSlice";


const useAddToAddress = (TotalAmount) => {
  const dispatch = useDispatch()
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
      dispatch(addAddress(data))
      hash({amount:TotalAmount, address: data})
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useAddToAddress;
