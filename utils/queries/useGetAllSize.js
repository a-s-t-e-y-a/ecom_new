import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllSize = () => {
  const alltask = useQuery({
    queryKey: ["api/size"],
    queryFn: async () => {
      const res = await api.get('/size');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllSize;
