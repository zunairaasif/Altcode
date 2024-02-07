import React from "react";
import { Grid } from "@mui/material";

import styles from "./styles";
import Typo from "components/Typography";

const ServicesBlock = ({ heading, desc, effect }) => {
  return (
    <Grid container item md={3.5} sm={5} xs={12} sx={styles.grid}>
      <Typo variant="h6" name={heading} sx={styles.heading} />
      <Typo variant="body2" name={desc} />
    </Grid>
  );
};

export default ServicesBlock;
