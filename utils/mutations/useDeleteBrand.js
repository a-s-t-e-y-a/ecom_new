import api from "@/api";

const deleteBrand = (id) => {
  return api.delete(`/brands${id}`);
};

export default deleteBrand;
