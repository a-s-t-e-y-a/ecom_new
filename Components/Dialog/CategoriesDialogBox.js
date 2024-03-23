import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import FileInput from "../Admin/FileInput";
import { addCategory } from "@/Slices/categoriesSlice";
import useCreateCategories from "@/utils/mutations/useCreateCategories";
import { LocalActivityTwoTone } from "@mui/icons-material";
import Loader from "../Loader";

const CategoriesDialogBox = ({ onCancel, setOpen }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { mutate, isPending, isError } = useCreateCategories();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify({ name: data.name }));
    formData.append("file", data.file[0]);
    setOpen(false);
    await mutate(formData);
  };
  if (isPending) {
    return <Loader />;
  }
  if (isError) {
    return <>Error occurred</>;
  }
  return (
    <div className="relative border p-2 tracking-wide space-y-5 rounded-md shadow-lg h-[calc(100%-1rem)] max-h-full">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
        Add Categories
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FileInput title="" register={register} />
        <div className="flex items-center justify-between gap-2">
          <TextField
            label="Categories"
            name="categories"
            id="categories"
            size="small"
            {...register("name")}
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
    </div>
  );
};

export default CategoriesDialogBox;
