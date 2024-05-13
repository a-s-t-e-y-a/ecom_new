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
      id={id}
      key={value}
      options={options}
      multiple={multiple}
      filterSelectedOptions
      getOptionKey={(option) => option.id}
      getOptionLabel={(option) => {
        return option?.label;
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
