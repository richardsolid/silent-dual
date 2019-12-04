import React from "react";

//components:
import Layout from "../components/layout";
import Hero from "../components/hero";
import Specs from "../components/specs";
import Modelos from "../components/modelos";

import Wrapper from "../utils/grid/wrapper";
//import Row from "../utils/grid/row"
//import Column from "../utils/grid/column"

const IndexPage = () => (
	<Layout className="layout" style={{ width: "100vw" }}>
		<Hero />
		<Wrapper>
			<Specs />
			<Modelos />
		</Wrapper>
	</Layout>
);

export default IndexPage;
