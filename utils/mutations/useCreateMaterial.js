import { api } from "@/api";

const CreateMaterial = (data) => {
  return api.post("/material", data);
};
export default CreateMaterial;
