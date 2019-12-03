import React, { useState, Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import variables from "../../assets/styles/variables";

//Assets
import "../../assets/fonts/fonts.scss";
import "./index.scss";

//Data
import data from "../../data";

//Components
import NavBar from "../navBar";
import Footer from "../footer";

const GlobalStyle = createGlobalStyle`

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${variables.din};
    font-size: 16px;
    line-height: 24px;
    margin: 100px 0 0;
    padding: 0;
    overflow: ${({ modalIsOpen }) =>
			modalIsOpen === true ? "hidden" : "inherit"};
    };
     max-width: 100vw;
    overflow-x: hidden;

`;

const Layout = ({ children, modalIsOpen }) => {
	const { navbar, footer } = data;

	const [handleScroll, setHandleScroll] = useState(null);

	return (
		<Fragment>
			<GlobalStyle modalIsOpen={modalIsOpen} />

			<NavBar modalIsOpen={setHandleScroll} data={navbar} />

			{children}

			<Footer data={footer} />
		</Fragment>
	);
};

export default Layout;
