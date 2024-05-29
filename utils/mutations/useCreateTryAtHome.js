const { default: api, Imageapi } = require("@/api");

const CreateTryAtHome = (data) => {
  return Imageapi.post("/try_home", data);
};
export default CreateTryAtHome;
