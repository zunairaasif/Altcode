import { Grid, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import styles from "./styles";
import Typo from "../Typography";

const Bullets = ({ text, md, sm, xs }) => {
  return (
    <Grid item md={md} sm={sm} xs={xs}>
      <Box sx={styles.desc}>
        <ArrowRightIcon fontSize="large" sx={styles.icon} />
        <Typo variant="body2" sx={styles.text} name={text} />
      </Box>
    </Grid>
  );
};

export default Bullets;
