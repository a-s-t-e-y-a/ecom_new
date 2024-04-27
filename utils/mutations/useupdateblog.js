import { Imageapi } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const UpdateBlog = (id,fun1,fun2) => {
    const update = useMutation({
        mutationKey: ["api/product"],
        mutationFn: async (data) => {
            const res = await Imageapi.put(`/blogs/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Blogs update successfully");
            fun1(false);
            fun2(false);
        },
        onError: (err) => {
            toast.error(err.message);
            fun1(false);
            fun2(false);
        },
    });
    return update;
};
export default UpdateBlog;
