import React, { Fragment } from "react";
import { Link } from "gatsby";

// import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import NavBar from "../components/navBar/index";
import HeroVideo from "../components/home/index";

const IndexPage = () => (
	<Fragment>
		<SEO title="Home" />
		<NavBar />
		<HeroVideo />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
		<Link to="/page-2/">Go to page 2</Link>
	</Fragment>
);

export default IndexPage;
