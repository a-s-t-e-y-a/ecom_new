import {Imageapi} from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreatebanner = () => {
  const createContact = useMutation({
    mutationFn: async (data) => {
      const res = await Imageapi.post("/banner", data);
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
