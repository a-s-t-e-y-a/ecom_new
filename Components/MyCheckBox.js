import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

const MyCheckBox = ({ label}) => {
    
    return (
        <FormControlLabel 
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }} />} 
            sx={{ '& .MuiFormControlLabel-label': { fontSize: 12, letterSpacing: 1, color : '#374151' } }} 
            label={label} 
        />
    )
}

export default MyCheckBox