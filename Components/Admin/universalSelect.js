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

export default function SingleSelectUniversal({
  options,
  register,
  name,
  size = "small",
  setactive,
}) {
  const theme = useTheme();

  const handleChange = (event) => {
    event.target.value === "No" ? setactive(false) : setactive(true);
  };

  return (
    <div>
      <FormControl sx={{ width: 300 }} size={size}>
        <Autocomplete
          disablePortal
          id="select_lens"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} {...register(name)} label="Select lens" />
          )}
        />
      </FormControl>
    </div>
  );
}
