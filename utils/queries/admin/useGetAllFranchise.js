import { useQuery } from "@tanstack/react-query"
import api from "@/api";

const useGetAllFranchise = () => {
  const alltask = useQuery({
    queryKey: ["api/franchise"],
    queryFn: async () => {
      const res = await api.get('franchise/form');
      console.log(res.data, 'res')
      return res?.data;
    },
  });
  return alltask;
};

export default useGetAllFranchise;
    