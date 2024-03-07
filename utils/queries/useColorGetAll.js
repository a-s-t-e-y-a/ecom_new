import { useQuery } from "@tanstack/react-query"
import api from "@/api";

const useGetAllColor = () => {
  const data_ = useQuery({
    queryKey: ["api/Color"],
    queryFn: async () => {
      const res = await api.get('/color');
      return res?.data?.data;
    },
  });
  return data_;
};

export default useGetAllColor;
