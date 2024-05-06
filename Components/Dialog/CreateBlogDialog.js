import { Fragment, useEffect, useState } from "react";
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

const CreateBlogDialog = (props) => {
  const { open, setOpen, edit } = props;
  const { register, handleSubmit, control, setValue } = useForm();
  // const [loading, setLoading] = useState(false);
  const { mutate: update } = UpdateBlog(edit?.id, setOpen); // State for loading button
  const { mutate,isPending:loading } = useMutation({
    mutationFn: CreateBlog,
    onSuccess: (data) => {
      toast.success("Blogs created successfully");
     if(setOpen) setOpen(false)
       // Set loading to false after mutation
    },
    onError: (err) => {
      toast.error(err.message);
      setOpen(false);
       // Set loading to false on error
    },
  });

  const editPayload = {
    heading: edit?.heading,
    thumb: edit?.thumb,
    description:edit?.description,
    url: edit?.url,
    seo_title: edit?.heading,
    metaDescription: edit?.MetaDescription?.metaDescription,
  };

  useEffect(() => {
    for (const key in editPayload) {
      setValue(key, editPayload[key]);
    }
  }, [edit, setValue]);
  const onSubmit = async (data) => {
    setLoading(true); // Set loading to true on form submit
    const form = new FormData();
    form.append("file", data.file[0]);
    delete data.file;

    function replaceSpaceWithHyphen(text) {
      return text.trim().replace(/\s+/g, "-");
    }

    const payload = {
      description: data?.description,
      heading: data?.heading,
      tag: data?.tag,
      metaDescription: data?.metaDescription,
      seo_title: data?.heading,
      thumb: data?.thumb,
      url: replaceSpaceWithHyphen(data?.url),
    };
    console.log(data)
    form.append("data", JSON.stringify(payload));
    if (Object.keys(edit).length > 0) {
      update(form);
    } else {
      mutate(form);
    }
  };

  return (
    <Fragment>
      <Dialog open={open} className="border-2 overflow-scroll w-[100%]">
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
              <div>
                <Input label="SEO URI" name="url" {...register("url")} />
              </div>
              <div>
                <Input label="Thumb" name="thumb" {...register("thumb")} />
              </div>
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
              <div>
                <Textarea label="Tags" name="tags" {...register("tag")} />
              </div>
              <div>
                <Textarea
                  label="Meta description"
                  name="metaDescription"
                  {...register("metaDescription")}
                />
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
                <Button
                  variant="text"
                  color="green"
                  type="submit"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#1C64F2"
                        ></path>
                      </svg>
                      <span>Loading...</span>
                    </span>
                  ) : (
                    <span>Confirm</span>
                  )}
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
