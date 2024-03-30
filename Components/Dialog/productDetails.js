"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useCreateLensDeatils from "@/utils/mutations/useCreateLensDetail";
import useGetAllBrands from "@/utils/queries/useBrandsGetAll";
import useGetAllCategories from "@/utils/queries/useCategoriesGetAll";
import useGetAllLensFeature from "@/utils/queries/useLensFeature";
import SingleSelectCategories from "../Admin/MultipleSelectCategories";
import SingleSelectBrands from "../Admin/brandMultipleSelect";
import SingleSelectLensFeature from "../Admin/lensFeatureMultipleSelect";
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
import useCreateProduct from "@/utils/mutations/useCreateProduct";

const ProductDetailDialog = ({ onCancel }) => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useCreateProduct();
  const {
    data: brand,
    isLoading: brandLoading,
    isError: errorBrand,
  } = useGetAllBrands();
  const { data: categories } = useGetAllCategories();
  const { data: color } = useGetAllColor();
  const { data: shape } = useGetAllShape();
  const { data: powerType } = useGetAllPowerType();
  const { data: material } = useGetAllMaterial();
  const { data: size } = useGetAllSize();
  const { data: style } = useGetAllStyle();
  const Data = useCreateProduct();
  console.log(useCreateProduct().data);
  const OnSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="relative border mt-[1100px] md:mt-[300px] rounded-md shadow-lg w-full md:w-auto h-[calc(100%-1rem)] max-h-full">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
        Add Products Detail
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={handleSubmit(OnSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-between w-full gap-3">
          <FileInput title="Main Image" register={register} />
          <FileInput title="Other imsges" register={register} />
          <TextField
            fullWidth
            label="Model name"
            name="product_model_name"
            id="product_model_name"
            {...register("product_model_name")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Model number"
            name="product_model_number"
            id="product_model_number"
            {...register("product_model_number")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Capacity"
            name="capacity"
            id="capacity"
            {...register("capacity")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Use For"
            name="use_for"
            id="use_for"
            {...register("use_for")}
            sx={{ minWidth: 300 }}
          />
          <SingleSelectCategories
            label="Product Categories Name"
            options={categories}
            register={register}
            name="productCategoriesId"
          />
          <SingleSelectBrands
            label="Brand Name"
            options={brand}
            register={register}
            name="productBrandId"
          />
          <SingleSelectPowerType
            label="Select Power"
            options={powerType}
            register={register}
            name="show_lens_list"
          />
          <SingleSelectColor
            label="Select Color"
            options={color}
            register={register}
            name="product_color"
          />
          <SingleSelectShape
            label="Select shape"
            options={shape}
            register={register}
            name="shape"
          />

          <SingleSelectMaterial
            label="Select material"
            options={material}
            register={register}
            name="material"
          />
          <SingleSelectSize
            label="Select Size"
            options={size}
            register={register}
            name="size"
          />
          <SingleSelectStyle
            label="Select Style"
            options={style}
            register={register}
            name="style"
          />
          <SingleSelectUniversal
            label="Select Warranty"
            options={[true, false]}
            register={register}
            name="warranty"
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
            label="Selling Price"
            name="product_price"
            id="product_price"
            size="small"
            {...register("product_price")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Discounted Product Price"
            name="discounted_price"
            id="discounted_price"
            size="small"
            {...register("discounted_price")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Frame Width"
            name="frame_width"
            id="frame_width"
            size="small"
            {...register("frame_width")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Country of origin"
            name="country_of_origin"
            id="country_of_origin"
            size="small"
            {...register("country_of_origin")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Lens Height"
            name="lens_height"
            id="lens_height"
            size="small"
            {...register("lens_height")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Stock quantity"
            name="stokke"
            id="stokke"
            size="small"
            {...register("stokke")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="SEO Title"
            name="seo_title"
            id="seo_title"
            size="small"
            {...register("seo_title")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Tags"
            name="keyword"
            id="keyword"
            size="small"
            {...register("keyword")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Temple length"
            name="temple_length"
            id="temple_length"
            size="small"
            {...register("temple_length")}
            sx={{ minWidth: 300 }}
          />
          <div className="w-[85%]">
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

export default ProductDetailDialog;
