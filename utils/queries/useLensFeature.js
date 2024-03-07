import api from "@/api";
import { useQuery } from "@tanstack/react-query"

const useGetAllLensFeature = () => {
  const data_ = useQuery({
    queryKey: ["api/LensFeature"],
    queryFn: async () => {
      const res = await api.get('/lense-feature');
      return res?.data?.data;
    },
  });
  return data_;
};

export default useGetAllLensFeature;
