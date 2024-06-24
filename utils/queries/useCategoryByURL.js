import { useQuery } from "@tanstack/react-query";
import api from "@/api";
import toast from "react-hot-toast";

const useCategoryByURL = (slugs, page, category, label) => {
  const categoryData = useQuery({
    queryKey: ["api/categories", slugs, page, category, label],
    queryFn: async () => {
      try {
        const res = await api.get(
          `categories/${slugs}?${category}=${label}?pageSize=15&page=${page}`);
        return res?.data?.data[0];
      } catch (error) {
        toast.error("Error fetching data");
        throw error;
      }
    },
  });
  return categoryData;
};

export default useCategoryByURL;
