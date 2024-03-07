import { useQuery } from "@tanstack/react-query"
import api from "@/api";

const useGetAllMaterial = () => {
  const data_ = useQuery({
    queryKey: ["api/Material"],
    queryFn: async () => {
      const res = await api.get('/material');
      return res?.data?.data;
    },
  });
  return data_;
};

export default useGetAllMaterial;
