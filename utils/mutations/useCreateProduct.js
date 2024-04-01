const { default: api, Imageapi } = require("@/api");
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreateProduct = () => {
  const createPowerType = useMutation({
    mutationFn: async (data) => {
      api.post("/products", data);
    },
    onSuccess: () => {
      toast("PowerType created succesfully");
    },
    onError: () => {
      toast("Error occurred");
    },
  });
  return createPowerType;
};
export default useCreateProduct;
