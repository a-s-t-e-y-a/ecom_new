import CustomerImage from "@/Components/CustomImage";
import SelectBox from "@/Components/ui/SelectBox";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

function Test() {
  const [image, setImage] = useState(null);
  const { register, handleSubmit, reset, control } = useForm();
  return (
    <div className="h-screen grid place-content-center bg-slate-200">
      <CustomerImage
      />
    </div>
  );
}
export default Test;
