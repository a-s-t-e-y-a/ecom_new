import api, { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useDeleteBanner = () => {
  const deleteBanner = useMutation({
    mutationKey: ["api/banner"],
    mutationFn: async (id) => {
      api.delete(`/banner/${id}`);
    },
    onSuccess: () => {
      toast.success("Banner deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return deleteBanner;
};

export default useDeleteBanner;
