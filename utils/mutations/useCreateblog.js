import {Imageapi} from "@/api";

const CreateBlog = (data) => {
  return Imageapi.post("/blogs", data);
};
export default CreateBlog;
