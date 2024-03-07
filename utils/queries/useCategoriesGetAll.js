import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllCategories = () => {
  const alltask = useQuery({
    queryKey: ["api/categories"],
    queryFn: async () => {
      const res = await api.get('/categories');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllCategories;
