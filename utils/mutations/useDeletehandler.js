import api from "@/api";

const DeleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};
export default DeleteProduct;
