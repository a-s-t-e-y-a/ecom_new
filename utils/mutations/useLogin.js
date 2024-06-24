import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useLogin = () => {
  const mutate = useMutation({
    mutationKey: ["/login"],
    mutationFn: async (data) => {
      const res = await api.post("auth/login", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("User Login succesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useLogin;
