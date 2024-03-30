const { default: api } = require("@/api");

const CreateColor = (data) => {
  return api.post("/color", data);
};
export default CreateColor;
