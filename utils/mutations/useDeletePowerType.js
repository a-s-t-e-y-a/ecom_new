import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import query from "../queryClinet";

const useDeletePowerType = () => {
  const deletePowerType = useMutation({
    mutationFn: async (id) => {
      await api.delete(`/power-type/${id}`);
      query.invalidateQueries({ queryKey: ["api/PowerType"] });
    },
    onSuccess: (data) => {
      toast.success("Deleted successully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return deletePowerType;
};
export default useDeletePowerType;
