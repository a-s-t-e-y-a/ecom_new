import api from "@/api";

const deleteBlogs = (id) => {
  return api.delete(`/blogs/${id}`);
};
export default deleteBlogs;
