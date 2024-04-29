import api from "@/api";

const CreatePrivacyPolicy = (data) => {
  return api.post("/privacy", data);
};

export default CreatePrivacyPolicy;
