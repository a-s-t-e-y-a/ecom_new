import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import Image from "next/image";

const WhatsappIcon = () => {
  return (
    <div
      className="fixed right-6 bottom-14 rounded-full"
      style={{ zIndex: "1000" }}
    >
      <Tooltip title="WhatsApp Now">
        <IconButton>
          <Image
            width={50}
            height={50}
            src="/whatsapp.gif"
            alt="Contact"
            className="  "
          />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default WhatsappIcon;
