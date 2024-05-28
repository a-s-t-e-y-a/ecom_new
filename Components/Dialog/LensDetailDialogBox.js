import React from "react";
import { useForm, Controller } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateLensDeatils from "@/utils/mutations/useCreateLensDetail";
import useGetAllLensFeature from "@/utils/queries/useLensFeature";
import SingleSelectLensFeature from "../Admin/lensFeatureMultipleSelect";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGetAllPowerType from "@/utils/queries/usePowerType";
import { useEffect } from "react";
import UpdatelensDetails from "@/utils/mutations/useupdateLensDeatil";
import SelectBox from "../ui/SelectBox";

const LensDetailDialogBox = ({ onCancel, refetch, token, edit }) => {
  const { data: power } = useGetAllPowerType();
  const { data: lens_feature } = useGetAllLensFeature();
  const { mutate: update } = UpdatelensDetails(edit?.id);
  const { register, handleSubmit, reset, control } = useForm();

  useEffect(() => {
    console.log(edit);
    const resetPayload = {
      power_type_id: edit?.power_type_,
      anti_scratch_coating: edit?.anti_scratch_coating,
      blue_light_blocker: edit?.blue_light_blocker,
      both_side_anti_glare_coating: edit?.both_side_anti_glare_coating,
      both_side_anti_reflective_coating:
        edit?.both_side_anti_reflective_coating,
      breakage_and_crack_resistant: edit?.breakage_and_crack_resistant,
      categories_id: edit?.categories_id,
      heading: edit?.heading,
      lens_feature: edit?.lens_feature,
      power_range: edit?.power_range,
      power_type: edit?.power_type_,
      price: edit?.price,
      thickness: edit?.thickness,
      uv_protection: edit?.uv_protection,
      warranty_period: edit?.warranty_period,
      water_and_dust_repellent: edit?.water_and_dust_repellent,
    };
    reset(resetPayload);
  }, [edit, reset]);
  const { mutate } = useMutation({
    mutationFn: CreateLensDeatils,
    onSuccess: () => {
      toast.success("Lens Deatails created succesfully");
      refetch(!token);
    },
    onError: () => {
      toast.error("Error occurred");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const payload = {
      heading: data.heading,
      price: data.price,
      warranty_period: data.warranty,
      thickness: data.thickness,
      power_range: data.power_range,
      blue_light_blocker: data?.blue_light_blocker,
      anti_scratch_coating: data?.anti_scratch_coating,
      both_side_anti_glare_coating: data?.both_side_anti_glare_coating,
      both_side_anti_reflective_coating: data?.both_side_anti_reflective_coating,
      uv_protection: data.uv_protection,
      water_and_dust_repellent: data?.water_and_dust_repellent,
      breakage_and_crack_resistant: data?.breakage_and_crack_resistant,
      lens_feature_: data?.lens_feature_id?.id,
      power_type_: data?.power_type_id?.id
    };
    const formData = new FormData();
    formData.append("file", data.file[0]);
    delete data.file;
    formData.append("data", JSON.stringify(payload));

    if (Object.keys(edit).length === 0) {
      mutate(formData);
      onCancel();
      refetch();
    } else {
      update(formData);
      onCancel();
      refetch();
    }
  };

  return (
    <div className="relative border tracking-wide space-y-5 rounded-md shadow-lg h-[calc(100%-1rem)] max-h-full">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
        Add Lens Detail
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-3 items-center justify-between gap-3">
          <FileInput title="" register={register} />
          <Controller
            name="power_type_id"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Power Type"
                options={power}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="lens_feature_id"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectBox
                label="Lens Feature"
                options={lens_feature}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <TextField
            fullWidth
            label="Lens Heading"
            name="lensHeading"
            id="lensHeading"
            size="small"
            {...register("heading")}
            sx={{ minWidth: 300 }}
          />

          <TextField
            fullWidth
            label="Power Range"
            name="powerRange"
            id="powerRange"
            size="small"
            {...register("power_range")}
            sx={{ minWidth: 300 }}
          />

          <TextField
            fullWidth
            label="Price"
            name="price"
            id="price"
            size="small"
            {...register("price")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Index/Thickness"
            name="index/thickness"
            id="index/thickness"
            size="small"
            {...register("thickness")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Warranty Period"
            name="warrentyperiod"
            id="warrentyperiod"
            size="small"
            {...register("warranty")}
            sx={{ minWidth: 300 }}
          />

          <TextField
            fullWidth
            label="Blue Light Blocker"
            name="blueLightBlocker"
            id="blueLightBlocker"
            size="small"
            {...register("blue_light_blocker")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Anti Scratch Coating "
            name="antiScratchCoating"
            id="antiScratchCoating"
            size="small"
            {...register("anti_scratch_coating")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="UV Protextion"
            name="uvprotection"
            id="uvprotection"
            size="small"
            {...register("uv_protection")}
            sx={{ minWidth: 300 }}
          />

          <TextField
            fullWidth
            label="Both Side Anti Reflective Coating"
            name="bothSideAntiReflectiveCoating"
            id="bothSideAntiReflectiveCoating"
            size="small"
            {...register("both_side_anti_reflective_coating")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Water and Dust Repellent"
            name="waterAndDustRepellent"
            id="waterAndDustRepellent"
            size="small"
            {...register("water_and_dust_repellent")}
            sx={{ minWidth: 300 }}
          />
          <TextField
            fullWidth
            label="Breakage & Crack Resistant"
            name="breakageAndCrackResistance"
            id="breakageAndCrackResistance"
            size="small"
            {...register("breakage_and_crack_resistant")}
            sx={{ minWidth: 300 }}
          />

          <TextField
            fullWidth
            label="LensID"
            name="bothSideAntiGlareCoating"
            id="bothSideAntiGlareCoating"
            size="small"
            {...register("both_side_anti_glare_coating")}
            sx={{ minWidth: 300 }}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-sky-400 hover:bg-sky-500  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2"
          //   onClick={}
          onSubmit={handleSubmit(onSubmit)}
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

export default LensDetailDialogBox;
