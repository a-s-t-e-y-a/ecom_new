import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/api";
import toast from "react-hot-toast";

const useCategoryByURL = (slugs, page, category, label) => {

  const categoryData = useQuery({
    queryKey: ["api/categories", slugs, page],
    queryFn: async () => {
      try {
        const res = await api.get(`categories/${slugs}`);
        return res?.data?.data;
      } catch (error) {
        toast.error("Error fetching data");
        throw error;
      }
    },
  });
  return categoryData;
};

export default useCategoryByURL;
