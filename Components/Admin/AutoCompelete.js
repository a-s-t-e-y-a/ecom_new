import React from "react";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
function AutoCompeletes({
  label,
  options,
  name,
  control,
  size = "small",
  register,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          getOptionLabel={(option) => option}
          sx={{ width: 300 }}
          size={size}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              {...register(name)}
              variant="outlined"
            />
          )}
        />
      )}
    />
  );
}

export default AutoCompeletes;
