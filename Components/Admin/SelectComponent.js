import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SelectComponent = ({label,options}) => {
 

  return (
    <FormControl sx={{ minWidth:298 }} size="small">
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        id={label}
        label={label}
      >
        {
          options.map((data,index)=>(
            <MenuItem value={data} key={index}>{data}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

export default SelectComponent