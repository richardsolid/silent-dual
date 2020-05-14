import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import InstallFriendly from "../../images/install-friendly-logo.svg";
import MarkdownContent from "../MarkdownContent";

export default function Installation({
  data,
  images
}) {
  return(
    <div className="w-full py-24 bg-white">
      <div className="flex flex-col max-w-screen-lg items-center">
        <img className="mb-8" src={InstallFriendly} alt="Install friendly"/>
        <h3 className="text-center text-3xl mb-20 md:w-7/12 xl:w-6/12">{data.title}</h3>
      </div>
      <div className="flex flex-col max-w-screen-lg mx-auto">
        <div>
          {/* Item 01 */}
          <div className="flex w-full bg-gray-300 mb-10">
            <div className="flex flex-col flex-1 justify-center px-12 py-8">
              <h4 className="text-2xl mb-5 font-bold">{ data.items[0].item }</h4>
              <MarkdownContent content={ data.items[0].body }/>
            </div>
            <div className="flex-1 px-12 py-8 border-l border-gray-500">
              <Img fluid={ images[0].childImageSharp.fluid } />
            </div>
          </div>
          {/* Item 02 */}
          <div className="flex w-full flex-row-reverse bg-gray-300 mb-10">
            <div className="flex flex-col flex-1 justify-center px-12 py-8">
              <h4 className="text-2xl mb-5 font-bold">{ data.items[1].item }</h4>
              <MarkdownContent content={ data.items[1].body }/>
            </div>
            <div className="flex-1 px-12 py-8 border-r border-gray-500">
              <Img fluid={ images[1].childImageSharp.fluid } />
            </div>
          </div>
          {/* Item 03 */}
          <div className="flex w-full bg-gray-300">
            <div className="flex flex-col flex-1 justify-center px-12 py-8">
              <h4 className="text-2xl mb-5 font-bold">{ data.items[2].item }</h4>
              <MarkdownContent content={ data.items[2].body }/>
            </div>
            <div className="flex-1 px-12 py-8 border-l border-gray-500">
              <Img fluid={ images[2].childImageSharp.fluid } />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Installation.propTypes = {
  data: PropTypes.object,
  images: PropTypes.object
}