import api from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllLensDetails = () => {
  const data_ = useQuery({
    queryKey: ["api/LensDetails"],
    queryFn: async () => {
      const res = await api.get("/lensses");
      return res?.data?.data;
    },
  });
  return data_;
};

export default useGetAllLensDetails;
