const { default: api, Imageapi } = require("@/api");

const CreateLenseFeature = (data) => {
  return Imageapi.post("/lense-feature", data);
};
export default CreateLenseFeature;
