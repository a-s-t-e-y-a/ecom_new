import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import { Toaster } from "react-hot-toast";
import CreateShape from "@/utils/mutations/useCreateShape";
import Loader from "../Loader";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ShapeDialogBox = ({ onCancel, refetch, token }) => {
  const { mutate } = useMutation({
    mutationFn: CreateShape,
    onSuccess: () => {
      toast.success("Shape created succesfully");
      refetch(!token);
    },
    onError: () => {
      toast.error("Error occurred");
    },
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    
    formData.append("file", data?.file[0]);
    delete data.file
    formData.append("data", JSON.stringify(data));
    mutate(formData);
    onCancel()
    refetch(!token);
  };

  return (
    <div className="relative border p-2 tracking-wide space-y-5 rounded-md shadow-lg h-[calc(100%-1rem)] max-h-full">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
        Add Shapes
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FileInput title="" register={register} />
        <div className="flex flex-col items-center justify-between gap-2">
          <TextField
            label="Shape"
            name="name"
            id="shape"
            size="small"
            {...register("name")}
          />
          <TextField
            label="Shape Seo Title"
            name="seo_title"
            id="shape"
            size="small"
            {...register("seo_title")}
          />
          <TextField
            label="Shape Seo description"
            name="seo_description"
            id="shape"
            size="small"
            {...register("description")}
          />
          <button
            type="submit"
            className="text-white bg-sky-400 hover:bg-sky-500  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2"
            //   onClick={}
            onSubmit={handleSubmit}
          >
            Add <AddIcon className="ml-1 font-bold text-base" />
          </button>
        </div>
      </form>
      <button
        type="button"
        className="absolute -top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={onCancel}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <Toaster />
    </div>
  );
};

export default ShapeDialogBox;
