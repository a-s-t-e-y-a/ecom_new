import { Imageapi } from "@/api";

const CreateCategories = (data) => {
  return Imageapi.post("/categories", data);
};

export default CreateCategories;
