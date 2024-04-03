import api from "@/api";

const DeleteLensFeature = (id) => {
  return api.delete(`/lense-feature/${id}`);
};
export default DeleteLensFeature;
