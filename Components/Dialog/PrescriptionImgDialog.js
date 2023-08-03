import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import UploadImage from "../Global/UploadImage";

const PrescriptionImgDialog = (props) => {
  const { openPreImg, setOpenPreImg, handleOpenImg } = props;

  return (
    <Fragment>
      <Dialog open={openPreImg} handler={handleOpenImg} className="border">
        <DialogBody divider>
          <div className="w-full space-y-5 text-gray-700">
            <h1 className="text-xl font-semibold tracking-wide text-center">Upload Image</h1>
            <div className="space-y-4">
                <p className="text-sm tracking-wide font-semibold">You can easily upload your prescription file in any of the following formats: PDF, JPG, GIF, PNG, JPEG</p>
                <div className="w-[80%] mx-auto"><UploadImage /></div>
                <div className="space-x-2">
                    <input type="checkbox" id="checkBox" name="checkBox" value="True"/>
                    <label for="checkBox" className="text-sm tracking-wide font-semibold">My prescription includes prism (+$30)</label>
                </div>
                <div>
                    <Textarea label="Additionals Comments...." />
                </div>
                <div>
                    <Button
                      variant="text"
                      color="red"
                      onClick={() => setOpenPreImg(false)}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>
                    <Button variant="text" color="green" onClick={handleOpenImg}>
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

export default PrescriptionImgDialog;
