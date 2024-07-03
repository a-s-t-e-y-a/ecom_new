import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useTryHome = () => {
  const mutate = useMutation({
    mutationKey: ["/try_home"],
    mutationFn: async (data) => {
      const res = await api.post("try_home", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Services added successfully ");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useTryHome;
