import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MarkdownContent from '../MarkdownContent';

export default function Models({
    data,
    background,
    images
  }) {
  return(
    <div className="relative h-screen w-full py-24 bg-gray-800">
      <Img
        fluid={ background.childImageSharp.fluid }
        style={{position:"absolute"}}
        className="left-0 top-0 w-full h-full"
      />
      <div className="relative flex flex-col max-w-screen-lg items-center mb-20 mx-auto">
        <h3 className="text-center text-3xl text-white">{data.title}</h3>
      </div>

      <div className="relative flex max-w-screen-lg mx-auto">

          {/* Item 01 */}
          <div className="flex flex-1 flex-col mr-5">
            <div className="w-full">
              <Img fluid={ images[0].childImageSharp.fluid } />
            </div>
            <div className="flex flex-col flex-1 justify-center px-12 py-8 bg-white mb-12">
              <MarkdownContent className="text-center font-bold" content={ data.items[0].item }/>
            </div>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Download</span>
            </button>
          </div>
          {/* Item 02 */}
          <div className="flex flex-1 flex-col">
            <div className="w-full">
              <Img fluid={ images[1].childImageSharp.fluid } />
            </div>
            <div className="flex flex-col flex-1 justify-center px-12 py-8 bg-white mb-12">
              <MarkdownContent className="text-center font-bold" content={ data.items[1].item }/>
            </div>
          </div>

      </div>
    </div>
  )
}

Models.propTypes = {
  data: PropTypes.object,
  background: PropTypes.object,
  images: PropTypes.object
}