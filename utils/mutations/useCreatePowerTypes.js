const { default: api, Imageapi } = require("@/api");

const CreatePowerType = (data) => {
  return Imageapi.post("/power-type", data);
};
export default CreatePowerType;
