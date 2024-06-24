import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateFranchise = () => {
  const mutate = useMutation({
    mutationKey: ["franchise"],
    mutationFn: async (data) => {
      const res = await api.post(`franchise/form`, data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Your franchise request has been submitted. We'll connect you soon!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};
export default useCreateFranchise;
