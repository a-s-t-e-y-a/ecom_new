import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import CreateBlog from "@/utils/mutations/useCreateblog";
import { Controller, useForm } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import QuillEditor from "../Admin/QuillEditor";
import UpdateBlog from "@/utils/mutations/useupdateblog";

const CreateBlogDialog = ({ open, setOpen, edit, refetch }) => {
  const { register, handleSubmit, control, reset } = useForm();
  const { mutate: update } = UpdateBlog(edit?.id, setOpen, open, refetch);
  const { mutate, isLoading } = useMutation({
    mutationFn: CreateBlog,
    onSuccess: () => {
      toast.success("Blogs created successfully");
      refetch();
      setOpen(!open);
    },
    onError: (error) => {
      console.error("Error creating blog:", error);
      toast.error("Failed to create blog");
      refetch();
      setOpen(!open);
    },
  });

  useEffect(() => {
    const editPayload = {
      heading: edit?.heading,
      thumb: edit?.thumb,
      description: edit?.description,
      url: edit?.url,
      seo_title: edit?.heading,
      tags: edit?.tags,
      metaDescription: edit?.MetaDescription?.metaDescription,
    };
    reset(editPayload);
  }, []);

  const onSubmit = async (data) => {
    const form = new FormData();
    form.append("file", data.file[0]);
    delete data.file;

    const payload = {
      description: data?.description,
      heading: data?.heading,
      tags: data?.tags,
      metaDescription: data?.metaDescription,
      seo_title: data?.heading,
      thumb: data?.thumb,
      url: data.url,
    };
    form.append("data", JSON.stringify(payload));

    if (edit && typeof edit === "object" && edit !== null) {
      console.log("new");
      update(payload);
    } else {
      mutate(form);
    }
  };

  return (
    <Dialog open={open} className="border-2 overflow-scroll w-[100%]">
      <DialogBody divider>
        <div className="w-full space-y-5 text-gray-700">
          <h1 className="text-xl font-semibold tracking-wide text-center">
            Upload Image
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-sm tracking-wide font-semibold">
              You can easily upload your file in any of the following formats:
              PDF, JPG, GIF, PNG, JPEG
            </p>
            <div className="w-[80%] mx-auto p-2">
              <FileInput title="main_image" register={register} />
            </div>

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
            <Textarea
              label="Meta description"
              name="metaDescription"
              {...register("metaDescription")}
            />
            <div className="flex justify-end">
              <Button
                variant="text"
                color="red"
                onClick={() => setOpen(false)}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button
                variant="text"
                color="green"
                type="submit"
                disabled={isLoading}
              >
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
