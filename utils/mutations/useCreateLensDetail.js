const { default: api, Imageapi } = require("@/api");

const CreateLensDeatils = (data) => {
  return Imageapi.post("/lense", data);
};
export default CreateLensDeatils;
