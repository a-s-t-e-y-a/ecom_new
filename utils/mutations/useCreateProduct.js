const { default: api, Imageapi } = require("@/api");

const CreateProduct = (data) => {
  return api.post("/products", data);
};
export default CreateProduct;
