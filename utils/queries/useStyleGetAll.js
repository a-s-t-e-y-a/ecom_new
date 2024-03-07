import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllStyle = () => {
  const alltask = useQuery({
    queryKey: ["api/style"],
    queryFn: async () => {
      const res = await api.get('/style');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllStyle;
