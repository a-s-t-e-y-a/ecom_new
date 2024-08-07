import { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useUpdatePowerType = (id, refecth, token) => {
    const update = useMutation({
        mutationKey: ["api/power"],
        mutationFn: async (data) => {
            const res = await Imageapi.put(`/power-type/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("power type update successfully");
            refecth(!token);
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return update;
};
export default useUpdatePowerType;
