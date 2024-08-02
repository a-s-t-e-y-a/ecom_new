import React, { useEffect } from "react";
import { Button, Dialog, DialogBody, Input, Textarea } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import QuillEditor from "../Admin/QuillEditor";
import useUpdateBlog from "@/utils/mutations/useupdateblog";
import useCreateBlog from "@/utils/mutations/useCreateblog";

const CreateBlogDialog = ({ closeModal, edit, refetch }) => {
  const { register, handleSubmit, control, reset } = useForm();
  const { mutate: update } = useUpdateBlog(edit?.id, closeModal, refetch);
  const { mutate, isLoading } = useCreateBlog();

  useEffect(() => {
    if (edit) {
      const editPayload = {
        heading: edit.heading || "",
        thumb: edit.thumb || "",
        description: edit.description || "",
        url: edit.url || "",
        seo_title: edit.heading || "",
        tags: edit.tags || "",
        metaDescription: edit.MetaDescription?.metaDescription || "",
      };
      reset(editPayload);
    }
  }, [edit, reset]);

  const onSubmit = async (data) => {
    const form = new FormData();
    if (data.file) {
      form.append("file", data.file[0]);
    }
    delete data.file;

    const payload = {
      description: data.description,
      heading: data.heading,
      tags: data.tags,
      metaDescription: data.metaDescription,
      seo_title: data.heading,
      thumb: data.thumb,
      url: data.url,
    };
    form.append("data", JSON.stringify(payload));

    if (edit && Object.keys(edit).length > 0) {
      update(form);
    } else {
      mutate(form);
    }
  };

  return (
    <Dialog open={true} onClose={closeModal} className="border-2 overflow-scroll w-[100%]">
      <DialogBody divider>
        <div className="w-full space-y-5 text-gray-700">
          <h1 className="text-xl font-semibold tracking-wide text-center">Upload Image</h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-sm tracking-wide font-semibold">
              You can easily upload your file in any of the following formats: PDF, JPG, GIF, PNG, JPEG
            </p>
            <FileInput title="main_image" register={register} image={edit?.image} />
            <Input label="Heading" name="heading" {...register("heading")} />
            <Input label="SEO URI" name="url" {...register("url")} />
            <Input label="Thumb" name="thumb" {...register("thumb")} />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <QuillEditor
                  {...field}
                  theme="snow"
                  value={field.value || ""}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            <Textarea label="Tags" name="tags" {...register("tags")} />
            <Textarea label="Meta description" name="metaDescription" {...register("metaDescription")} />
            <div className="flex justify-end">
              <Button variant="text" color="red" onClick={closeModal} className="mr-1">
                <span>Cancel</span>
              </Button>
              <Button variant="text" color="green" type="submit" disabled={isLoading}>
                <span>{isLoading ? "Submitting..." : "Confirm"}</span>
              </Button>
            </div>
          </form>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default CreateBlogDialog;
