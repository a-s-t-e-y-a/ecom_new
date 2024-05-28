import { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useUpdateLensFeature = (id) => {
    const update = useMutation({
        mutationKey: ["api/lensFeature"],
        mutationFn: async (data) => {
            const res = await Imageapi.put(`/lense-feature/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Lense Feature update successfully");
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return update;
};
export default useUpdateLensFeature;
