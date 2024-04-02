import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useDeleteShape = () => {
    const deleteShape = useMutation({
        mutationFn: async (id) => {
            await api.delete(`/shape/${id}`);
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success("Deleted Successfully");
        },
        onError: (err) => {
            toast.error("Error deleting shape");
        },
    });
    return deleteShape;
};
export default useDeleteShape;