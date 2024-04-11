import { Imageapi } from "@/api";

const Createbanner = (data) => {
  return Imageapi.post("/banner", data);
};

export default Createbanner;
