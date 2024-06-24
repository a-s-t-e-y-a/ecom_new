import api, { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdateBlog = (id, closeModal, refetch) => {
    const update = useMutation({
        mutationKey: ["api/product"],
        mutationFn: async (data) => {
            const res =  api.put(`/blogs/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Blogs update successfully");
            closeModal()
            refetch();
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return update;
};
export default UpdateBlog;
