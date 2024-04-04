import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";

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
  label,
  options,
  register,
  name,
  size = "small",
  setactive,
}) {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
    event.target.value === "No" ? setactive(false) : setactive(true);
  };

  return (
    <div>
      <FormControl sx={{ width: 300 }} size={size}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          {...register(name)}
          labelId={label}
          id={label}
          value={selectedItem}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
        >
          {options &&
            options?.map((item, index) => (
              <MenuItem
                key={index}
                value={item}
                style={getStyles(item, selectedItem, theme)}
              >
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
