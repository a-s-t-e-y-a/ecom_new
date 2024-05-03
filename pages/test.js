import SelectBox from "@/Components/ui/SelectBox";
import React from "react";
import { useForm, Controller } from "react-hook-form";


function Test() {
  const [value, setValue] = React.useState({
    label: "Male",
    value: "male",
  });

  const { reset } = useForm({
    defaultValues: {
      gender: null,
    },
  });

  React.useEffect(() => {
    reset({
      gender: {
        label: "Female",
        value: "female",
      },
    });
  }, []);

  console.log("see this", value);

  return (
    <div className="h-screen grid place-content-center bg-slate-200">
      <SelectBox
        label="Gender"
        value={value}
        onChange={setValue}
        options={[
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Female",
            value: "female",
          },
          {
            label: "Other",
            value: "other",
          },
        ]}
      />
    </div>
  );
}
export default Test;
