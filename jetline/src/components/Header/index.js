import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Logo from "../../images/logo.inline.svg";

function Header({ nav }) {

  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-gray-900 fixed w-full z-10">
      <div className="flex flex-wrap items-center justify-between py-4 px-12 mx-auto">
        <AnchorLink to="#hero">
          <Logo className="h-12"/>
        </AnchorLink>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {nav.map((link) => (
            <AnchorLink
              className="block text-sm font-bold mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-50"
              key={link.item}
              to={link.route}
            >
              {link.item}
            </AnchorLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  nav: PropTypes.array
};
