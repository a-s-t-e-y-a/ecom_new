import { Input, Textarea } from "@material-tailwind/react";
import React from "react";
const AddressForm = () => {
  return (
    <div className="px-6 py-6 rounded-md relative">
    <p className="tracking-wide text-base font-semibold mb-5">Create Address</p> 

      <form className="space-y-5">
            <Input label="Name" />
            <Input label="Address line 1" />
            <Input label="Address line 2" />
            <div className="flex gap-2">
                <Input label="City" />
                <Input label="State" />
            </div>
            <div className="flex gap-2">
                <Input label="Pin Code" />
                <Input label="Country" />
            </div>
            <Textarea label="Delivery information"/>
          </form>
    </div>
  );
};

export default AddressForm;
