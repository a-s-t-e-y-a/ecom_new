import api from "@/api";

const CreateBrand = (data) => {
  return api.post("/brands", {
    data: data,
  });
};

export default CreateBrand;
