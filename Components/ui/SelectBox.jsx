"use client";
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const SelectBox = ({
  options = [],
  value,
  onChange,
  label = "Sample Label",
  placeholder = "",
  id,
  multiple = false,
}) => {
  return (
    <Autocomplete
      multiple={multiple}
      id={id}
      options={options}
      getOptionKey={(option) =>
        option?.products_categories_id || option?.id || option
      }
      getOptionLabel={(option) => {
        return option?.name || option;
      }}
      value={value}
      onChange={(_, value) => onChange(value)}
      sx={{ width: "300px" }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
};

export default SelectBox;
