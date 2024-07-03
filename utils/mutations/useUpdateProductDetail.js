import api, { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdateProudct = (id) => {
    console.log(id)
    const update = useMutation({
        mutationKey: ["api/products"],
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
