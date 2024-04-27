import api from "@/api";

const CreateDelivery = (data) => {
  return api.post("/delivery_shipping_term", data);
};

export default CreateDelivery;
