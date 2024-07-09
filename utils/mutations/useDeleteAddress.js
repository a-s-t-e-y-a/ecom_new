import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeleteAddress = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationKey: ["/cart"],
    mutationFn: async (id) => {
      const res = await api.delete(`/payment/address/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('/addresses');
      toast.success("Address deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return mutate;
};

export default useDeleteAddress;
