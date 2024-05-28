import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreatebanner = () => {
  const createContact = useMutation({
    mutationFn: async (data) => {
      const res = await api.post("/banner", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Contact added successfully");
    },
    onError: (data) => {
      toast.error(error.message);
    },
  });
  return createContact;
};

export default useCreatebanner;
