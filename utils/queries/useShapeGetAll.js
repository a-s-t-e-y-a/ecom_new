import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllShape = () => {
  const alltask = useQuery({
    queryKey: ["api/shape"],
    queryFn: async () => {
      const res = await api.get('/shape');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllShape;
