import { useQuery } from "@tanstack/react-query";
import api from "@/api";
import { toast } from "react-toastify";

const useGetAllTypeData = (type, TypeSlug, page) => {
  const categoryData = useQuery({
    queryKey: ["api/categories", type, TypeSlug, page],
    queryFn: async () => {
      try {
        const res = await api.get(`products?${type}=${TypeSlug}`);
        return res?.data?.data;
      } catch (error) {
        toast.error("Error fetching data");
        throw error;
      }
    },
  });
  return categoryData;
};

export default useGetAllTypeData;
