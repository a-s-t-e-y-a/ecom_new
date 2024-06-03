import { useQuery } from "@tanstack/react-query";
import api from "@/api";
import { toast } from "react-toastify";

const useCategoryByURL = (slugs, page) => {
  const categoryData = useQuery({
    queryKey: ["api/categories", slugs, page],
    queryFn: async () => {
      try {
        const res = await api.get(`categories/${slugs}?pageSize=15&page=${page}`);
        return res?.data?.data[0]?.products;
      } catch (error) {
        toast.error("Error fetching data");
        throw error;
      }
    },
  });
  return categoryData;
};

export default useCategoryByURL;
