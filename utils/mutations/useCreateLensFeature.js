import api from "@/api";


const CreateLenseFeature = (data) => {
  return api.post("/lense-feature", data);
};
export default CreateLenseFeature;
