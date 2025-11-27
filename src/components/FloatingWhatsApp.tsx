import React from "react";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Tooltip from "@mui/material/Tooltip";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with actual number
  };

  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left">
      <Fab
        color="success"
        aria-label="whatsapp"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          width: 70,
          height: 70,
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 40 }} />
      </Fab>
    </Tooltip>
  );
};

export default FloatingWhatsApp;
