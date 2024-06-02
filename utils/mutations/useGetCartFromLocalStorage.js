import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCartLocalStorage = () => {
  const mutate = useMutation({
    mutationKey: ["/cartLocal"],
    mutationFn: async (data) => {
      const res = await api.post("/cart/get", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("get all datas");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useCartLocalStorage;
