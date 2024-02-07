import React from "react";
import Head from "next/head";

import Footer from "components/Footer";
import Pages from "components/Industries/pages";
import PageUpButton from "components/PageUpButton";

const Saas = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="../images/logo.png" />
        <title>Saas Application development</title>
        <meta
          property="og:title"
          content="industries/saas-application-development"
          key="industries/saas-application-development"
          name="description"
        />
      </Head>
      <Pages desc="Coming Soon..." />
      <Footer />
      <PageUpButton />
    </div>
  );
};

export default Saas;
