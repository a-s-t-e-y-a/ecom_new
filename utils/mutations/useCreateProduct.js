import { Imageapi } from "@/api";

const CreateProduct = (data) => {
  return Imageapi.post("/products", data);
};
export default CreateProduct;
