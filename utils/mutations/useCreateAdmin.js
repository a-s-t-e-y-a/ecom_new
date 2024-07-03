import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useAdminLogin = () => {
  const mutate = useMutation({
    mutationKey: ["/login"],
    mutationFn: async (data) => {
      const res = await api.post("admin/login", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Admin Login succesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useAdminLogin;
