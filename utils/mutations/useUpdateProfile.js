import api, { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const UpdateProfile = (id) => {
    const update = useMutation({
        mutationKey: ["api/profile"],
        mutationFn: async (data) => {
            const res = await api.patch(`/auth/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("profile update successfully");
            
        },
        onError: (err) => {
            toast.error(err.message);
           
        },
    });
    return update;
};
export default UpdateProfile;
