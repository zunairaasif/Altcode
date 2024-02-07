import React from "react";
import { Box, Grid } from "@mui/material";

import styles from "../styles";
import coma from "images/coma.jpg";
import Typo from "components/Typography";
import Image from "next/image";

const Blogs = ({ heading, text }) => {
  return (
    <Grid container sx={styles.blogs}>
      <Box sx={styles.header}>
        <Image src={coma} alt="coma" width={40} style={{ marginRight: "5%" }} />
        <Typo variant="h6" name={heading} />
      </Box>
      <Typo variant="body2" name={text} />
    </Grid>
  );
};

export default Blogs;
