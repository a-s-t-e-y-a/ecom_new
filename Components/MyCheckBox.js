import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const MyCheckBox = ({ label, onChange, value, checked, disabled }) => {
  return (
    <div className="col-span-1">
      <FormControlLabel
        control={
          <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 15 } }}
            disabled={disabled}
            onChange={onChange}
            value={value}
            checked={checked}
          />
        }
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: 12,
            letterSpacing: 1,
            color: "#374151",
          },
        }}
        label={label}
      />
    </div>
  );
};

export default MyCheckBox;
