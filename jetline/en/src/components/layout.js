import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, nav, footer }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header nav={nav}/>

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer text={footer} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  nav: PropTypes.array,
  footer: PropTypes.string
};

export default Layout;
