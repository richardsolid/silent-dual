import React from "react";
import { Helmet } from "react-helmet";

//components:
import Layout from "../components/layout";
import Hero from "../components/hero";
import Specs from "../components/specs";
import Modelos from "../components/modelos";
import InstallSection from "../components/installSection";
import DiscoverSection from "../components/discoverSection";
import FormSection from "../components/formSection";
import Lead from "../components/lead";

const IndexPage = () => (
  <Layout className="layout" style={{ width: "100vw" }}>
		<Helmet>
      <meta name="format-detection" content="telephone=no"/>
      <title>S&P | Silent Dual</title>
			<meta name="description" content="Los extractores de baño más inteligentes diseñados para una fácil instalación."/>
			<meta property="og:url" content="https://info.solerpalau.com/silent-dual/" />
			<meta property="og:title" content="S&amp;P | Silent Dual" />
			<meta property="og:description" content="Los extractores de baño más inteligentes diseñados para una fácil instalación." />
			<meta property="og:image" content="https://info.solerpalau.com/silent-dual/rrss.jpg" />

			<meta property="og:url" content="https://info.solerpalau.com/silent-dual/" />
			<meta property="og:title" content="S&amp;P | Silent Dual" />
			<meta property="og:description" content="Los extractores de baño más inteligentes diseñados para una fácil instalación." />
			<meta property="og:image" content="https://info.solerpalau.com/silent-dual/rrss.jpg" />
    </Helmet>
    <Hero />
    <Lead />
    <Specs />
    <DiscoverSection />
    <InstallSection />
    <Modelos />
    <FormSection />
  </Layout>
);

export default IndexPage;
