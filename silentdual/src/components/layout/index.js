import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import variables from "../../assets/styles/variables"

//Assets
import "../../assets/fonts/fonts.scss"
import "./index.scss"

//Data
import data from "../../data";

//Components
import NavBar from "../navBar"
import Footer from "../footer"


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
    overflow: ${({ modalIsOpen }) => modalIsOpen === true ? 'hidden' : 'inherit'};
  }

`;

const Layout = ({ children, modalIsOpen }) => {

  const [handleScroll, setHandleScroll] = useState(null);

  return (

    <>

      <GlobalStyle modalIsOpen={handleScroll} />

      <NavBar modalIsOpen={setHandleScroll} data={data} />

      {children}

      <Footer data={data} />

    </>

  )
}

export default Layout;
