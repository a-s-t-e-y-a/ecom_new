import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import UploadImage from "../Global/UploadImage";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import CreateBlog from "@/utils/mutations/useCreateblog";
import { useForm } from "react-hook-form";
const CreateBlogDialog = (props) => {
  const { open, setOpen, handleOpen } = props;
  const [Image, SetImage] = useState({});
  const [Heading, SetHeading] = useState("");
  const [Description, SetDescription] = useState("");
  const [altTags, SetaltTags] = useState("");
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
  const SumbitHandler = (e) => {
    e.preventDefault();
    mutate({
      heading: e.target?.heading?.value,
      description: e.target?.discription?.value,
      seo_title: e.target?.tags.value,
      thumb: e.target?.Image?.value,
    });
  };
  return (
    <Fragment>
      <Dialog open={open} className="border">
        <DialogBody divider className="">
          <div className="w-full space-y-5 text-gray-700 overflow-y-scroll ">
            <h1 className="text-xl font-semibold tracking-wide text-center">
              Upload Image
            </h1>
            <form className="space-y-4" onSubmit={(e) => SumbitHandler(e)}>
              <p className="text-sm tracking-wide font-semibold">
                You can easily upload your file in any of the following formats:
                PDF, JPG, GIF, PNG, JPEG
              </p>
              <div className="w-[90%] mx-auto">
                <UploadImage name="Image" />
              </div>

              <div>
                <Input
                  label="Heading"
                  name="heading"
                  value={Heading}
                  onChange={(e) => SetHeading(e.target.value)}
                />
              </div>

              <div>
                <Textarea
                  label="Additionals Comments...."
                  name="discription"
                  value={Description}
                  onChange={(e) => SetDescription(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  label="Tags"
                  name="tags"
                  value={altTags}
                  onChange={(e) => SetaltTags(e.target.value)}
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
