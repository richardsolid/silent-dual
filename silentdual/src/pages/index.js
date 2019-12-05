import React from "react";

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
