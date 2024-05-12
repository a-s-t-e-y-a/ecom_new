import api from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllTryAtHome = () => {
  const data_ = useQuery({
    queryKey: ["api/try_home"],
    queryFn: async () => {
      const res = await api.get("/try_home ");
      return res?.data?.data;
    },
  });
  return data_;
};

export default useGetAllTryAtHome;
