import React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

import styles from "./styles";
import Navbar from "components/Navbar";
import Typo from "components/Typography";

const Pages = ({ desc }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container sx={styles.bg}>
      <Navbar />
      <Grid
        container
        sx={isMatch ? styles.mobileViewContainer : styles.container}
      >
        <Typo variant="h4" name={desc} />
      </Grid>
    </Grid>
  );
};

export default Pages;
