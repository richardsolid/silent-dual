import React, { useState } from "react";
import PropTypes from "prop-types";
import scrollTo from 'gatsby-plugin-smoothscroll';
import Logo from "../../images/logo.inline.svg";
import {useTransition, animated} from 'react-spring';

function Header({ nav }) {

  const [isExpanded, toggleExpansion] = useState(false);

  const transitions = useTransition(isExpanded, null, {
    config: { duration: 250 },
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0 },
  })

  function handleClick(route){
    toggleExpansion(false)
    scrollTo(route)
  }

  return (
    <header className="bg-black fixed w-full z-10">
      <div className="flex flex-wrap items-center justify-between py-3 px-3 md:px-6 lg:px-12 lg:py-4 mx-auto">
        <Logo  onClick={() => handleClick("#hero")} className="h-10 w-10 sm:h-12 sm:w-12 cursor-pointer"/>

        <button
          className="flex items-center block text-white md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect fill="#FFFFFF" x="0" y="0" width="20" height="3"></rect>
              <rect fill="#FFFFFF" x="0" y="8" width="20" height="3"></rect>
              <rect fill="#FFFFFF" x="0" y="16" width="20" height="3"></rect>
            </g>
          </svg>
        </button>

        <nav
          className="hidden md:flex block flex-row items-center w-auto"
        >
          {nav.map((link) => (
            <button onClick={() => handleClick(link.route)}
              className="outline-none text-sm font-bold text-white my-8 md:my-0 hover:text-gray-500 transition duration-200 no-underline md:inline-block md:mt-0 md:ml-10 lg:ml-50"
              key={link.item}
              to={link.route}
            >
              {link.item}
            </button>
          ))}
        </nav>

        {transitions.map(({ item, key, props }) => item &&
          <animated.nav
            style={props}
            key={key}
            className="flex flex-col w-full h-screen"
          >
            {nav.map((link) => (
              <button onClick={() => handleClick(link.route)}
                className="outline-none text-sm font-bold text-white my-8 md:my-0 hover:text-gray-500 transition duration-200 no-underline md:inline-block md:mt-0 md:ml-50"
                key={link.item}
                to={link.route}
              >
                {link.item}
              </button>
            ))}
          </animated.nav>
        )}
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  nav: PropTypes.array
};
