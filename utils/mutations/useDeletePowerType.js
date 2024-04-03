import api from "@/api";

const DeletePowerType = (id) => {
  return api.delete(`/power-type/${id}`);
};
export default DeletePowerType;
