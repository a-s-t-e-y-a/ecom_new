import { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const UpdateProudct = (id) => {
    const update = useMutation({
        mutationKey: ["api/blog"],
        mutationFn: async (data) => {
            const res = await Imageapi.put(`/products/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Product update successfully");
            
        },
        onError: (err) => {
            toast.error(err.message);
           
        },
    });
    return update;
};
export default UpdateProudct;
