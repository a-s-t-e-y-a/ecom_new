import { Fragment } from "react";
import { Button, Dialog, DialogBody, Input, Textarea } from "@material-tailwind/react";
import UploadImage from "../Global/UploadImage";

const CreateBlogDialog = (props) => {
  const { open, setOpen, handleOpen } = props;

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} className="border">
        <DialogBody divider className="">
          <div className="w-full space-y-5 text-gray-700 overflow-y-scroll ">
            <h1 className="text-xl font-semibold tracking-wide text-center">Upload Image</h1>
            <div className="space-y-4">
                <p className="text-sm tracking-wide font-semibold">You can easily upload your file in any of the following formats: PDF, JPG, GIF, PNG, JPEG</p>
                <div className="w-[90%] mx-auto"><UploadImage /></div>
                
                <h1>
                  <Input label="Heading" />
                </h1>

                <div>
                    <Textarea label="Additionals Comments...." />
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
                    <Button variant="text" color="green" onClick={handleOpen}>
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
