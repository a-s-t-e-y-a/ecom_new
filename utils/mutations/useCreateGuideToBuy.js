import api from "@/api";

const useCreateGuideToBuy = (data) => {
  return api.post("/guide_to_buy", data);
};

export default useCreateGuideToBuy;
