import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import Image from "next/image";

const WhatsappIcon = () => {
  return (
    <a
      className="fixed right-6 bottom-14 rounded-full"
      style={{ zIndex: "1000" }}
      href="https://bit.ly/3ej8xZJ"
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
    </a>
  );
};

export default WhatsappIcon;
