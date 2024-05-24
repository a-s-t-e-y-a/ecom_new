import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCategoryByURL = (url, page) => {
    const GetCategoryByUrl = useMutation({
        mutationFn: async () => {
            const res = await api.get(`categories/${slugs}?pageSize=15&page=${page}`);
            console.log("function is running")
            console.log(res, "res");
      //   return res?.data;
    },
    onSuccess: (data) => {
      toast.success("Contact added successfully");
    },
    onError: (data) => {
      toast.error(error.message);
    },
  });
  return GetCategoryByUrl;
};

export default useCategoryByURL;
