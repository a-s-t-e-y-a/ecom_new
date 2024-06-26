import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 298,
    },
  },
};

function getStyles(item, selectedItem, theme) {
  return {
    fontWeight:
      item?.products_categories_id === selectedItem
        ? theme?.typography?.fontWeightMedium
        : theme?.typography?.fontWeightRegular,
  };
}

export default function SingleGenderSelect({
  label,
  options,
  register,
  name,
  size = "small",
}) {
  const theme = useTheme();

  const handleChange = (event) => {};

  return (
    <div>
      <FormControl sx={{ width: 300 }} size={size}>
        <InputLabel id={label}>{label}</InputLabel>
        <Autocomplete
          disablePortal
          id="gender"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} {...register(name)} label="Gender" />
          )}
        />
      </FormControl>
    </div>
  );
}
