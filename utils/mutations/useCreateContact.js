import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreateContact = () => {
  const createContact = useMutation({
    mutationFn: async (data) => {
      const res = await api.post("/contact", data);
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
export default useCreateContact;
