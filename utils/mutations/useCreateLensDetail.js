import {Imageapi} from "@/api";

const CreateLensDeatils = (data) => {
  return Imageapi.post("/lenses", data);
};
export default CreateLensDeatils;
