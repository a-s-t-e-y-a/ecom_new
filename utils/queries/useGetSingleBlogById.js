const { default: api } = require("@/api");
import { useQuery } from "@tanstack/react-query";

const useGetSingleBlogById = (url) => {
  const data = useQuery({
    queryKey: ["api/blog", url],
    queryFn: async () => {
      if (url) {
        const res = await api.get(`/blogs/${url}`);
        return res?.data;
      }
    },
  });
  return data;
};
export default useGetSingleBlogById;
