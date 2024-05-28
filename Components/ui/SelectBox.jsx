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
  readOnly = false,
  multiple = false,
}) => {
  return (
    <Autocomplete
      multiple={multiple}
      id={id}
      size="small"
      options={options}
      getOptionKey={(option) => {
        return option?.id || option || option?.product_categories_id;
      }}
      getOptionLabel={(option) => {
        // Ensure the option is an object and has the necessary properties
        if (typeof option === 'object' && option !== null) {
          return option.name || option.title || '';
        }
        // Return an empty string if the option is not an object
        return '';
      }}
      value={value || "" || [] || {}}
      readOnly={readOnly}
      onChange={(_, value) => onChange(value)}
      sx={{ width: "350px" }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
};

export default SelectBox;
