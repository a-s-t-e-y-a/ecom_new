import { useQuery } from "@tanstack/react-query"
import axiosInstance from "@/api";

const useGetAllDashboard = () => {
  const alltask = useQuery({
    queryKey: ["api/Brands"],
    queryFn: async () => {
      const res = await axiosInstance.get('/brands');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllDashboard;
    