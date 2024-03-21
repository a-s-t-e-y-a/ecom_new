import { Imageapi, axiosInstance } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreateCategories = () => {
  const createCategories = useMutation({
    mutationFn: async (data) => {
      const res = await Imageapi.post("/categories", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return createCategories;
};

export default useCreateCategories;
