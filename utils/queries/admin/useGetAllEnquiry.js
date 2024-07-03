import { useQuery } from "@tanstack/react-query"
import api from "@/api";

const useGetAllEnquiry = () => {
  const alltask = useQuery({
    queryKey: ["api/enquiry"],
    queryFn: async () => {
      const res = await api.get('enquiry');
      return res?.data;
    },
  });
  return alltask;
};

export default useGetAllEnquiry;
    