import {Imageapi} from "@/api";


const CreateLenseFeature = (data) => {
  return Imageapi.post("/lense-feature", data);
};
export default CreateLenseFeature;
