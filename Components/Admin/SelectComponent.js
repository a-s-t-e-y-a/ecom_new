import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

const SelectComponent = ({ label, options, control, name }) => {
  return (
    <FormControl sx={{ minWidth: 298 }} size="small">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            id={name}
            label={label}
            labelId={`${name}-label`}
            value={field.value || ""}
            key={`${name}-select`}
          >
            {options?.map((data) => (
              <MenuItem value={data.id} key={data.id}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default SelectComponent;
