import api from "@/api";

const deleteFrame = (id) => {
  return api.delete(`/material${id}`);
};
export default deleteFrame;
