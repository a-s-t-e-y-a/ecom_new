import React from "react";
import FileInput from "@/Components/Admin/FileInput";
import SelectComponent from "@/Components/Admin/SelectComponent";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import useGetAllCategories from "@/utils/queries/useCategoriesGetAll";
import useGetAllShape from "@/utils/queries/useShapeGetAll";

const onSubmit = (data) => {};
const BannerManagerDialogBox = ({ onCancel }) => {
  const { register, handleSubmit } = useForm();
  const { data } = useGetAllCategories();
  const { data: Shape } = useGetAllShape();
  return (
    <div className="relative border p-2 tracking-wide space-y-5 rounded-md shadow-lg h-[calc(100%-1rem)] max-h-full">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
        Add Banner
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={() => {
          handleSubmit(onSubmit);
        }}
      >
        <div className="flex items-center justify-between gap-5">
          <FileInput title="main_image" register={register} />
          <SelectComponent label="SELECT CATOGARIES" options={data} />
        </div>
        <div className="flex items-center justify-between gap-5">
          {/* <MultipleSelect label="ProductCategoriesName" options={ProductCategoriesName}/> */}
          {/* <MultipleSelect label="ProductBrandName" options={ProductBrandName}/> */}
        </div>

        <div className="flex items-center justify-between gap-5">
          <SelectComponent label="Shape" options={Shape} />
          <button
            type="submit"
            className="text-white bg-sky-400 hover:bg-sky-500  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2"
            //  onClick={}
            onSubmit={() => {}}
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
          fill="currentbrand"
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

export default BannerManagerDialogBox;
