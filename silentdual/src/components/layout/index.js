import React from "react";
import { createGlobalStyle } from "styled-components";

import "../../assets/fonts/fonts.scss";
import "./index.scss";

import variables from "../../assets/styles/variables";

import Header from "../../components/header";

const GlobalStyle = createGlobalStyle`

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${variables.din};
    font-size: 16px;
    line-height: 24px;
  }

`;

const Layout = ({ children }) => {
	return (
		<>
			<Header />

			<GlobalStyle />

			{children}
		</>
	);
};

export default Layout;
