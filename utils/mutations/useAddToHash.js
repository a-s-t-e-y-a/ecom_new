import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useGetHash = () => {
  const mutate = useMutation({
    mutationKey: ["/getHash"],
    mutationFn: async (data) => {
      const res = await api.post("/payment/hash", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Hash get successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useGetHash;
