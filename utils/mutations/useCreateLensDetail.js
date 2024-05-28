import api from "@/api";

const CreateLensDeatils = (data) => {
  return api.post("/lenses", data);
};
export default CreateLensDeatils;
