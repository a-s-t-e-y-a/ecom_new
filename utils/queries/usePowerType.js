import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllPowerType = () => {
  const data_ = useQuery({
    queryKey: ["api/PowerType"],
    queryFn: async () => {
      const res = await api.get('/power-type');
      return res?.data?.data;
    },
  });
  return data_;
};

export default useGetAllPowerType;
