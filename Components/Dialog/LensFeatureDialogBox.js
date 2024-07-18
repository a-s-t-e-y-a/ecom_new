import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useGetAllPowerType from "@/utils/queries/usePowerType";
import CreateLenseFeature from "@/utils/mutations/useCreateLensFeature";
import Loader from "../Loader";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import SelectBox from "../ui/SelectBox";
import useUpdateLensFeature from "@/utils/mutations/useUpdateLensFeature";

const LensFeatureDialogBox = ({ onCancel, refetch, token, edit }) => {
  const { register, handleSubmit, control, reset } = useForm();
  const { mutate: update } = useUpdateLensFeature(edit?.id);
  const { mutate } = useMutation({
    mutationFn: CreateLenseFeature,
    onSuccess: () => {
      toast.success("Lens Feature created succesfully");
      refetch(!token);
    },
    onError: (err) => {
      toast.error("Error occurred");
    },
  });
  const { data: power } = useGetAllPowerType();

  useEffect(() => {
    const resetPayload = {
      power_type_id: edit?.power_type_,
      image:edit?.image,
      title: edit?.title,
      description: edit?.description,
    };
    reset(resetPayload);
  }, [reset, power, edit]);

  const onSubmit = (data) => {
    const formData = new FormData();

    if (edit==undefined || Object.keys(edit).length === 0) {
      formData.append("file", data?.file[0]);
      const payload = {
        power_type_id: data?.power_type_id.id,
        title: data?.title,
        description: data?.description,
      };

      const datas = JSON.stringify(payload);
      formData.append("data", datas);
      mutate(formData);
      refetch(!token);
    } else {
      formData.append("file", data?.file[0]);
      delete data.file
      const payload = {
        power_type_id: data?.power_type_id.id,
        title: data?.title,
        description: data?.description,
        image:data?.image
      };
      const datas = JSON.stringify(payload);
      formData.append("data", datas);
      update(formData);
      onCancel();
    }
  };

  return (
    <div className="relative border tracking-wide space-y-5 rounded-md shadow-lg h-[calc(100%-1rem)] max-h-full">
      <h1 className="text-md font-semibold text-center text-gray-700 mt-3">
        Add Lens Feature
      </h1>
      <form
        className="flex flex-col items-center justify-between gap-6 px-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FileInput title="" register={register} image={edit?.image}/>
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
        <TextField
          fullWidth
          label="Title"
          name="title"
          id="title"
          size="small"
          {...register("title")}
          sx={{ minWidth: 300 }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          id="description"
          size="small"
          {...register("description")}
          sx={{ minWidth: 300 }}
        />

        <button
          type="submit"
          className="text-white bg-sky-400 hover:bg-sky-500  focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2"
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

export default LensFeatureDialogBox;
