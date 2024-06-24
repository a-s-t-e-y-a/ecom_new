import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeleteCart = (index) => {
  const mutate = useMutation({
    mutationKey: ["/deleteCart"],
    mutationFn: async (data) => {
      const res = await api.patch(`/session/${index}`, data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Session delete storage");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useDeleteCart;
