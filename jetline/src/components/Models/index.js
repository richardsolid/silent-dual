import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Model from "../Models/Model";

export default function Models({
    data,
    background,
    images
  }) {
  return(
    <div id="models" className="relative w-full py-24 bg-gray-800">
      <Img
        fluid={ background.childImageSharp.fluid }
        style={{position:"absolute"}}
        className="left-0 top-0 w-full h-full"
      />
      <div className="relative flex flex-col max-w-screen-lg items-center mb-20 mx-auto">
        <h3 className="text-center text-3xl text-white">{data.title}</h3>
      </div>

      <div className="relative flex max-w-screen-md mx-auto">
        <Model data={ data.items[0] } image={ images[0] } />
        <Model data={ data.items[1] } image={ images[1] } />
      </div>
    </div>
  )
}

Models.propTypes = {
  data: PropTypes.object,
  background: PropTypes.object,
  images: PropTypes.array
}