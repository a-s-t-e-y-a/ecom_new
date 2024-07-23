import api, { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdateBlog = (id, refetch) => {
    const update = useMutation({
        mutationKey: ["api/blogs"],
        mutationFn: async (data) => {
            const res =  Imageapi.put(`/blogs/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Blogs update successfully");
            refetch();
            // window.location.reload()
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });
    return update;
};
export default UpdateBlog;
