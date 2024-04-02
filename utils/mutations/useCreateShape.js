import { Imageapi } from "@/api";

const CreateShape = (data) => {
  return Imageapi.post("/shape", data);
};

export default CreateShape;
