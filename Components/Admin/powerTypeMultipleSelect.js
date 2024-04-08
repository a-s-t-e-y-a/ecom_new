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
      item.products_categories_id === selectedItem
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export default function SingleSelectPowerType({
  label,
  options,
  register,
  name,
  active = true,
}) {
  const theme = useTheme();
  const [values, setvalue] = React.useState("");

  const handleChange = (event, value) => {
    setvalue(value);
  };

  return (
    <div>
      <FormControl sx={{ width: 298 }} size="small">
        <InputLabel id={label}>{label}</InputLabel>
        <Autocomplete
          {...register(name)}
          disablePortal
          disabled={active ? false : true}
          id="power_type"
          options={options?.map((value) => value?.name) || []}
          value={values}
          onChange={(e, val) => handleChange(e, val)}
          renderInput={(params) => (
            <TextField {...params} label="Select Power Type" />
          )}
        />
      </FormControl>
    </div>
  );
}
