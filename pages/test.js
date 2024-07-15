import CustomerImage from "@/Components/CustomImage";
import SelectBox from "@/Components/ui/SelectBox";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

function Test() {
  const [image, setImage] = useState(null);
  const { register, handleSubmit, reset, control } = useForm();
  console.log(image, 'image')
  return (
    <div className="h-screen grid place-content-center bg-slate-200">
      {/* <Controller
        name="avatar"
        control={control}
        render={({field:{onChange, value}}) => {
          return (
            <>
              
              
            </>
          )
        }}
      /> */}
      <CustomerImage
      onChange={(e)=>setImage(e)}
      value={image}
      />
    </div>
  );
}
export default Test;
