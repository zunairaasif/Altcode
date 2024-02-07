import React from "react";
import Head from "next/head";

import Footer from "components/Footer";
import Pages from "components/Industries/pages";
import PageUpButton from "components/PageUpButton";

const Retail = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="../images/logo.png" />
        <title>Retail & eCommerce Software Development</title>
        <meta
          property="og:title"
          content="Industries/retail-&-eCommerce-software-development"
          key="Industries/retail-&-eCommerce-software-development"
          name="description"
        />
      </Head>
      <Pages desc="Coming Soon..." />
      <Footer />
      <PageUpButton />
    </div>
  );
};

export default Retail;
