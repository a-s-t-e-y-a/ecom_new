import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useAddCartToSession = () => {
  const mutate = useMutation({
    mutationKey: ["/cartSession"],
    mutationFn: async (data) => {
      const res = await api.post("/cart/add-to-session", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Add to cart to session");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useAddCartToSession;
