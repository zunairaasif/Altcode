import Head from "next/head";
import { Box } from "@mui/material";

import Footer from "../Footer";
import Header from "./components/Header";
import PageUpButton from "components/PageUpButton";

const SoftwareDevelopment = () => {
  return (
    <Box>
      <Head>
        <link rel="icon" href="images/logo.png" />
        <title>Software Development</title>
        <meta
          property="og:title"
          content="Software Development"
          key="Software Development"
          name="description"
        />
      </Head>
      <Header />
      <Footer />
      <PageUpButton />
    </Box>
  );
};

export default SoftwareDevelopment;
