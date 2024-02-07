import React from "react";
import Head from "next/head";

import Footer from "components/Footer";
import Pages from "components/Industries/pages";
import PageUpButton from "components/PageUpButton";

const RealEstate = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="../images/logo.png" />
        <title>Real Estate Software Development</title>
        <meta
          property="og:title"
          content="Industries/realEstate-software-development"
          key="Industries/realEstate-software-development"
          name="description"
        />
      </Head>
      <Pages desc="Coming Soon..." />
      <Footer />
      <PageUpButton />
    </div>
  );
};

export default RealEstate;
