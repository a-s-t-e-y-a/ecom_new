'use client';
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const SelectBox = ({
  options = [],
  value,
  onChange,
  label = 'Sample Label',
  placeholder = '',
  id,
  readOnly = false,
  multiple = false,
}) => {
  return (
    <Autocomplete
      multiple={multiple}
      id={id}
      options={options}
      getOptionKey={(option) =>{
        console.log(option, "key")
        return option.id || option || option.product_categories_id
      }}
      getOptionLabel={(option) => {
        console.log(option, "")
        return option.name || option
      }}
      value={value || "" || [] || {}}
      readOnly={readOnly}
      onChange={(_, value) => onChange(value)}
      sx={{ width: '300px' }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
};

export default SelectBox;
