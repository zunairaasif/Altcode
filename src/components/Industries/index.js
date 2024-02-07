import Head from "next/head";
import { Box } from "@mui/material";

import Footer from "../Footer";
import Header from "./components/Header";
import PageUpButton from "components/PageUpButton";

const Industries = () => {
  return (
    <Box>
      <Head>
        <link rel="icon" href="images/logo.png" />
        <title>Industries</title>
        <meta
          property="og:title"
          content="Industries"
          key="Industries"
          name="description"
        />
      </Head>
      <Header />
      <Footer />
      <PageUpButton />
    </Box>
  );
};

export default Industries;
