import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import React from "react";

const WhatsappIcon = () => {
  return (
    <div className="fixed right-5 bottom-6 rounded-full" style={{ zIndex: "1000" }}>
      <Tooltip title="WhatsApp Now">
        <IconButton>
            <img src="whatsapp.gif" alt="Contact" className="mix-blend-multiply"/>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default WhatsappIcon;
