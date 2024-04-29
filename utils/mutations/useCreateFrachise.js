import api from "@/api";

const CreateFranchise = (data) => {
  return api.post("/franchise", data);
};

export default CreateFranchise;
