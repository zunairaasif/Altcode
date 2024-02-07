import React from "react";
import Head from "next/head";

import Footer from "components/Footer";
import Pages from "components/Industries/pages";
import PageUpButton from "components/PageUpButton";

const Healthcare = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="../images/logo.png" />
        <title>Healthcare Software Development</title>
        <meta
          property="og:title"
          content="Industries/healthcare-software-development"
          key="Industries/healthcare-software-development"
          name="description"
        />
      </Head>
      <Pages desc="Coming Soon..." />
      <Footer />
      <PageUpButton />
    </div>
  );
};

export default Healthcare;
