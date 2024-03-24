const { default: api } = require("@/api");
const { useQuery } = require("react-query");

const useGetSingleBlogById = () => {
  const data = useQuery({
    queryKey: ["api/blog"],
    queryFn: async () => {
      const res = await api.get(`/blog/${id}`);
      return res?.data;
    },
  });
  return data;
};
export default useGetSingleBlogById;
