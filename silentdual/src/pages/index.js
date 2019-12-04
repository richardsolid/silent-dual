import React from "react";
import Layout from "../components/layout";
import Specs from "../components/specs";
import Hero from "../components/hero";
import InstallSection from "../components/installSection";

const IndexPage = () => (
	<Layout className="layout" style={{ width: "100vw" }}>
		<Hero />
		<Specs />
		<InstallSection />
	</Layout>
);

export default IndexPage;
