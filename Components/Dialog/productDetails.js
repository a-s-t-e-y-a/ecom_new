import React from "react";
import { useForm } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useGetAllBrands from "@/utils/queries/useBrandsGetAll";
import useGetAllCategories from "@/utils/queries/useCategoriesGetAll";
import SingleSelectCategories from "../Admin/MultipleSelectCategories";
import { Textarea } from "@material-tailwind/react";
import useGetAllColor from "@/utils/queries/useColorGetAll";
import useGetAllShape from "@/utils/queries/useShapeGetAll";
import useGetAllPowerType from "@/utils/queries/usePowerType";
import SingleSelectPowerType from "../Admin/powerTypeMultipleSelect";
import SingleSelectColor from "../Admin/colorSelect";
import SingleSelectShape from "../Admin/shapeSelect";
import SingleSelectUniversal from "../Admin/universalSelect";
import SingleSelectMaterial from "../Admin/materialSelect";
import useGetAllMaterial from "@/utils/queries/useFrameMaterialGetAll";
import useGetAllSize from "@/utils/queries/useGetAllSize";
import useGetAllStyle from "@/utils/queries/useStyleGetAll";
import SingleSelectSize from "../Admin/sizeMultiple";
import SingleSelectStyle from "../Admin/styleMultiple";
import CreateProduct from "@/utils/mutations/useCreateProduct";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import SingleGenderSelect from "@/Components/Admin/SingleSelectGender";
import { useEffect } from "react";
import UpdateProudct from "@/utils/mutations/useUpdateProductDetail";
import SingleSelectLensFeature from "../Admin/lensFeatureMultipleSelect";

const ProductDetailDialog = ({ onCancel, refetch, editValue }) => {
  const { register, handleSubmit, control, setValue } = useForm();
  const { mutate } = useMutation({
    mutationFn: CreateProduct,
    onSuccess: () => {
      toast.success("Product created succesfully");
      refetch();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const { data: categories } = useGetAllCategories();
  const { data: color } = useGetAllColor();
  const { data: shape } = useGetAllShape();
  const { data: power } = useGetAllPowerType();
  const { data: material } = useGetAllMaterial();
  const { data: size } = useGetAllSize();
  const { data: style } = useGetAllStyle();
  const [activePOwer, setAcative] = useState(true);
  const { mutate: update } = UpdateProudct(editValue?.p_id);
  
  useEffect(() => {
    console.log(editValue);
    for (const key in editValue) {
      setValue(key, editValue[key]);
    }
  }, [editValue, setValue]);
  const OnSubmit = async (data) => {
    console.log(data)
    const form = new FormData();
    // Append the 'main' files
    if (data.main) {
      for (let i = 0; i < data.main.length; i++) {
        form.append("files", data.main[i]);
      }
    }

    // Append the 'file' files
    if (data.file) {
      for (let i = 0; i < data.file.length; i++) {
        form.append("files", data.file[i]);
      }
    }
    delete data.main;
    delete data.file;
    // Append the data object as JSON string
    form.append("data", JSON.stringify(data));

    // Assuming mutate is an asynchronous function that sends the form data
    if (Object.keys(editValue).length === 0) {
      mutate(form);
      onCancel();
      refetch();
    } else {
      update(form);
      onCancel()
      refetch();
    }
  };

  return (
    <div className="relative border mt-[1100px] md:mt-[300px] rounded-md shadow-lg w-full md:w-auto h-[calc(100%-1rem)] max-h-full ">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3 mb-5">
        Add Products Detail
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={handleSubmit(OnSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-between w-full gap-3">
          <FileInput title="Main Image" register={register} name="main" />
          <FileInput title="Other imsges" register={register} />
          <TextField
            fullWidth
            label="Model name"
            name="product_model_name"
            id="product_model_name"
            {...register("product_model_name")}
            sx={{ width: 298 }}
          />
          <TextField
            fullWidth
            label="Model number"
            name="product_model_number"
            id="product_model_number"
            {...register("product_model_number")}
            sx={{ width: 298 }}
          />
          <SingleGenderSelect
            options={["Men", "Women", "Kids", "Both(M/F)"]}
            register={register}
            name="gender"
          />
          <SingleSelectCategories
            label={"Product Category"}
            options={categories}
            register={register}
            name="productCategoriesId"
          />
          <SingleSelectUniversal
            options={["Yes", "No"]}
            register={register}
            name="select_Lense"
            setactive={setAcative}
          />
           <SingleSelectLensFeature
            label="Power Type"
            options={power}
            register={register}
            name="power_type_id"
          />
          <SingleSelectColor
            options={color}
            control={control}
            label="Select Color"
            register={register}
            name="product_color"
          />
          <SingleSelectShape
            label="Select Shape"
            control={control}
            options={shape}
            register={register}
            name="shape"
          />
          <SingleSelectMaterial
            label="Select Material"
            control={control}
            options={material}
            register={register}
            name="material"
          />
          <SingleSelectSize
            label="Select Size"
            control={control}
            options={size}
            register={register}
            name="size"
          />
          <SingleSelectStyle
            label="Select Style"
            control={control}
            options={style}
            register={register}
            name="style"
          />
          <div>
            <TextField
              disabled
              className="w-[300px]"
              id=""
              label="Lens Material"
              defaultValue="Demo Polycarbonate"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              size="small"
              {...register("dsfs")}
              sx={{ height: 50 }}
            />
          </div>
          <div>
            <TextField
              disabled
              className="w-[300px]"
              id=""
              label="Raw Material Sourced from"
              defaultValue="Imported [International]"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              size="small"
              {...register("row_metrial_source_from")}
            />
          </div>
          <TextField
            fullWidth
            label="Discounted Product Price"
            name="discounted_price"
            id="discounted_price"
            size="small"
            {...register("discounted_price")}
            sx={{ width: 298, height: 50 }}
          />
          <TextField
            fullWidth
            label="Frame Width"
            name="frame_width"
            id="frame_width"
            size="small"
            {...register("frame_width")}
            sx={{ width: 298, height: 50 }}
          />
          <TextField
            fullWidth
            label="Lens Width"
            name="lens_width"
            id="lens_width"
            size="small"
            {...register("lens_width")}
            sx={{ width: 298, height: 50 }}
          />
          <TextField
            fullWidth
            label="Lens Height"
            name="lens_height"
            id="lens_height"
            size="small"
            {...register("lens_height")}
            sx={{ width: 298, height: 50 }}
          />
          <TextField
            fullWidth
            label="Stock quantity"
            name="stokke"
            id="stokke"
            size="small"
            {...register("stokke")}
            sx={{ width: 298, height: 50 }}
          />
          <TextField
            fullWidth
            label="SEO Title"
            name="seo_title"
            id="seo_title"
            size="small"
            {...register("seo_title")}
            sx={{ width: 298, height: 50 }}
          />
          <TextField
            fullWidth
            label="Tags"
            name="keyword"
            id="keyword"
            size="small"
            {...register("keyword")}
            sx={{ width: 298, height: 50 }}
          />
          <div className=" col-span-2">
            <Textarea
              label="Description"
              className="col-span-3"
              {...register("product_description")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-sky-400 hover:bg-sky-500  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2"
          //   onClick={}
          onSubmit={handleSubmit}
        >
          Add <AddIcon className="ml-1 font-bold text-base" />
        </button>
      </form>
      <button
        type="button"
        className="absolute top-4 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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

export default ProductDetailDialog;
