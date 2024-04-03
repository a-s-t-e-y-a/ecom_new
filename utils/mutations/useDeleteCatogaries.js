import api from "@/api";
const DeleteCategory = (id) => {
  return api.delete(`/categories/${id}`);
};
export default DeleteCategory;
