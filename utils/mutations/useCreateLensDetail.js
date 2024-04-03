const { default: api, Imageapi } = require("@/api");

const CreateLensDeatils = (data) => {
  return Imageapi.post("/lenses ", data);
};
export default CreateLensDeatils;
