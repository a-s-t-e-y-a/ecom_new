import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useRegister = () => {
  const mutate = useMutation({
    mutationKey: ["api/register"],
    mutationFn: async (data) => {
      const res = await api.post("/signup", data);
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("User registered succesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};
export default useRegister;
