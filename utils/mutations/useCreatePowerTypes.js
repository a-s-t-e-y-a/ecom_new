import { Imageapi } from "@/api";

const CreatePowerType = (data) => {
  return Imageapi.post("/power-type", data);
};
export default CreatePowerType;
