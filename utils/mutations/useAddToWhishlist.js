import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useAddWhishlist = () => {
  const mutate = useMutation({
    mutationKey: ["/whishlist"],
    mutationFn: async (data) => {
      const res = await api.post("/whishlist", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Whishlist added succesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useAddWhishlist;
