import { Fragment} from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";
import AddressForm from "../User/AddressForm";


const FormDialog = (props) => {
  const {open,setOpen,handleOpen} = props
  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} 
        className="border"
        animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody divider className="w-full">
          <AddressForm />

          <Button
            variant="text"
            color="red"
            onClick={()=>setOpen(false)}
            className="text-orange-600 mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="text"
            className="text-blue-700 mr-1"
            onClick={handleOpen}
          >
            <span>Confirm</span>
          </Button>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}


export default FormDialog