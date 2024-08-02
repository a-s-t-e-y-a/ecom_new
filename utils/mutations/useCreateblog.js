import {Imageapi} from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateBlog = () => {
  const mutate = useMutation({
    mutationKey: ["/blogs"],
    mutationFn: async (data) => {
      const res = await Imageapi.post("blogs", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("New blog succesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useCreateBlog;
