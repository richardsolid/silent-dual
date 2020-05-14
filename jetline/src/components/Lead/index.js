import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function Lead({
  background,
  data
}) {
  return(
    <div className="relative h-screen">
      <Img
        fluid={ background.childImageSharp.fluid }
        style={{position:"absolute"}}
        className="left-0 top-0 w-full h-full"
      />
      <div className="relative w-full h-full flex justify-center items-center flex-col text-white text-center">
        <h3 className="text-3xl md:w-7/12 xl:w-6/12 leading-loose font-bold">{data.text}</h3>
      </div>
    </div>
  )
}

Lead.propTypes = {
  data: PropTypes.object,
  background: PropTypes.object,
}