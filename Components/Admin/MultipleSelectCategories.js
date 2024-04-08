import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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

export default function SingleSelectCategories({
  label,
  options,
  register,
  name,
}) {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedItem(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <FormControl sx={{ width: 298 }} size="small">
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          multiple
          id="productCategory"
          label="Product Category"
          value={selectedItem}
          onChange={handleChange}
        >
          {options?.map((option, indx) => (
            <MenuItem value={option?.name} key={indx}>
              {option?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
