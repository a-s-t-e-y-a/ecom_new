import api, { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const UpdateBlog = (id) => {
    const update = useMutation({
        mutationKey: ["api/product"],
        mutationFn: async (data) => {
            const res =  api.put(`/blogs/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Blogs update successfully");
            
        },
        onError: (err) => {
            toast.error(err.message);
            
        },
    });
    return update;
};
export default UpdateBlog;
