import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import MarkdownContent from "../MarkdownContent";

export default function Card({
  image,
  text
}){
  return(
    <div className="flex flex-col bg-white mb-12">
      <div className="w-full">
        <Img fluid={ image.childImageSharp.fluid } />
      </div>
      <div className="flex flex-col flex-1 justify-center px-12 py-8">
        <MarkdownContent className="text-center font-bold" content={ text }/>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object
}