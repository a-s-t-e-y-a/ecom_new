import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useAddWishlist = () => {
  const mutate = useMutation({
    mutationKey: ["Addwhishlist"],
    mutationFn: async (id) => {
      const res = await api.post("/whishlist", id);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Add to Wishlist");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useAddWishlist;
