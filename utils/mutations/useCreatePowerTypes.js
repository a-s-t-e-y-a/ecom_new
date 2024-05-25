import api from "@/api";


const CreatePowerType = (data) => {
  return api.post("/power-type", data);
};
export default CreatePowerType;
