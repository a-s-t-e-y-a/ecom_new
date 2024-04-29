import api from "@/api";

const CreateSizeGuide = (data) => {
  return api.post("/size_guide", data);
};

export default CreateSizeGuide;
