import api from "@/api";

const CreateCancellation = (data) => {
  return api.post("/cancellation", data);
};

export default CreateCancellation;
