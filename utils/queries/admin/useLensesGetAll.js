import { useQuery } from "@tanstack/react-query"
import api from "@/api";

const useGetAllLenses = () => {
  const alltask = useQuery({
    queryKey: ["api/lenses"],
    queryFn: async () => {
      const res = await api.get('/lenses');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllLenses;
