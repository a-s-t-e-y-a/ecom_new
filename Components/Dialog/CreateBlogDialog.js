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
    onSuccess: () => {
      toast("Blogs created Successfuly");
    },
    onError: (err) => {
      toast(err.message);
    },
  });
  const SumbitHandler = () => {
    if (Image && Heading !== "" && Description !== "") {
      const fromdata = new FormData();
      fromdata.append("files", Image);
      fromdata.append("data", JSON.stringify({ Image, Heading, Description }));
      mutate(fromdata);
    }
  };
  return (
    <Fragment>
      <Dialog open={open} className="border p-10">
        <DialogBody divider className="">
          <div className="w-full space-y-5 text-gray-700 overflow-y-scroll ">
            <h1 className="text-xl font-semibold tracking-wide text-center">
              Upload Image
            </h1>
            <div className="space-y-4">
              <p className="text-sm tracking-wide font-semibold">
                You can easily upload your file in any of the following formats:
                PDF, JPG, GIF, PNG, JPEG
              </p>
              <div className="w-[90%] mx-auto">
                <UploadImage Image={SetImage} />
              </div>

              <h1>
                <Input
                  label="Heading"
                  onChange={(e) => SetHeading(e.target.value)}
                />
              </h1>

              <div>
                <Textarea
                  label="Additionals Comments...."
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
                <Button
                  variant="text"
                  color="green"
                  onClick={() => SumbitHandler()}
                >
                  <span>Confirm</span>
                </Button>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default CreateBlogDialog;
