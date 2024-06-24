import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateFranchise = () => {
  const CreateFranchise = useMutation({
    mutationFn: async (data) => {
      const res = await api.post("/contact/franchise", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("franchise added successfully");
    },
    onError: (data) => {
      toast.error(error.message);
    },
  });
  return CreateFranchise;
};
export default useCreateFranchise;
