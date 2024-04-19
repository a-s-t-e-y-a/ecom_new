import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import CreateBlog from "@/utils/mutations/useCreateblog";
import { useForm } from "react-hook-form";
import FileInput from "../Admin/FileInput";
import QuillEditor from "../Admin/QuillEditor";

const CreateBlogDialog = (props) => {
  const { open, setOpen, handleOpen } = props;
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation({
    mutationFn: CreateBlog,
    onSuccess: (data) => {
      toast.success("Blogs created Successfuly");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    // mutate({
    //   heading: e.target?.heading?.value,
    //   description: e.target?.discription?.value,
    //   seo_title: e.target?.tags.value,
    //   thumb: e.target?.Image?.value,
    // });
  };
  return (
    <Fragment>
      <Dialog open={open} className="border-2 overflow-scroll w-[90%]">
        <DialogBody divider className="">
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

              <div>
                <Input
                  label="Heading"
                  name="heading"
                  {...register("heading")}
                />
              </div>

              <div className="w-[90%]">
                <QuillEditor {...register("description")} />
              </div>
              <div>
                <Textarea label="Tags" name="tags" {...register("tag")} />
              </div>
              <div>
                <Button
                  variant="text"
                  color="red"
                  onClick={() => setOpen(false)}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="text" color="green" type="submit">
                  <span>Confirm</span>
                </Button>
              </div>
            </form>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default CreateBlogDialog;
