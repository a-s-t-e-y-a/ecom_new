import { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useUpdateLensFeature = (id, refetch, token) => {
    const update = useMutation({
        mutationKey: ["api/lensFeature"],
        mutationFn: async (data) => {
            const res = await Imageapi.put(`/lense-feature/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Lense Feature update successfully");
            refetch(!token)
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return update;
};
export default useUpdateLensFeature;
