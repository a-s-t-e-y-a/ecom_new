import api from "@/api";

const CreateEasyReturnPolicy = (data) => {
  return api.post("/return_policy", data);
};

export default CreateEasyReturnPolicy;
