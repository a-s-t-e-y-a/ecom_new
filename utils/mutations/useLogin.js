import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const useLogin = () => {
  const router = useRouter()
  const mutate = useMutation({
    mutationKey: ["/login"],
    mutationFn: async (data) => {
      const res = await api.post("auth/login", data);
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data.data, 'data');
      toast.success("User Login succesfully");
      router.push("/")
      localStorage.setItem(
        "user_info",
        JSON.stringify(data?.data?.token)
      );
      localStorage.setItem(
        "user_data",
        JSON.stringify(data?.data?.info_user)
      );
    },
    onError: (err) => {
      toast.error("Wrong username or password");
    },
  });
  return mutate;
};

export default useLogin;
