import { Input, Textarea } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
const AddressForm = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <></>
  );
};

export default AddressForm;
