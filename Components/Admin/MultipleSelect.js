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


function getStyles(item, data, theme) {
  return {
    fontWeight:
      data.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({label,options}) {
  const theme = useTheme();
  const [data, setData] = React.useState([]);

  const handleChange = (event) => {
    const { target: { value },} = event;
    setData( typeof value === 'string' ? value.split(',') : value,);
  };
 
  return (
    <div>
      <FormControl sx={{ width:298 }} size='small'>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={label}
          multiple
          value={data}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
        >
          {options.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, data, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
