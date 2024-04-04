import api from "@/api";

const deleteLensDetails = (id) => {
  return api.delete(`/lenses/${id}`);
};
export default deleteLensDetails;
