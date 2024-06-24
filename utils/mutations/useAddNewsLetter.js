import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useNewsletter = () => {
  const mutate = useMutation({
    mutationKey: ["/newsletter"],
    mutationFn: async (data) => {
      const res = await api.post("newsletter", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Newsletter created successfully ");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useNewsletter;
