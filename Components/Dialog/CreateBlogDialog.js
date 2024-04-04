"use client";
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
const CreateBlogDialog = (props) => {
  const { open, setOpen, handleOpen } = props;
  const [Image, SetImage] = useState({});
  const [Heading, SetHeading] = useState("");
  const [Description, SetDescription] = useState("");

  const { mutate } = useMutation({
    mutationFn: CreateBlog,
    onSuccess: (data) => {
      toast("Blogs created Successfuly");
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
      toast(err.message);
    },
  });
  const SumbitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("thumb", e.target?.Image?.value);
    formData.append("data", JSON.stringify());
    mutate({
      headingc: e.target?.heading?.value,
      description: e.target?.discription?.value,

      thumb: e.target?.Image?.value,
    });
  };
  return (
    <Fragment>
      <Dialog open={open} className="border p-10">
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

              <h1>
                <Input
                  label="Heading"
                  name="heading"
                  onChange={(e) => SetHeading(e.target.value)}
                />
              </h1>

              <div>
                <Textarea
                  label="Additionals Comments...."
                  name="discription"
                  onChange={(e) => SetHeading(e.target.value)}
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
