import api from "@/api";

const DeleteTryAtHome = (id) => {
  return api.delete(`/try_home/${id}`);
};
export default DeleteTryAtHome;
