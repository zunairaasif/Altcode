import React from "react";
import { Typography } from "@mui/material";

const Typo = ({ name, variant, sx, onClick }) => {
  return (
    <Typography variant={variant} sx={sx} onClick={onClick}>
      {name}
    </Typography>
  );
};

export default Typo;
