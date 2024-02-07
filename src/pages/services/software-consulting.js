import React from "react";
import Head from "next/head";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Typo from "components/Typography";
import PageUpButton from "components/PageUpButton";

const SoftwareConsulting = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Head>
        <link rel="icon" href="../images/logo.png" />
        <title>Software Consulting</title>
        <meta
          property="og:title"
          content="industries/software-consulting"
          key="industries/software-consulting"
          name="description"
        />
      </Head>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050c1c",
          color: "#c0ceeb",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "100px",
        }}
      >
        <Navbar />
        <Grid
          container
          sx={
            isMatch
              ? {
                  display: "flex",
                  marginTop: "40%",
                  padding: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }
              : {
                  display: "flex",
                  marginTop: "15%",
                  padding: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          <Typo variant="h4" name="Coming Soon..." />
        </Grid>
      </Grid>
      <Footer />
      <PageUpButton />
    </div>
  );
};

export default SoftwareConsulting;
