import api from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllBanner = () => {
  const alltask = useQuery({
    queryKey: ["api/banner"],
    queryFn: async () => {
      const res = await api.get("/banner");
      return res?.data?.data;
    },
  });
  return alltask;
};

export default useGetAllBanner;
