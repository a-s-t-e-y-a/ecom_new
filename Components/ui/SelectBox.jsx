import {
  Autocomplete,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";

const SelectBox = ({
  size = "medium",
  label = "",
  value,
  onChange,
  options = [],
}) => {

  const selectedValue = React.useMemo(
    () => value,
    [value],
  );

  return (
    <FormControl sx={{ width: 300 }} size={size}>
      <Autocomplete
        disablePortal
        id="gender"
        options={options}
        sx={{ width: 300 }}
        value={selectedValue}
        onChange={(_, newValue) => onChange(newValue)}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </FormControl>
  );
};

export default SelectBox;
