import api from "@/api";

const CreateCategories = (data) => {
  return api.post("/categories", data);
};

export default CreateCategories;
