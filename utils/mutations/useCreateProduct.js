const { Imageapi } = require("@/api");

const CreateProduct = (data) => {
  return Imageapi.post("/products", data);
};
export default CreateProduct;
