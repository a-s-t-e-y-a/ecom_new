import { useQuery } from "@tanstack/react-query"
import api from "@/api";

const useGetAllNewsLetter = () => {
  const alltask = useQuery({
    queryKey: ["newsletter"],
    queryFn: async () => {
      const res = await api.get('newsletter');
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllNewsLetter;
    