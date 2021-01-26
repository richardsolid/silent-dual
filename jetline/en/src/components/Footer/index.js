import React from 'react';
import PropTypes from "prop-types";

export default function Footer({ text }) {
  return(
    <footer className="bg-black">
      <nav className="flex justify-center max-w-4xl mx-auto text-sm p-5 text-white font-bold">
        {text}
      </nav>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string
}