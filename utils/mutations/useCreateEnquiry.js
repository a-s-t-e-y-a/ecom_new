import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const useCreateEnquiry = () => {
  const mutate = useMutation({
    mutationKey: ["/enquiry"],
    mutationFn: async (data) => {
      const res = await api.post("/try_home/form", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Your enquiry has submitted successfully. we'll connect to you soon!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useCreateEnquiry;
