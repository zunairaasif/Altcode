import React from "react";
import Head from "next/head";

import Footer from "components/Footer";
import Pages from "components/Industries/pages";
import PageUpButton from "components/PageUpButton";

const Startup = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="../images/logo.png" />
        <title>Startup Product Development</title>
        <meta
          property="og:title"
          content="Industries/startup-product-development"
          key="Industries/startup-product-development"
          name="description"
        />
      </Head>
      <Pages desc="Coming Soon..." />
      <Footer />
      <PageUpButton />
    </div>
  );
};

export default Startup;
