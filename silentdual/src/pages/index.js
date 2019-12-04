import React from "react";
import Layout from "../components/layout";
import Specs from "../components/specs";
import Hero from "../components/hero";
import InstallSection from "../components/installSection";
import DiscoverSection from "../components/discoverSection";

const IndexPage = () => (
	<Layout className="layout" style={{ width: "100vw" }}>
		<Hero />
		<Specs />
		<DiscoverSection />
		<InstallSection />
	</Layout>
);

export default IndexPage;
