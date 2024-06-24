import { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdatelensDetails = (id) => {
    const update = useMutation({
        mutationKey: ["api/lenes"],
        mutationFn: async (data) => {
            const res = await Imageapi.put(`/lenses/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("lense update successfully");
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return update;
};
export default UpdatelensDetails;
