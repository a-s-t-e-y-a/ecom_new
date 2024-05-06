import { Autocomplete, FormControl, TextField } from "@mui/material";
import React from "react";

const SelectBox = ({
  size = "medium",
  label = "",
  value,
  onChange,
  multiple,
  options = [],
}) => {
  const selectedValue = React.useMemo(() => {
    if (typeof value === "object") {
      // Handle object type values
      return options.find((option) => option.id === value.id) || null;
    } else {
      // Handle primitive type values
      return options.find((option) => option === value) || null;
    }
  }, [value, options]);
  console.log(options, "options")
  console.log(value, 'value')
  console.log(selectedValue, 'selectedValue')

  return (
    <FormControl sx={{ width: 300 }} size={size}>
      <Autocomplete
        disablePortal
        options={options}
        getOptionKey={(option) => option.id || option}
        getOptionLabel={(option) => option.label || option}
        autoHighlight 
        multiple={multiple ? true : false}
        sx={{ width: 300 }}
        value={selectedValue}
        onChange={(_, newValue) => onChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label={label}/>
        )}
      />
    </FormControl>
  );
};

export default SelectBox;
