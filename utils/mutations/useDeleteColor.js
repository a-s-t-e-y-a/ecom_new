import api from "@/api";
const Deletecolor = (id) => {
  return api.delete(`/color/${id}`);
};
export default Deletecolor;
