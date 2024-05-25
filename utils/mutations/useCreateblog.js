import api from "@/api";

const CreateBlog = (data) => {
  return api.post("/blogs", data);
};
export default CreateBlog;
