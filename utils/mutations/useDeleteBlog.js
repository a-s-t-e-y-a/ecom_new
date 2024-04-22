import api from "@/api";

const deleteBlogs = (id) => {
  console.log("delete", id)
  return api.delete(`/blogs/${id}`);
};
export default deleteBlogs;
