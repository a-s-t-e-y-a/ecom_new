import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    fontWeight: item.products_categories_id === selectedItem ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

export default function SingleSelectSize({ label, options ,register,name}) {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = React.useState('');

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 298 }} size="small">
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
          {options&&options.map((item) => (
            <MenuItem
              key={item.id}
              value={item.id}
              style={getStyles(item, selectedItem, theme)}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
