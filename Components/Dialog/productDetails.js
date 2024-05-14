import React from "react";
import { Controller, useForm } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import { Autocomplete, TextField } from "@mui/material";
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
import SelectBox from "../ui/SelectBox";
import { Gender } from "@/utils/contants";

const ProductDetailDialog = ({ onCancel, refetch, editValue }) => {
  const { register, handleSubmit, control, reset, watch } = useForm({
    mode: "all",
    defaultValue: {
      ...editValue,
      productCategories: [
      ],
    },
  });

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
    if (Object.keys(editValue).length > 1) {
      const payload = {
        ...editValue,
        use_for: editValue?.use_for,
        product_color: editValue?.product_color_,
        shape: editValue?.shape_,
        material: editValue?.material_,
        size: editValue?.size_,
        style: editValue?.style_,
        select_Lens:editValue?.show_lens_list==1?"Yes":"No"
      };

      reset(payload);
    }
  }, [editValue, reset, categories]);

  const OnSubmit = async (data) => {
    console.log(editValue, "editValue")
    console.log(data, "onSubmit");

    const data_ = {
      product_model_name: data.product_model_name,
      product_model_number: data.product_model_number,
      // "capacity":
      use_for: data.use_for,
      // "dimensions":data.dimensions
      // "country_of_origin":data
      row_metrial_source_from: "Imported",
      show_lens_list: data.select_Lens=="Yes"?1:0,
      // "warranty":data.wa
      product_description: data.product_description,
      product_price: data.discounted_price,
      discounted_price: data.discounted_price,
      // "offer":
      // "bought":
      frame_width: data.frame_width,
      // "temple_length":data.
      lens_height: data.lens_height,
      stokke: data.stokke,
      product_url: data.product_model_name + data.product_model_number,
      seo_title: data.seo_title,
      keyword: data.keyword,
      status: 1,
      lens_width: data.lens_width,
      productCategoriesId: data.productCategories.map(
        (i) => i.products_categories_id
      ),
      product_color: data.product_color.id,
      shape: data.shape.id,
      style: data.style.id,
      size: data.size.id,
      material: data.material.id,
      power_type_id: data.power_type_id.map((i) => i.id),
    };
    console.log(data_)
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

    // Append the data object as JSON string
    form.append("data", JSON.stringify(data_));

    // Assuming mutate is an asynchronous function that sends the form data
    if (Object.keys(editValue).length === 0) {
      mutate(form);
      onCancel();
      refetch();     
    } else {
      update(form);
      onCancel();
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
        <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-between w-full gap-4">
          <FileInput title="Main Image" register={register} name="main" />
          <FileInput title="Other imsges" register={register} />
          <TextField
            fullWidth
            label="Model name"
            name="product_model_name"
            id="product_model_name"
            {...register("product_model_name")}
            size="small"
            sx={{ width: 350 }}
          />
          <TextField
            fullWidth
            label="Model number"
            name="product_model_number"
            id="product_model_number"
            {...register("product_model_number")}
            size="small"
            sx={{ width: 350 }}
          />
          <Controller
            name="use_for"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Gender"
                options={Gender}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="productCategories"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <SelectBox
                  label="Category"
                  multiple={true}
                  options={categories}
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />
          <Controller
            name="select_Lens"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Select Lens"
                multiple={false}
                options={["Yes", "No"]}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="power_type_id"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Power Type"
                multiple={true}
                options={power}
                readOnly={watch("select_Lens") !== "Yes"}
                placeholder={watch("select_Lens") !== "Yes" ? "No Power type(Read Only)" : ""}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="product_color"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Select Color"
                options={color}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="shape"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Select Shape"
                options={shape}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="material"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Select Material"
                options={material}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="size"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Select Size"
                options={size}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="style"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Select Style"
                options={style}
                value={value}
                onChange={onChange}
              />
            )}
          />

          <TextField
            disabled
            className="w-[350px]"
            id=""
            label="Lens Material"
            defaultValue="Demo Polycarbonate"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            size="small"
            {...register("Lens_Material")}
          />

          <TextField
            fullWidth
            disabled
            className="w-[350px]"
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
          <TextField fullWidth label="Selling Price" name="product_price" id="product_price" size="small" {...register("product_price")} sx={{ minWidth: 300 }} />
          <TextField fullWidth label="Discounted Product Price" name="discounted_price" id="discounted_price" size="small" {...register("discounted_price")} sx={{ minWidth: 300 }} />
          <TextField fullWidth label="Frame Width" name="frame_width" id="frame_width" size="small" {...register("frame_width")} sx={{ minWidth: 300 }} />
          <TextField fullWidth label="Country of origin" name="country_of_origin" id="country_of_origin" size="small" {...register("country_of_origin")} sx={{ minWidth: 300 }} />
          <TextField fullWidth label="Lens Height" name="lens_height" id="lens_height" size="small" {...register("lens_height")} sx={{ minWidth: 300 }} />
          <TextField fullWidth label="Stock quantity" name="stokke" id="stokke" size="small" {...register("stokke")} sx={{ minWidth: 300 }} />
          <TextField fullWidth label="SEO Title" name="seo_title" id="seo_title" size="small" {...register("seo_title")} sx={{ minWidth: 300 }} />
          <TextField fullWidth label="Tags" name="keyword" id="keyword" size="small" {...register("keyword")} sx={{ minWidth: 300 }} />
          <TextField fullWidth label="Temple length" name="temple_length" id="temple_length" size="small" {...register("temple_length")} sx={{ minWidth: 300 }} />
          <TextField
            fullWidth
            label="Lens Width"
            name="lens_width"
            id="lens_width"
            {...register("lens_width")}
            size="small"
            sx={{ width: 350 }}
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
