import { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdateTryAtHome = (id) => {
    const update = useMutation({
        mutationKey: ["api/try_home"],
        mutationFn: async (data) => {
            const res = await Imageapi.put(`/try_home/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("TryAtHome update successfully");
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return update;
};
export default UpdateTryAtHome;
