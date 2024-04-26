import api from "@/api";
import { toast } from "react-toastify";

const useCreateGuideToBuy = () => {
  const mutate = useMutation({
    mutationKey: ["api/guideToBuy"],
    mutationFn: async (data) => {
      const res = await api.post(`/guideToBuy`, data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Guide To Buy Created Successfully");
    },
    onError: (error) => {
      toast.error(error?.message || "Guide To Buy Creation Failed");
    },
  });
  return { mutate };
};

export default useCreateGuideToBuy;
