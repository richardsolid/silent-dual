import React from "react";
import Layout from "../components/layout";
import Specs from "../components/specs";
import Hero from "../components/hero";

import Wrapper from "../utils/grid/wrapper";
//import Row from "../utils/grid/row"
//import Column from "../utils/grid/column"

const IndexPage = () => (
	<Layout className="layout" style={{ width: "100vw" }}>
		<Hero />
		<Wrapper>
			<Specs />
		</Wrapper>
	</Layout>
);

export default IndexPage;
