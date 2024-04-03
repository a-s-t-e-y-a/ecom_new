import api from "@/api";

const DeleteShape = (id) => {
  return api.delete(`/shape/${id}`);
};
export default DeleteShape;
