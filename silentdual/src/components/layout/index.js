import React from "react";
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
    margin: 0;
    padding: 0;
    overflow: inherit;
    
    &.scrollDisabled {
      overflow: hidden;
    }

  }
`;

const Layout = ({ children }) => {
  const { navbar, footer } = data;

  return (
    <>
      <GlobalStyle />

      <NavBar data={navbar} />

      {children}

      <Footer data={footer} />
    </>
  );
};

export default Layout;
