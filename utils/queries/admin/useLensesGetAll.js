import { useQuery } from "@tanstack/react-query"
import axiosInstance from "@/api";

const useGetAllLenses = () => {
  const alltask = useQuery({
    queryKey: ["api/lenses"],
    queryFn: async () => {
      const res = await axiosInstance.get('/lenses');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllLenses;
