import { useQuery } from "@tanstack/react-query"
import api from "@/api";

const useGetAllDashboard = () => {
  const alltask = useQuery({
    queryKey: ["api/brands/count"],
    queryFn: async () => {
      const res = await api.get('/brands/count');
      return res?.data;
    },
  });
  return alltask;
};

export default useGetAllDashboard;
