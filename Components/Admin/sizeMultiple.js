import * as React from "react";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Controller, useFormContext } from "react-hook-form";

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

export default function SingleSelectSize({
  label,
  options,
  control,
  name,
  active = true,
}) {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ width: 298 }} size="small">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Autocomplete
              {...field}
              disablePortal
              disabled={!active}
              options={options || []}
              getOptionLabel={(option) => option.name}
              onChange={(event, value, reason, details) =>
                field.onChange(value ? value.id : null)
              }
              renderInput={(params) => <TextField {...params} label={label} />}
            />
          )}
        />
      </FormControl>
    </div>
  );
}
