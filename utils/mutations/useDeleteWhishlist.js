import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useDeleteWhishlist = (refetch) => {
  const mutate = useMutation({
    mutationKey: ["/whishlist"],
    mutationFn: async (data) => {
      const res = await api.delete(`whishlist/${data}`);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Whishlist Deleted succesfully");
      refetch()
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useDeleteWhishlist;
