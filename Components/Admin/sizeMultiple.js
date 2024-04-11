import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
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
      item.products_categories_id === selectedItem
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export default function SingleSelectSize({ label, options, register, name }) {
  const theme = useTheme();

  const handleChange = (event) => {};

  return (
    <div className="w-[100px]">
      <FormControl sx={{ width: 200 }} size="small">
        <InputLabel id={label}>{label}</InputLabel>
        <Autocomplete
          multiple
          id="select_size"
          options={options?.map((value) => value?.name) || []}
          sx={{ width: 298 }}
          renderInput={(params) => (
            <TextField {...params} {...register(name)} label="Select Size" />
          )}
        />
      </FormControl>
    </div>
  );
}
